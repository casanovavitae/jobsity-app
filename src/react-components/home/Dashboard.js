import React from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
class Dashboard extends React.Component {

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

function mapStateToProps(state) {

    console.log('Dashboard');

    return{
        idToken: state.auth.idToken,
        profile: state.auth.profile
    }
}

export default connect(mapStateToProps)(Dashboard)