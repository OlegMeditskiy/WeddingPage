import React, {Component} from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import FlagIcon, {ACCESS_TOKEN, LANGUAGE, translation} from '../constants';
import Login from '../user/login/Login';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import PrivateRoute from "../common/PrivateRoute";
import {getCurrentUser} from "../util/GetAPI";
import AdminPage from "../Admin/AdminPage";
import addNotification, {Notifications} from 'react-push-notification';
import {Button, Col, Container, Row} from "react-bootstrap";
import MainPage from "../MainPage/MainPage";
import InvitationForPerson from "../MainPage/InvitationForPerson";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: null,
            isLoading: false,
            language: 'en',
            successMessage: {
                title: 'Успешно!',
                theme: 'green',
                closeButton: 'X',
                duration: '4500',
            },
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.loadCurrentUser = this.loadCurrentUser.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this._onSetLanguageToEnglish=this._onSetLanguageToEnglish.bind(this);
        this._onSetLanguageToRussian=this._onSetLanguageToRussian.bind(this);
        this._onSetLanguageToSwedish=this._onSetLanguageToSwedish.bind(this);
        this.loadLanguage=this.loadLanguage.bind(this);

    }
    _onSetLanguageToRussian(event) {
        event.preventDefault();
        localStorage.setItem(LANGUAGE,'ru')
        this.loadLanguage();
    }
    _onSetLanguageToEnglish(event) {
        event.preventDefault();
        localStorage.setItem(LANGUAGE,'en')
        this.loadLanguage();
    }
    _onSetLanguageToSwedish(event) {
        event.preventDefault();
        localStorage.setItem(LANGUAGE,'sv')
        this.loadLanguage();
    }
    loadLanguage(){
        if (!localStorage.getItem(LANGUAGE)) {
            localStorage.setItem(LANGUAGE,"en")
        }
        else {
            this.setState({
                language: localStorage.getItem(LANGUAGE)
            })
        }

    }

    loadCurrentUser() {
        this.setState({
            isLoading: true
        });
        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    isAuthenticated: true,
                    isLoading: false
                });
            }).catch(() => {
            this.setState({
                isLoading: false,
                isAuthenticated: false,
            });
        });

    }

    componentDidMount() {
        this.loadLanguage();
        this.loadCurrentUser();
    }

    handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN);
        this.setState({
            currentUser: null,
            isAuthenticated: false
        });
        addNotification({
            message: 'Вы вышли из аккаунта',
            ...this.state.successMessage
        });
        this.props.history.push("/login");
    }


    handleLogin() {
        this.loadCurrentUser();
        addNotification({
            message: 'Вы успешно авторизовались',
            ...this.state.successMessage
        });
        this.props.history.push("/admin");
    }

    render() {
        translation.setLanguage(this.state.language);
        if (this.state.isLoading) {
            return <LoadingIndicator/>
        }
        return (
                <div className="app-container">
                    <div className="app-content">
                        <Notifications position={"top-right"}/>
                            <Switch>
                                <Route path="/login"
                                       render={(props) => <Login onLogin={this.handleLogin} {...props} />}/>
                                       <Route exact path="/"
                                              render={(props) => <MainPage />}/>
                                <Route path="/invitation/:invitationKey"
                                       render={(props) => <InvitationForPerson {...props}/>}/>
                                {(this.state.isAuthenticated!==null)?<PrivateRoute authenticated={this.state.isAuthenticated} path="/admin" handleLogout={this.handleLogout}
                                                                                   currentUser={this.state.currentUser} language={this.state.language}  component={AdminPage} />:null}
                                <Route component={NotFound}/>
                            </Switch>
                    </div>
                    <div className={"footer"}>
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col md={"auto"}>
                                        <Button onClick={this._onSetLanguageToRussian} className={"languageButton"} type={"submit"}><FlagIcon code={"ru"} size={"2x"} /></Button>
                                            <Button onClick={this._onSetLanguageToEnglish} className={"languageButton"} type={"submit"}><FlagIcon code={"gb"} size={"2x"} /></Button>
                                        <Button onClick={this._onSetLanguageToSwedish} className={"languageButton"} type={"submit"}><FlagIcon code={"se"} size={"2x"} /></Button>
                                        </Col>
                                </Row>
                            </Container>
                    </div>
                </div>
            );

    }
}

export default withRouter(App);
