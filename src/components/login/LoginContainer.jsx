import React from 'react';
import Login from './Login';
import {connect} from 'react-redux';
import {compose} from 'redux';

class LoginContainer extends React.Component {
    render() {
        return (
            <Login/>
        );
    }
}

const mapStateToProps = (state) => ({

});

export default  compose(
    connect(mapStateToProps)
)(LoginContainer);