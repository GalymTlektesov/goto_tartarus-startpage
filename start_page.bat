@echo off
echo Запуск локального сервера стартовой страницы...

cd /d "C:\Users\galym\tartarus-startpage"

:: Используем 'py' вместо 'python'
py -m http.server 8080 --bind 127.0.0.1

pause