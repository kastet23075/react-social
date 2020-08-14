import React, {Suspense} from 'react';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import HeaderContainer from './components/header/HeaderContainer';
import {connect, Provider} from 'react-redux';
import {initializeApp} from './redux/reducer/app';
import Preloader from './components/common/preloader/Preloader';
import style from './App.module.css';
import {compose} from 'redux';
import UsersContainer from './components/users/UsersContainer';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import LoginContainer from './components/login/LoginContainer';
import store from './redux/redux-store';
import {withSuspense} from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={style.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={style.appWrapperContent}>
                    <Route
                        path='/profile/:userId?'
                        render={withSuspense(ProfileContainer)}
                    />
                    <Route
                        path='/dialogs'
                        render={withSuspense(DialogsContainer)}
                    />
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route
                        path={'/login'}
                        render={withSuspense(LoginContainer)}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const MainApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    );
}

export default MainApp;