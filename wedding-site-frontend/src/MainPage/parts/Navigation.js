import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {translation} from "../../constants";

const Navigation = () =>{
    return(
        <Navbar className={"whiteNavbar"} expand="lg" fixed={"top"}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end w-100" style={{"marginRight":"95px"}}>
                    <Nav.Link href="#aboutUs">{translation.menu.aboutUs}</Nav.Link>
                    <Nav.Link href="#ourStory">{translation.menu.ourStory}</Nav.Link>
                    <Nav.Link href="#program">{translation.menu.program}</Nav.Link>
                </Nav>
                <Nav className="justify-content-start w-100">
                    <Nav.Link href="#dressCode">{translation.menu.dressCode}</Nav.Link>
                    <Nav.Link href="#place">{translation.menu.place}</Nav.Link>
                    <Nav.Link href="#invitation">{translation.menu.invitation}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            {/*<Navbar.Brand className={"bandMainPage"}>*/}
            {/*    <Image id={"logo"}*/}
            {/*           style={{"height":"100px"}}*/}
            {/*        src={"http://localhost:8080/api/admin/files/logo.png"}/>*/}
            {/*</Navbar.Brand>*/}
        </Navbar>
    )
}
export default Navigation