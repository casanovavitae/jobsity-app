import React from 'react';
import Auth0Lock from 'auth0-lock';
import {Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home/Home';
import Dashboard from './home/Dashboard';
import Header from './global/Header';
import Counter from './counter/Counter';
import {logIn,logOut} from '../actions/action-auth'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.showLock   = this.showLock.bind(this);
        this.logout     = this.logout.bind(this);
    }

    componentWillMount(){
        this.lock = new Auth0Lock(this.props.clientId,this.props.domain);
        this.lock.on('authenticated',(authResult) => {
            this.lock.getProfile(authResult.idToken,(error,profile)=>{
                if(error){
                    console.log(error);
                    return;
                }

                this.setData(authResult.idToken,profile);
            });

        });
    }

    setData(idToken,profile){
        localStorage.setItem('idToken',idToken);
        localStorage.setItem('profile',JSON.stringify(profile));

        let auth = {
            idToken: localStorage.getItem('idToken'),
            profile: JSON.parse(localStorage.getItem('profile'))
        }

        this.props.logIn(auth);

    }

    showLock(){
        this.lock.show();
    }

    logout(){
        let auth = {
            idToken:'',
            profile: ''
        }

        this.props.logOut(auth);
    }

    render() {

        let page;
        if(this.props.auth.idToken){
            page = <div><Dashboard lock={this.lock} idToken={this.props.auth.idToken} profile={this.props.auth.profile}/>
            </div>
        }else {
            page = <Home/>
        }
        return (
            <div className="App">
                <Header
                    onLogoutClick={this.logout}
                    onLoginClick={this.showLock}
                    lock={this.lock}
                    idToken={this.props.auth.idToken}
                    profile={this.props.auth.profile}
                />
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            {page}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

App.defaultProps = {
    clientId: 'Y43zKBItUMFQkfsMnLR4KIfbVIqY37Xm',
    domain: 'casanova-vitae.auth0.com'
};

function mapStateToProps(state) {
    return{
        auth: state.auth
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({logIn: logIn,logOut:logOut},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(App)
