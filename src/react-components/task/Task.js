import React, { Component } from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';


class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
    }


    render() {

        return (
            <div>
                <Panel header={title} bsStyle="primary">
                    Panel content
                </Panel>
            </div>
        );
    }
}

export default Task;

