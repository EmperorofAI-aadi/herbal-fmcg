@echo off
title PrakritiGlow - Website Server
echo ==================================================
echo    PrakritiGlow Website shuru ho rahi hai...
echo    Browser me kholo: http://localhost:5173
echo    Band karne ke liye ye window close kar dena.
echo ==================================================
where node >nul 2>nul
if %errorlevel%==0 (
  npm run dev
) else (
  set PATH=C:\hotel\tools\node-v22.23.4-win-x64;%PATH%
  npm run dev
)
pause
