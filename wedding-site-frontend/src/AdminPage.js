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
import Invitations from "./adminSiteBlocks/Invitations";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faCalendarDay,
    faClipboardList,
    faEnvelopeOpenText,
    faHeading,
    faHome,
    faLifeRing,
    faMapMarkerAlt,
    faScroll,
    faSignOutAlt,
    faTshirt,
    faUserFriends
} from "@fortawesome/free-solid-svg-icons";
import {menuHeaders} from "./constants";


class AdminPage extends Component{
constructor(props) {
    super(props);
    this.state={
        show:false,
        currentUser: null,
        isAuthenticated: null,
        isLoading: false,
        warningMessage:{
            title: menuHeaders.errorMessage,
            theme: 'red',
            closeButton: 'X',
            duration:'1500'
        },
        successMessage: {
            title: menuHeaders.successMessage,
            theme: 'green',
            closeButton: 'X',
            duration: '1500'
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
            message: whatWasUpdated,
            ...this.state.successMessage
        });
    };
    handleSelect=(event,key)=>{
        event.preventDefault();
        this.setState({
            key:key
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.language!==prevProps.language){

            this.setState({
                successMessage:{
                    title: menuHeaders.successMessage,
                    theme: 'green',
                    closeButton: 'X',
                    duration: '1500'},
                warningMessage:{
                    title: menuHeaders.errorMessage,
                    theme: 'red',
                    closeButton: 'X',
                    duration:'1500'
                },
            })
        }

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
                                        <Navbar.Brand href="/admin">{menuHeaders.adminPanel}</Navbar.Brand>
                                        <Nav.Link eventKey={'home'} href={"/"}><FontAwesomeIcon icon={faHome} className={"icon"} />{menuHeaders.homePage}</Nav.Link>
                                        <Nav.Link eventKey={'header'} onClick={event=>this.handleSelect(event,'header')}><FontAwesomeIcon icon={faHeading} className={"icon"}/>{menuHeaders.header}</Nav.Link>
                                        <Nav.Link eventKey={'weddingDate'} onClick={event=>this.handleSelect(event,'weddingDate')}><FontAwesomeIcon icon={faCalendarDay} className={"icon"}/>{menuHeaders.weddingDate}</Nav.Link>
                                        <Nav.Link eventKey={'aboutUs'} onClick={event=>this.handleSelect(event,'aboutUs')}><FontAwesomeIcon icon={faUserFriends} className={"icon"}/>{menuHeaders.aboutUs}</Nav.Link>
                                        <Nav.Link eventKey={'ourStory'} onClick={event=>this.handleSelect(event,'ourStory')}><FontAwesomeIcon icon={faScroll} className={"icon"}/>{menuHeaders.ourStory}</Nav.Link>
                                        <Nav.Link eventKey={'program'} onClick={event=>this.handleSelect(event,'program')}><FontAwesomeIcon icon={faClipboardList} className={"icon"}/>{menuHeaders.program}</Nav.Link>
                                        <Nav.Link eventKey={'dressCode'} onClick={event=>this.handleSelect(event,'dressCode')}><FontAwesomeIcon icon={faTshirt} className={"icon"}/>{menuHeaders.dressCode}</Nav.Link>
                                        <Nav.Link eventKey={'place'} onClick={event=>this.handleSelect(event,'place')}><FontAwesomeIcon icon={faMapMarkerAlt} className={"icon"}/>{menuHeaders.place}</Nav.Link>
                                        <Nav.Link eventKey={'invitation'} onClick={event=>this.handleSelect(event,'invitation')}><FontAwesomeIcon icon={faEnvelopeOpenText} className={"icon"}/>{menuHeaders.invitations}</Nav.Link>
                                        <hr/>
                                        <Nav.Link onClick={this.handleShow}><FontAwesomeIcon icon={faLifeRing} className={"icon"}/>{menuHeaders.support}</Nav.Link>
                                        <Nav.Link onClick={this.props.handleLogout}><FontAwesomeIcon icon={faSignOutAlt} className={"icon"}/>{menuHeaders.exit}</Nav.Link>
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
                                    <Program {...this.props} failNotification={this.updateFail} successNotification={this.updateSuccess}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="dressCode">
                                    <DressCode failNotification={this.updateFail} successNotification={this.updateSuccess}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="place">
                                    <Place failNotification={this.updateFail} successNotification={this.updateSuccess}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="invitation">
                                    <Invitations failNotification={this.updateFail} successNotification={this.updateSuccess}/>
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