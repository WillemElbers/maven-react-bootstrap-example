var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var IndexRoute  = require('react-router').IndexRoute

var PageWrapper = require('./components/PageWrapper.jsx');
var Home = require('./components/Home.jsx');
var AboutPage = require('./components/AboutPage.jsx');
var PageNotFound = require('./components/PageNotFound.jsx');

/**
 * React routes
 */
ReactDOM.render((
    <Router>
        <Route path="/" component={PageWrapper}>
            <IndexRoute component={Home} />
            <Route path="about" component={AboutPage} />
            <Route path="*" component={PageNotFound} />
        </Route>
    </Router>
), document.getElementById('app'))