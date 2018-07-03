mkdir docs/static/imgs # Static files which needs to export to github pages 
cp -r src/static/imgs/ docs/static/imgs/

touch docs/CNAME # Generating CNAME file for github pages to resolve DNS
echo "shanghai.freecodecamp.cn" >> docs/CNAME # site hostname
cp favicon.ico docs/favicon.ico # Override React simple app auto generated favicon