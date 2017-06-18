import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Redirect, Route, Switch} from 'react-router'
import { HashRouter, Link } from 'react-router-dom'
import Header from './global/Header'
import Counter from './counter/Counter'
/*PORTAFOLIO*/
import Home from './portafolio/Home'
import Resume from './portafolio/Resume'
import Portfolio from './portafolio/Portfolio'
import Testimonials from './portafolio/Testimonials'
import Footer from './portafolio/Footer'
import Contact from './portafolio/Contact'
import About from './portafolio/About'
/***********/


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
                    <li><Link to="/Resume">Resume</Link></li>
                    <li><Link to="/Portfolio">Portfolio</Link></li>
                    <li><Link to="/Testimonials">Testimonials</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/About">About</Link></li>
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
                    <Route exact path="/" component={Home} />
                    <Route path="/Resume" component={Resume} />
                    <Route exact path="/Portfolio" component={Portfolio} />
                        <Route path='/Portfolio/modal-01' component={Counter}/>
                    <Route path="/Testimonials" component={Testimonials} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/About" component={About} />
                    <Route component={Err} />
                </Switch>
                <Footer/>
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
        profile: state.auth.profile,
    }
}

export default connect(mapStateToProps)(Root)
