import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {retrieveData} from '../../actions/action-api'

class Header extends Component {

    componentWillMount(){
        this.props.apiGetData("API_GET_RESUME","http://localhost:3000/resumeData.json");
    }

    render() {
        if(this.props.header.api){

            let obj = this.props.header.api.data.main;

            var name = obj.name;
            var occupation = obj.occupation;
            var description = obj.description;
            var city = obj.city;
            var networks = obj.social.map(function(network){
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            });
        }
        return (
            <header id="home">
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">Im {name}.</h1>
                        <h3>Im a {city} based <span>{occupation}</span> {description}</h3>
                        <hr />
                        <ul className="social">
                            {networks}
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>

            </header>
        );
    }
}


function mapStateToProps(state) {
    return{
        header: state
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({apiGetData: retrieveData},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Header)

