import React, {useState} from "react";
import Header from "./parts/Header";
import AboutUs from "./parts/AboutUs";
import OurStory from "./parts/OurStory";
import Program from "./parts/Program";
import Place from "./parts/Place";
import Invitation from "./parts/Invitation";
import './Parts.css'
import DressCode from "./parts/DressCode";
import Navigation from "./parts/Navigation";

const MainPage = (props) => {
    return (
        <div>
            {/*{(this.props.isAuthenticated===true)?<a href="/admin"><Button className={"adminButton"}><FontAwesomeIcon icon={faUserShield} className={"icon"}/>{menuHeaders.adminPanel}</Button></a>:null}*/}
            <Navigation/>
            <Header/>
            <AboutUs/>
            <OurStory/>
            <Program/>
            <DressCode/>
            <Place/>
            <Invitation/>
        </div>
    )
}
export default MainPage;