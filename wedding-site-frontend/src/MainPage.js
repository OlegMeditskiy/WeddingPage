import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserShield} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import {menuHeaders} from "./constants";

class MainPage extends Component{
    render() {
        return(
            <div>
                {(this.props.isAuthenticated===true)?<p><a href="/admin"><Button className={"adminButton"}><FontAwesomeIcon icon={faUserShield} className={"icon"}/>{menuHeaders.adminPanel}</Button></a></p>:null}
                Main page
            </div>
        )
    }
}
export default MainPage;