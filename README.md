# Corevaluesapp

## Global setup
This project requires several globally installed tools as listed below:  
npm install angular-cli -g  
npm install swagger -g  
npm install sequelize-cli -g  
npm install gulp -g  

## Requirements
A functioning system requires the following:  

an installed instance of postgres  
Node JS version 7+    
A running dataserver on port 5000  
A running client server on port 3000  
if these are running you should be able to access the system at:  
http://localhost:3000
http://localhost:5000/api-docs/

## Development notes
Both the client and server applications use node monitoring to watch for file changes and redeploy the server(s) automatically. ng server and gulp start-server provide this functionality.

## Install and starting the server
Clone the repo and navigate into the repo directory angular-seqeulize-swagger or rename the directory before continuing to something shorter.

Be sure that postgress is installed and running in the default mode, database connection details are:  

host : localhost  
port:  5432  
username: postgres  
password: postgres  

run the following
npm install  
gulp start-server  
// starts the database and restful api server on http://localhost:5000    
ng serve   
// starts the client server on  http://localhost:3000    


# Data Server
The server portion of this project is build using sequelize and swagger, this combination allows the definition of the data model and the API model in the same directory. to cerate a new dabase object and associated restful APi documentation duplicate the card model object and changes the name card to the new name and schema.

### Swagger API documentation
the server has swagger bbuilt into the deployment which provides a set of online live documentation for developers who may use the API endpoints.  
This documentatoin cannot be found on the default installation at http://localhost:5000/api-docs/  

This details the restful service calls for Users, Cards, Corevalues and CorevalueSets and can be used to query the database.  

# Client
The client portion of this project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

### Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
