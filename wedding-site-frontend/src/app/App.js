import React, {Component} from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import {ACCESS_TOKEN} from '../constants';
import Login from '../user/login/Login';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import PrivateRoute from "../common/PrivateRoute";
import {getCurrentUser} from "../util/GetAPI";
import AdminPage from "../AdminPage";
import addNotification, {Notifications} from 'react-push-notification';
import {Col, Container, Row} from "react-bootstrap";
import MainPage from "../MainPage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: null,
            isLoading: false,
            successMessage: {
                title: 'Успешно!',
                theme: 'green',
                closeButton: 'X',
                duration: '4500'
            },
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.loadCurrentUser = this.loadCurrentUser.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
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
        if (this.state.isLoading) {
            return <LoadingIndicator/>
        }
        return (
                <div className="app-container">
                    <div className="app-content">
                        <Notifications position={"top-right"}/>
                        {/*{(this.state.isAuthenticated!==null)? <a href="/admin">Панель админа</a>:null}*/}
                            <Switch>
                                <Route path="/login"
                                       render={(props) => <Login onLogin={this.handleLogin} {...props} />}/>
                                       <Route exact path="/"
                                              render={(props) => <MainPage isAuthenticated={this.state.isAuthenticated} {...props} />}/>
                                {(this.state.isAuthenticated!==null)?<PrivateRoute authenticated={this.state.isAuthenticated} exact path="/admin" handleLogout={this.handleLogout}
                                                                                   currentUser={this.state.currentUser} component={AdminPage} />:null}
                                <Route component={NotFound}/>
                            </Switch>
                    </div>
                    <div className={"footer"}>
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col md={"auto"}>Олег лучший ©</Col>
                                </Row>
                            </Container>
                    </div>
                </div>
            );

    }
}

export default withRouter(App);
