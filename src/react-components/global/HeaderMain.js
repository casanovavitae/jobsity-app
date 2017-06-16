import React from 'react';
import Auth0Lock from 'auth0-lock';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import {logIn,logOut} from '../../actions/action-auth'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class HeaderMain extends React.Component {
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

        this.getData();
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

    getData(){
        if(localStorage.getItem('idToken') != null){
            let auth = {
                idToken: localStorage.getItem('idToken'),
                profile: JSON.parse(localStorage.getItem('profile'))
            }

            this.props.logIn(auth);
        }
    }

    render() {
        return (
            <div className="App">
                <Header
                    onLogoutClick={this.logout}
                    onLoginClick={this.showLock}
                    lock={this.lock}
                    idToken={this.props.auth.idToken}
                    profile={this.props.auth.profile}
                />
            </div>
        );
    }
}

HeaderMain.defaultProps = {
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
export default connect(mapStateToProps,matchDispatchToProps)(HeaderMain)
