import React, {Component} from "react";
import {Col, Nav, Navbar, Row, Tab} from "react-bootstrap";
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
import {faHome} from "@fortawesome/free-solid-svg-icons";

class AdminPage extends Component{
constructor(props) {
    super(props);
    this.state={
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
}
    updateFail = () => {
        addNotification({
            message: 'Ошибка! Попробуйте еще раз или свяжитесь с администратором',
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
                                        <Nav className="mr-auto flex-column  adminMenuNav">
                                            <Navbar.Brand href="/admin">Панель администратора</Navbar.Brand>
                                            <Nav.Link eventKey={'home'} href={"/"}><FontAwesomeIcon icon={faHome} />    Домашняя страница</Nav.Link>
                                            <Nav.Link eventKey={'header'} onClick={event=>this.handleSelect(event,'header')}>Шапка</Nav.Link>
                                            <Nav.Link eventKey={'weddingDate'} onClick={event=>this.handleSelect(event,'weddingDate')}>Дата свадьбы</Nav.Link>
                                            <Nav.Link eventKey={'aboutUs'} onClick={event=>this.handleSelect(event,'aboutUs')}>О нас</Nav.Link>
                                            <Nav.Link eventKey={'ourStory'} onClick={event=>this.handleSelect(event,'ourStory')}>Наша история</Nav.Link>
                                            <Nav.Link eventKey={'program'} onClick={event=>this.handleSelect(event,'program')}>Программа</Nav.Link>
                                            <Nav.Link eventKey={'dressCode'} onClick={event=>this.handleSelect(event,'dressCode')}>Дресс-код</Nav.Link>
                                            <Nav.Link eventKey={'place'} onClick={event=>this.handleSelect(event,'place')}>Место проведения</Nav.Link>
                                            <Nav.Link eventKey={'invitation'} onClick={event=>this.handleSelect(event,'invitation')}>Приглашения</Nav.Link>
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

                {/*<Button variant={"danger"} onClick={this.buttonClick}>BUTTON</Button>*/}
                {/*<Button variant={"success"} onClick={this.updateSuccess}>BUTTON</Button>*/}
            </div>
        )
    }
}

export default AdminPage;