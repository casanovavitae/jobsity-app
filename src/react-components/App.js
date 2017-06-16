/*import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Jumbotron} from 'react-bootstrap';
import {Provider} from 'react-redux';
import HeaderMain from './global/HeaderMain'
import Login from './home/Login';
import Counter from './counter/Counter'
import Dashboard from './home/Dashboard'
import Portafolio from './portafolio/Portafolio'





const Err = () => (
    <Jumbotron>
        <h1>404 Page not Found</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    </Jumbotron>
)

class App extends React.Component {

    render() {
        let page;
        if(localStorage.getItem('idToken') != null){
            page =
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/portafolio" component={Portafolio} />
                    <Route path="/counter" component={Counter} />
                    <Route component={Err} />
                </Switch>
        } else {
            page = <Login />
        }
        return (
            <Provider store={this.props.store}>
                <Router>
                    <div>
                        <Grid>
                            <Row>
                                <Col xs={3} md={3}>
                                    <HeaderMain/>
                                </Col>
                                <Col xs={9} md={9}>
                                    {page}
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </Router>
            </Provider>
        )
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired
};

function mapStateToProps(state) {

    return{
        idToken: state.auth.idToken,
        profile: state.auth.profile
    }
}

export default connect(mapStateToProps)(App)*/
