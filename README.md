 # Serverless Electron desktop applicationa

1. npm install --save-dev electron@latest

   npm install electron-packager --save-dev



2. Modification to package.json file
 
# https://www.christianengvall.se/electron-packager-tutorial/


 {
 
   .....
   .....
  "main": "main.js",

"scripts": {
    ..............
     .........

    "start:electron": "ng build --base-href ./ && electron .",

    "package-mac": "electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds",

    "package-win": "electron-packager .  --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\"Serverless Deployment\"",

    "package-linux": "electron-packager . --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icons/png/icon.png --prune=true --out=release-builds"
  },

 }

 2. Modification to angular.json file 

    #  set this outputpath to dist
    
  "architect": {
        "build": {
          "options": {
            "outputPath": "dist", 
          }
        }
  }


3. Create asset folder to fulfile the packagr for cross plateform 

    asset---

        icons---      

             mac--
                  icon.icns
             win--
                  icon.ico     
             png--
                  icon.png 


4. Release-build  

                npm run package-mac
                npm run package-win
                npm run package-linux

# Author Raju Vishwakarma

