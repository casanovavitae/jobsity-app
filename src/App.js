import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';
import './App.css';
import { createStore } from 'redux'
import {Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './react-components/home/Home';
import Dashboard from './react-components/home/Dashboard';
import Header from './react-components/global/Header';
import Counter from './react-components/counter/Counter';
import counter from './reducers/Counter'

const store = createStore(counter);

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            idToken:'',
            profile:{}
        }
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

        this.getData();
    }

    setData(idToken,profile){
        localStorage.setItem('idToken',idToken);
        localStorage.setItem('profile',JSON.stringify(profile));
        this.setState({
            idToken: localStorage.getItem('idToken'),
            profile: JSON.parse(localStorage.getItem('profile'))
        });
    }

    getData(){
        if(localStorage.getItem('idToken') != null){
            this.setState({
                idToken: localStorage.getItem('idToken'),
                profile: JSON.parse(localStorage.getItem('profile'))
            },()=>{
                console.log(this.state);
            });
        }
    }

    showLock(){
        this.lock.show();
    }

    logout(){
        this.setState({
            idToken:'',
            profile:''
        },()=>{
            localStorage.removeItem('idToken');
            localStorage.removeItem('profile');
        })
    }

    render() {
        let page;
        if(this.state.idToken){
            page = <div><Dashboard lock={this.lock} idToken={this.state.idToken} profile={this.state.profile}/>
                <Counter
                value={store.getState()}
                onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
                />
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
                    idToken={this.state.idToken}
                    profile={this.state.profile}
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

export default App;
