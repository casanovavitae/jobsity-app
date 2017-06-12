import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
class Dashboard extends Component {

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={8} md={8}>
                            <h1>Dashboard</h1>
                            <p>Welcome to Dashboard</p>
                        </Col>
                        <Col xs={4} md={4}>
                            <img className="img-responsive" src={this.props.profile.picture} alt="profilePic" role="presentation"/>
                            <h3>{this.props.profile.nickname}</h3>
                            <strong>{this.props.profile.email}</strong>
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}

export default Dashboard;