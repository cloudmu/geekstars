import React, { Component } from "react";

import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Single Page Web App Template</h1>
            <p className="lead">
              This is yet another React based single page web application template.
              However, this one attempts to go beyond the typical simple boilerplates,
              {" "}
              by showcasing several great technologies (such as
              {" "}
              <a
                href="https://github.com/facebook/react"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              ,{" "}

              <a
                href="https://github.com/reactjs/redux"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>
              ,{" "}

              <a
                href="https://github.com/rackt/react-router"
                target="_blank"
                rel="noopener noreferrer"
              >
                React-Router
              </a>
              ,{" "}

              <a
                href="https://github.com/twbs/bootstrap "
                target="_blank"
                rel="noopener noreferrer"
              >
                Bootstrap
              </a>
              ,
              ) used together to develop a more complex web
              application, with features such as authentication, navigation, asynchronous data fetching,
              {" "}
              error handling, caching and pagination, etc.
            </p>

            <div className="home-humility">
              <a
                href="https://github.com/cloudmu/geekstars"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github" /> View on Github
              </a>
              <a
                href="https://twitter.com/_cloudmu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter home-fa-twitter" />_cloudmu
              </a>
            </div>
          </div>
        </div>

        <div className="container">


          <h3>Technologies used:</h3>

          <ul>
            <li>
              <a
                href="https://github.com/facebook/react"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
            </li>
            <li>
              <a
                href="https://github.com/reactjs/redux"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ReactTraining/react-router"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Router
              </a>
            </li>
            <li>
              <a
                href="https://github.com/twbs/bootstrap "
                target="_blank"
                rel="noopener noreferrer"
              >
                Bootstrap
              </a>
            </li>
            
            <li>
              <a
                href="https://github.com/facebookincubator/create-react-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                create-react-app
              </a>
            </li>
            <li>
              <a
                href="http://babeljs.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Babel
              </a>
              {" "}and{" "}
              <a
                href="http://webpack.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}Webpack
              </a>
              {" "}(now behind the scenes thanks to create-react-app)
            </li>

          </ul>

          <h3>Feature highlights:</h3>
          <br />
          <dl>
            <dt>
              Best React practice by separating{" "}
              <a
                href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0"
                target="_blank"
                rel="noopener noreferrer"
              >
                "smart" and "dumb" components
              </a>
            </dt>
            <dd>
              This design pattern makes even more sense when using React along with Redux,
              {" "}
              where top-level smart components (a.k.a. containers in this codebase such as
              {" "}
              <code>UsersPage</code>
              {" "}
              and
              {" "}
              <code>ReposPage</code>
              ) subscribe to Redux state and
              {" "}
              dispatch Redux actions, while low level components (such as
              {" "}
              <code>User</code>
              ,
              {" "}
              <code>Repo</code>
              , and
              {" "}
              <code>Header</code>
              ) read data and invoke
              {" "}
              callbacks passed in as props.
            </dd>
            <br />

            <dt>Async Data fetching with caching and pagination</dt>
            <dd>
              The <code>UsersPage</code> and <code>ReposPage</code>
              {" "}
              would show most followed Github users (with 1000+ followers) and most starred
              {" "}
              Github repos (with 10000+ stars).  The async actions (see
              <code>users</code>
              , and
              {" "}
              <code>repos</code>
              {" "}
              under actions) fetch data from the following Github APIs:
              {" "}
              <br />
              <code>
                https://api.github.com/search/users?q=followers:&gt;1000&order=desc&page=1
              </code>
              <br />
              <code>
                https://api.github.com/search/repositories?q=stars:&gt;10000&order=desc&page=1
              </code>
              <br />

              The fetched data are stored with the page number as the lookup key, so that the local copy can be
              {" "}
              shown without the need to re-fetch the same data remotely each time. However cached data can be
              {" "}
              invalidated if desired.
            </dd>
            <br />

            <dt>Data fetching error handling</dt>
            <dd>
              You can test this by disabling your internet connection. Or even better, you can page through
              {" "}
              <code>UsersPage</code>
              {" "}
              or
              {" "}
              <code>ReposPage</code>
              {" "}
              very quickly and hopefully invoke Github's API
              {" "}
              rate limit for your IP address.
              <br />

              The application would fail gracefully with the error message if data fetching (for a particular page) fails.
              {" "}
              However, the application can still show cached data for other pages, which is very desirable behavior.
            </dd>
            <br />

          </dl>
        </div>
      </div>
    );
  }
}
