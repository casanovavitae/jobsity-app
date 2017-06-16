import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Redirect, Route, Switch} from 'react-router'
import { HashRouter, Link } from 'react-router-dom'
import Header from './global/Header'
import Login from './home/Login'
import Counter from './counter/Counter'
import Portafolio from './portafolio/Portafolio'

const Err = () => (
    <div>
        <h1>404 Page not Found</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    </div>
)

const Links = () => (
    <header id="home">
        <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                    <li className="current"><Link to="/">Home</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
        </nav>
    </header>
)


const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <div>
                <Links/>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/portafolio" component={Portafolio} />
                    <Route component={Err} />
                </Switch>
            </div>
        </HashRouter>
    </Provider>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        false ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }}/>
            )
    )}/>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    console.log(state);
    return{
        idToken: state.auth.idToken,
        profile: state.auth.profile
    }
}

export default connect(mapStateToProps)(Root)
