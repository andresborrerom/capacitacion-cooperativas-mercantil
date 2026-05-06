# servir.ps1 — Servidor HTTP local para el navegador del curso.
# No requiere instalar nada (usa .NET incluido en Windows).
#
# Uso:
#   - Doble-click a servir.bat (recomendado), o
#   - Desde PowerShell: powershell -ExecutionPolicy Bypass -File servir.ps1

Set-Location -Path $PSScriptRoot

# Probamos puertos en orden hasta encontrar uno libre. Esto evita conflictos
# con URL ACLs huérfanos (si arrancaste el servidor antes y por algún motivo
# Windows reservó el puerto 8000 sin liberarlo). No requiere admin.
$puertosACandidatos = @(8000, 8001, 8002, 8080, 8888, 9000)
$http = $null
$puerto = $null
$url = $null

Write-Host ""
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Servidor del curso - Mercantil Asset & Wealth Management" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Carpeta: $(Get-Location)" -ForegroundColor Gray
Write-Host ""

foreach ($p in $puertosACandidatos) {
    $tryUrl = "http://localhost:$p/"
    $tryHttp = [System.Net.HttpListener]::new()
    try {
        $tryHttp.Prefixes.Add($tryUrl)
        $tryHttp.Start()
        # Funcionó!
        $http = $tryHttp
        $puerto = $p
        $url = $tryUrl
        Write-Host "Puerto $p libre. Servidor iniciado." -ForegroundColor Green
        break
    } catch {
        Write-Host "Puerto $p ocupado, probando siguiente..." -ForegroundColor DarkYellow
        try { $tryHttp.Close() } catch {}
    }
}

if (-not $http) {
    Write-Host ""
    Write-Host "Error: ningun puerto disponible en $($puertosACandidatos -join ', ')" -ForegroundColor Red
    Write-Host ""
    Write-Host "Posibles soluciones:" -ForegroundColor Yellow
    Write-Host "  - Reinicia Windows (libera URL ACLs huerfanos)." -ForegroundColor White
    Write-Host "  - O ejecuta en PowerShell COMO ADMINISTRADOR:" -ForegroundColor White
    Write-Host "    netsh http delete urlacl url=http://localhost:8000/" -ForegroundColor White
    Write-Host "  - O agrega mas puertos a `$puertosACandidatos en servir.ps1." -ForegroundColor White
    Write-Host ""
    Write-Host "Presiona cualquier tecla para salir..." -ForegroundColor Gray
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

Write-Host ""
Write-Host "URL:     $url" -ForegroundColor Green
Write-Host ""
Write-Host "Se abrira automaticamente: $($url)indice.html" -ForegroundColor Yellow
Write-Host "Para detener el servidor: Ctrl+C en esta ventana." -ForegroundColor Gray
Write-Host ""

Start-Process "$($url)indice.html"

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".md"   = "text/plain; charset=utf-8"
    ".txt"  = "text/plain; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".pdf"  = "application/pdf"
    ".ico"  = "image/x-icon"
    ".woff" = "font/woff"
    ".woff2" = "font/woff2"
}

$rootPath = [System.IO.Path]::GetFullPath((Get-Location).Path)

try {
    while ($http.IsListening) {
        $context = $http.GetContext()
        $request = $context.Request
        $response = $context.Response

        try {
            $localPath = [Uri]::UnescapeDataString($request.Url.LocalPath).TrimStart('/')
            if ($localPath -eq "") { $localPath = "indice.html" }

            $filePath = Join-Path (Get-Location) $localPath
            $fullPath = [System.IO.Path]::GetFullPath($filePath)

            if (-not $fullPath.StartsWith($rootPath)) {
                $response.StatusCode = 403
                $response.Close()
                continue
            }

            # Si la URL apunta a un directorio (ej. /sesiones/.../conos-rentabilidad/),
            # resolver a su index.html interno. Esto replica el comportamiento de
            # GitHub Pages, Apache, nginx, etc. Sin esto, el servidor 404'eaba en
            # cualquier link que terminara en "/" o apuntara a una carpeta.
            if (Test-Path $filePath -PathType Container) {
                $candidate = Join-Path $filePath "index.html"
                if (Test-Path $candidate -PathType Leaf) {
                    $filePath = $candidate
                }
            }

            if (Test-Path $filePath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $mime = $mimeTypes[$ext]
                if (-not $mime) { $mime = "application/octet-stream" }
                $response.ContentType = $mime
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
                Write-Host "  200  $localPath" -ForegroundColor DarkGray
            } else {
                $response.StatusCode = 404
                $msg = [System.Text.Encoding]::UTF8.GetBytes("404 - No encontrado: $localPath")
                $response.ContentType = "text/plain; charset=utf-8"
                $response.ContentLength64 = $msg.Length
                $response.OutputStream.Write($msg, 0, $msg.Length)
                Write-Host "  404  $localPath" -ForegroundColor DarkYellow
            }
        } catch {
            Write-Host "  ERR  $_" -ForegroundColor Red
            try { $response.StatusCode = 500 } catch {}
        } finally {
            try { $response.Close() } catch {}
        }
    }
} finally {
    $http.Stop()
    $http.Close()
    Write-Host ""
    Write-Host "Servidor detenido." -ForegroundColor Yellow
}
