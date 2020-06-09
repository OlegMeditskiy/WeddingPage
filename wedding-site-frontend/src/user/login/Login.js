import React, {Component} from 'react';
import './Login.css';
import {ACCESS_TOKEN} from '../../constants';
// import {Button, Form, Input, notification} from 'antd';
// import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {login} from "../../util/AuthorizationAPI";
import addNotification from "react-push-notification";
import '../../Notidication.css'
import {Button, Form} from "react-bootstrap";

class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
            warningMessage:{
                title: 'Упс',
                theme: 'red',
                closeButton: 'X',
                duration:'4500'
            },
            username:'',
            password:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit (event) {
        event.preventDefault();
        const loginRequest = {
            username: this.state.username,
            password: this.state.password
        };
        login(loginRequest)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                this.props.onLogin();
            }).catch(error => {
            if (error.status === 401){
                addNotification({
                    message: 'Your Username or Password is incorrect. Please try again!',
                    ...this.state.warningMessage
                });
            } else {
                addNotification({
                    message: error.message || 'Sorry! Something went wrong. Please try again!',
                    ...this.state.warningMessage
                });
            }
        })
    };
    render() {
        return(
            <div className="login-container">
                <h1 className="page-title">Login</h1>
                <div style={{"height":"calc(100vh - 146px)"}} className="login-content">
                    <Form
                        name="normal_login"
                        className="login-form"
                        onSubmit={this.handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" onChange={this.handleChange} name={"username"} placeholder="Введите имя пользователя" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={this.handleChange} name={"password"} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button type="submit" className="login-form-button">
                            Logga in
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }

}
export default Login;

