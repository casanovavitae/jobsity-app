import React from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {increment,decrement} from '../../actions/action-counter';
import {retrieveData} from '../../actions/action-api';
//import PropTypes from 'prop-types';

class Mongo extends React.Component {
    componentWillMount(){
        this.getTasks();
    }

    render() {
        return (
            <table>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
            </table>
        )
    }
}

function mapStateToProps(state) {
    console.log("counter",state);
    return{
        counter: state.counter
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({getTasks: getTasks},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Mongo)
