@echo off
REM Lanzador del servidor local del curso.
REM Doble-click a este archivo para arrancar el servidor
REM y abrir el navegador en indice.html.

cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -NoProfile -File "servir.ps1"
pause
