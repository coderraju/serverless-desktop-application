# Portal

Web application developed using [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

### About

- Portal application allows user access many micro frontend applications via dashboard.

# Getting started

1. Install angular-cli globaly 
  ```bash
  npm install -g @angular/cli
  ```

2. Go to frontend/poratal folder and run the following command:
 ```bash
 sh portal-dev-build.sh
 ```
 
3. Launch development server, and open `localhost:80` in your browser:
 ```bash
 npm start
 ```
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build Application for Prod

 Go to frontend/poratal folder and run the following command:
 ```bash
 sh portal-prod-build.sh
 ```

## Note

Windows users please run the sh commands in gitbash, since cmd doesn't support linux commnads.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Copyright

 Copyright (C) @Incedo Inc. - All Rights Reserved
 * Unauthorized copying of this project, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Gavishiddappa Gadagi <gavishiddappa.gadagi@incedoinc.com> Nov 2019


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

