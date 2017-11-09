# [react-redux-starter-kit](http://cloudmu.github.io/react-redux-starter-kit/)

This is yet another single page web application template using React. However, this project attempts to balance simplicity with developing a real web application that actually "does something useful". 
It demonstrates authentication, navigation, asynchronous data fetching, error handling, and caching and pagination, etc. using the technologies listed below.

But first, the [demo!](http://cloudmu.github.io/react-redux-starter-kit/) It displays information retrieved from the Github API - most followed users and most starred repo's. 
Credentials are user *admin* and password *password*. 

Note the deployed demo may not always be up to date. Check out the latest project and [run the demo](#getting-started) yourself.
Here's a screenshot:

![alt text](https://raw.githubusercontent.com/cloudmu/react-redux-starter-kit/master/screenshot.png "Screenshot")

## Technologies used:

- [React](https://github.com/facebook/react)
- [Redux](https://github.com/rackt/redux)
- [React Router](https://github.com/rackt/react-router)
- [Bootstrap](https://github.com/twbs/bootstrap)
- [create-react-app](https://github.com/facebookincubator/create-react-app/)
- [Babel](http://babeljs.io/) and [Webpack](http://webpack.github.io/) (now behind the scenes thanks to create-react-app)

## Feature highlights:

#### Best React Practice - [Separating "smart" and "dumb" components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

This design pattern makes even more sense when using React along with Redux, where top-level smart components (a.k.a. containers in this codebase such as `UsersPage` and `ReposPage`) subscribe to Redux state and dispatch Redux actions, while low level components (such as `User`, `Repo`, and `Header`) read data and invoke callbacks passed in as props.

#### Async Data Fetching with Caching and Pagination

The `UsersPage` and `ReposPage` would show most followed Github users (with 1000+ followers) and most starred Github repos (with 10000+ stars). The async actions (see `users` and `repos` under actions) fetch data from the following Github APIs: 

-  `https://api.github.com/search/users?q=followers:>1000&order=desc&page=1` 
-  `https://api.github.com/search/repositories?q=stars:>10000&order=desc&page=1`

The fetched data are stored with the page number as the lookup key, so that the local copy can be shown without the need to re-fetch the same data remotely each time. However cached data can be invalidated if desired.

#### Error Handling while Fetching Data

You can test this by disabling your internet connection. Or even better, you can page through `UsersPage` or `ReposPage` very quickly and hopefully invoke Github's API rate limit for your IP address. 
The application would fail gracefully with the error message if data fetching (for a particular page) fails. However, the application can still show cached data for other pages, which is very desirable behavior.

#### Authentication and Restricted Pages

Certain UI pages (`UsersPage` and `ReposPage`) are only accessible after signing in to the application. When accessing restricted pages without signing in first, the application redirects to the `Login` page. The authentication is based on [JSON Web Token (JWT)](https://jwt.io/).

## Getting Started
Thanks to [create-react-app](https://github.com/facebookincubator/create-react-app), we will have a configuration-free dev experience. 

To get started, please clone this git repository and then run `npm install` once under the project top-level directory. 

```
git clone https://github.com/cloudmu/react-redux-starter-kit.git
cd react-redux-starter-kit
npm install
```
This will install the dependencies for the client side.

**You’ll need to have Node installed on your machine**. (Node >= 6 and npm >= 3 are recommended).

## While You're Developing...
Whenever you want to run/test the program, `cd` to the project top-level directory. Use these commands:

### `npm start`

Runs the app in the development mode, using the Webpack-provided "development server".<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.<br>
**Note The web app is up and running now, but some features (such as JWT-based authentication and server alerts/notifications) rely on an API Server. Be sure to run the [API Server](#an-api-server) as well.**

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

Note: `eject` is an advanced `create-react-app` tool. Read the [how-to](https://github.com/facebookincubator/create-react-app/blob/master/template/README.md) for details.


## How Do I ... ?

This project was ported to use [create-react-app](https://github.com/facebookincubator/create-react-app) for handling all assets. 
Many questions are answered in its [how-to](https://github.com/facebookincubator/create-react-app/blob/master/template/README.md).
