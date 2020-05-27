import React, {Component} from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import {ACCESS_TOKEN} from '../constants';
import Login from '../user/login/Login';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
// import {Layout, notification} from 'antd';
import PrivateRoute from "../common/PrivateRoute";
import {getCurrentUser} from "../util/GetAPI";
import AdminPage from "../AdminPage";
// const {Content} = Layout;
import {Notifications} from 'react-push-notification';
import {Col, Container, Row} from "react-bootstrap";
import MainPage from "../MainPage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: null,
            isLoading: false
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.loadCurrentUser = this.loadCurrentUser.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        // notification.config({
        //     placement: 'topRight',
        //     top: 70,
        //     duration: 3,
        // });
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
                isLoading: false
            });
        });

    }

    componentDidMount() {
        this.loadCurrentUser();
    }

    handleLogout(redirectTo = "/login", notificationType = "success", description = "You're successfully logged out.") {
        localStorage.removeItem(ACCESS_TOKEN);

        this.setState({
            currentUser: null,
            isAuthenticated: false
        });

        this.props.history.push(redirectTo);

        // notification[notificationType]({
        //     message: 'Förenings App',
        //     description: description,
        // });
    }


    handleLogin() {
        // notification.success({
        //     message: 'Förenings App',
        //     description: "You're successfully logged in.",
        // });
        this.loadCurrentUser();
        this.props.history.push("/");
    }

    render() {
        if (this.state.isLoading) {
            return <LoadingIndicator/>
        }

        return (
                <div className="app-container">
                    <div className="app-content">
                        <Notifications position={"top-right"} />
                            <Switch>

                                <Route path="/login"
                                       render={(props) => <Login onLogin={this.handleLogin} {...props} />}/>

                                <Route exact path="/" component={MainPage}/>
                                {(this.state.isAuthenticated!==null)?<PrivateRoute authenticated={this.state.isAuthenticated} path="/admin" handleLogout={this.handleLogout}
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
