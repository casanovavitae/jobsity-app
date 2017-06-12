import React from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {increment} from '../../actions/counter/action-counter';
import {decrement} from '../../actions/counter/action-counter';
//import PropTypes from 'prop-types';

class Counter extends React.Component {
    /*static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired
    }*/

    render() {
        return (
            <p>
                Clicked: {this.props.counter} times
                {' '}
                <button onClick={() => this.props.actionIncrement(this.props.counter)}>
                    +
                </button>
                {' '}
                <button onClick={() => this.props.actionDecrement(this.props.counter)}>
                    -
                </button>
            </p>
        )
    }
}

function mapStateToProps(state) {
    return{
        counter: state.counter
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({actionIncrement: increment,actionDecrement:decrement},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Counter)
