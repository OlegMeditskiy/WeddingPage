import React, {Component} from "react";
import {Button, Col, Form, Modal, Nav, Navbar, Row, Tab} from "react-bootstrap";
import addNotification from 'react-push-notification';
import './Notidication.css';
import './AdminPage.css';
import Header from "./adminSiteBlocks/Header";
import WeddingDate from "./adminSiteBlocks/WeddingDate";
import AboutUs from "./adminSiteBlocks/AboutUs";
import OurStory from "./adminSiteBlocks/OurStory";
import Program from "./adminSiteBlocks/Program";
import DressCode from "./adminSiteBlocks/DressCode";
import Place from "./adminSiteBlocks/Place";
import Invitation from "./adminSiteBlocks/Invitation";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faCalendarDay,
    faEnvelopeOpenText,
    faHome,
    faMapMarkerAlt,
    faSignOutAlt,
    faTshirt,
    faClipboardList,
    faUserFriends,
    faScroll,
    faHeading,
    faLifeRing
} from "@fortawesome/free-solid-svg-icons";


class AdminPage extends Component{
constructor(props) {
    super(props);
    this.state={
        show:false,
        currentUser: null,
        isAuthenticated: null,
        isLoading: false,
        warningMessage:{
            title: 'Упс',
            theme: 'red',
            closeButton: 'X',
            duration:'4500'
        },
        successMessage: {
            title: 'Успешно!',
            theme: 'green',
            closeButton: 'X',
            duration: '4500'
        },
        key:'header'
    }
    this.updateFail=this.updateFail.bind(this);
    this.updateSuccess=this.updateSuccess.bind(this);
    this.handleSelect=this.handleSelect.bind(this);
    this.handleClose=this.handleClose.bind(this);
    this.handleShow=this.handleShow.bind(this);
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
    updateFail = () => {
        addNotification({
            message: 'Ошибка! Попробуйте еще раз или обратитесь в техническую поддержку',
            ...this.state.warningMessage
        });
    };
    updateSuccess = (whatWasUpdated) => {
        addNotification({
            message: 'Вы обновили '+whatWasUpdated,
            ...this.state.successMessage
        });
    };
    handleSelect=(event,key)=>{
        event.preventDefault();
        this.setState({
            key:key
        })
    }



    render() {
        return(
            <div className={"adminPageMainDiv"}>
                <Tab.Container id="left-tabs-example" activeKey={this.state.key} defaultActiveKey={this.state.key}>
                    <Row className={"adminPageRow"}>
                        <Col md={"auto"} sm={12}>
                            <Navbar bg="dark" variant="dark" expand={"lg"} className={"adminMenuNavbar"}>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto flex-column ">
                                        <Navbar.Brand href="/admin">Панель администратора</Navbar.Brand>
                                        <Nav.Link eventKey={'home'} href={"/"}><FontAwesomeIcon icon={faHome} className={"icon"} />Домашняя страница</Nav.Link>
                                        <Nav.Link eventKey={'header'} onClick={event=>this.handleSelect(event,'header')}><FontAwesomeIcon icon={faHeading} className={"icon"}/>Шапка</Nav.Link>
                                        <Nav.Link eventKey={'weddingDate'} onClick={event=>this.handleSelect(event,'weddingDate')}><FontAwesomeIcon icon={faCalendarDay} className={"icon"}/>Дата свадьбы</Nav.Link>
                                        <Nav.Link eventKey={'aboutUs'} onClick={event=>this.handleSelect(event,'aboutUs')}><FontAwesomeIcon icon={faUserFriends} className={"icon"}/>О нас</Nav.Link>
                                        <Nav.Link eventKey={'ourStory'} onClick={event=>this.handleSelect(event,'ourStory')}><FontAwesomeIcon icon={faScroll} className={"icon"}/>Наша история</Nav.Link>
                                        <Nav.Link eventKey={'program'} onClick={event=>this.handleSelect(event,'program')}><FontAwesomeIcon icon={faClipboardList} className={"icon"}/>Программа</Nav.Link>
                                        <Nav.Link eventKey={'dressCode'} onClick={event=>this.handleSelect(event,'dressCode')}><FontAwesomeIcon icon={faTshirt} className={"icon"}/>Дресс-код</Nav.Link>
                                        <Nav.Link eventKey={'place'} onClick={event=>this.handleSelect(event,'place')}><FontAwesomeIcon icon={faMapMarkerAlt} className={"icon"}/>Место проведения</Nav.Link>
                                        <Nav.Link eventKey={'invitation'} onClick={event=>this.handleSelect(event,'invitation')}><FontAwesomeIcon icon={faEnvelopeOpenText} className={"icon"}/>Приглашения</Nav.Link>
                                        <hr/>

                                        <Nav.Link onClick={this.handleShow}><FontAwesomeIcon icon={faLifeRing} className={"icon"}/>Техническая поддержка</Nav.Link>
                                        <Nav.Link onClick={this.props.handleLogout}><FontAwesomeIcon icon={faSignOutAlt} className={"icon"}/>Выйти</Nav.Link>
                                    </Nav>

                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                        <Col className={"tabContent"}>
                            <Tab.Content>
                                <Tab.Pane eventKey="header">
                                    <Header/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="weddingDate">
                                    <WeddingDate failNotification={this.updateFail} successNotification={this.updateSuccess} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="aboutUs">
                                    <AboutUs failNotification={this.updateFail} successNotification={this.updateSuccess}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="ourStory">
                                    <OurStory failNotification={this.updateFail} successNotification={this.updateSuccess}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="program">
                                    <Program failNotification={this.updateFail} successNotification={this.updateSuccess}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="dressCode">
                                    <DressCode failNotification={this.updateFail} successNotification={this.updateSuccess}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="place">
                                    <Place failNotification={this.updateFail} successNotification={this.updateSuccess}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="invitation">
                                    <Invitation failNotification={this.updateFail} successNotification={this.updateSuccess}/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Обращение в техническую поддержку</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Ваш email адрес для связи" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Описание проблемы</Form.Label>
                                <Form.Control type="text" as={"textarea"} rows={5} placeholder="Описание проблемы" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Закрыть
                        </Button>
                        <Button type={"submit"} variant="primary" onClick={this.handleClose}>
                            Отправить
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default AdminPage;