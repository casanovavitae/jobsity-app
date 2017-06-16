import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from './Header';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import {retrieveData} from '../../actions/action-api';

class Portafolio extends Component {
    constructor(props){
        super(props);
        this.state = {
            foo: 'bar',
            resumeData:{}
        }
    }

    getResumeData(){
        this.props.api(null);
    }

    componentDidMount(){
        //this.getResumeData();
    }

    render() {
        console.log(this.state.resumeData);
        return (
            <div className="App">
                <About data={this.state.resumeData.main} />
                <Resume data={this.state.resumeData.resume} />
                <Portfolio data={this.state.resumeData.portfolio} />
                <Testimonials data={this.state.resumeData.testimonials} />
                <Contact data={this.state.resumeData.main} />
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return{
        data: null
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({api:retrieveData},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Portafolio)