import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import {Jumbotron} from 'react-bootstrap';
import {Provider} from 'react-redux';
import App from '../App'
import Counter from '../counter/Counter'
import Home from '../home/Home'

const Err = () => (
    <Jumbotron>
        <h1>404 Page not Found</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    </Jumbotron>
)

const Links = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/protected">protected</Link>
    </nav>
)

const Protected = () => <h3>Protected</h3>
//<Route exact path="/" component={App} />
const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <Links/>
                <App/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/" component={Counter} />
                    <PrivateRoute path="/protected" component={Protected}/>
                    <Route component={Err} />
                </Switch>
            </div>
        </Router>
    </Provider>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        false ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }}/>
            )
    )}/>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
