import React, {Component} from 'react';
import './NotFound.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome} from "@fortawesome/free-solid-svg-icons";

class NotFound extends Component {
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
                            <Button className={"button"} variant={"none"}><a href="/"><FontAwesomeIcon size={"3x"} icon={faEnvelope}/></a></Button></Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default NotFound;