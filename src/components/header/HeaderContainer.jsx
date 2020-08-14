import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {logout} from '../../redux/reducer/authentication';
import {compose} from 'redux';

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.authentication.isAuth,
    login: state.authentication.login

});

export default compose(
    connect(mapStateToProps,{
        logout
    })
)(HeaderContainer);