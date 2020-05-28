import React, {Component, useState} from 'react';
import './NotFound.css';
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome} from "@fortawesome/free-solid-svg-icons";
import {updatePlace} from "../util/SaveAPI";
import {sendMailToSupport} from "../util/CreateAPI";

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state={
            show:false,
            email:'',
            text:'',
            name:''
        }
        this.handleClose=this.handleClose.bind(this);
        this.handleShow=this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleClose () {
        this.setState({
            show:false
        })
    }
   handleShow () {
       this.setState({
           show:true
       })
   }
    handleSubmit(event){
        event.preventDefault()
        const postRequest={
            email:this.state.email,
            text:this.state.text,
            name:this.state.name
        }
        sendMailToSupport(postRequest)
            .then(() => {

            }).catch((error) => {

        });
        this.handleClose();
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    render() {
        return (
            <div className={"errorDiv"}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col className={"error404"}md={"auto"}>404</Col>
                    </Row>
                    <Row className="justify-content-md-center" ><Col className={"notFoundText"} md={"auto"}>Страница не найдена</Col></Row>
                    <Row className="justify-content-md-center buttonBlock">
                        <Col md={"auto"} sm={"auto"}>
                            <Button className={"button"} variant={"none"}><a href="/"><FontAwesomeIcon size={"3x"} icon={faHome} /></a></Button>
                        </Col>
                        <Col md={2} sm={2}></Col>
                        <Col md={"auto"} sm={"auto"}>
                            <Button className={"button"} onClick={this.handleShow} variant={"none"}><FontAwesomeIcon size={"3x"} icon={faEnvelope}/></Button></Col>
                    </Row>
                </Container>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Form onSubmit={this.handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Обращение в техническую поддержку</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="name">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" name={"name"} placeholder="Ваше имя" />
                        </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={this.handleChange} type="email" name={"email"} placeholder="Ваш email адрес для связи" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Описание проблемы</Form.Label>
                                <Form.Control  onChange={this.handleChange} type="text" as={"textarea"} name={"text"} rows={5} placeholder="Описание проблемы" />
                            </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Закрыть
                        </Button>
                        <Button type="submit" variant="primary">
                            Отправить
                        </Button>
                    </Modal.Footer>
                </Form>
                </Modal>

            </div>
        );
    }
}
export default NotFound;