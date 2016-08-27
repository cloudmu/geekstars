# [react-redux-starter-kit](http://cloudmu.github.io/react-redux-starter-kit/)

Yet another React/Redux starter kit, but with zero build config. [Demo](http://cloudmu.github.io/react-redux-starter-kit/)

![alt text](https://raw.githubusercontent.com/cloudmu/react-redux-starter-kit/master/screenshot.png "Screenshot")

## What's New

* I recently (Aug/2016) ported this project to use [create-react-app](https://github.com/facebookincubator/create-react-app). Enjoy config-free (fatigue-free) React!
* A JWT based API server is added, thanks to the latest create-react-app feature [Proxying API Requests in Development](https://github.com/facebookincubator/create-react-app/blob/ef94b0561d5afb9b50b905fa5cd3f94e965c69c0/template/README.md#proxying-api-requests-in-development).
* The async actions (involving restful api calls for authentication and fetching Github users and repos) are now refactored to go through a common utility callApi.

## Overview

This is yet another React and Redux based web application starter kit. However, this one attempts to go beyond the typical simple boilerplates, 
by showcasing several great technologies (such as [React](https://github.com/facebook/react), [Redux](https://github.com/gaearon/redux), 
[React-Router](https://github.com/rackt/react-router), [Bootstrap](https://github.com/twbs/bootstrap), [Babel](http://babeljs.io), 
[Webpack](http://webpack.github.io) and [JWT](https://jwt.io)) used together to develop a more complex web application, with features such as 
authentication, navigation, asynchronous data fetching, error handling, caching and pagination, etc.

## Available Scripts
Thanks to [create-react-app](https://github.com/facebookincubator/create-react-app) we get the build configuration and scripts ready out of the box. 

In the project directory, you should install the dependencies first:
### `npm install`

**You’ll need to have Node installed on your machine**. (Node >= 6 and npm >= 3 are recommended).

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## How Do I ... ?

This project was ported to use [create-react-app](https://github.com/facebookincubator/create-react-app) for handling all assets. 
Please refer its [how-to](https://github.com/facebookincubator/create-react-app/blob/master/template/README.md).

## Server Side
Above description and scripts are for the client side based on the [create-react-app](https://github.com/facebookincubator/create-react-app).  Note certain UI pages require authentication.
In order for the JWT based authentication to work, you need to run a separate [API server](https://github.com/cloudmu/react-redux-starter-kit/tree/master/server).  The client login/logout requests will be proxied to the API server, thanks to the create-react-app feature 
[Proxying API Requests in Development](https://github.com/facebookincubator/create-react-app/blob/ef94b0561d5afb9b50b905fa5cd3f94e965c69c0/template/README.md#proxying-api-requests-in-development).

**See the proxy configuration in the packages.json:**
```
"proxy": "http://localhost:3001/",
```
Under the [server directory](https://github.com/cloudmu/react-redux-starter-kit/tree/master/server), you can run (in a separate command line window):

### `npm install`
This will install the dependencies for the server side.

### `npm run server`
This will run the API server on port 3001, which will be listening to the authentication requests (login/logout from the client).
