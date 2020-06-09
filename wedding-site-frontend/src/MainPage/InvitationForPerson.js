import React, {useState} from "react";
import Navigation from "./parts/Navigation";
import Header from "./parts/Header";
import AboutUs from "./parts/AboutUs";
import OurStory from "./parts/OurStory";
import Program from "./parts/Program";
import DressCode from "./parts/DressCode";
import Place from "./parts/Place";
import InvitationPersonal from "./parts/InvitationPersonal";
import NotFound from "../common/NotFound";

const InvitationForPerson = (props) => {
    const [error,setError]=useState(false)
    if(error){
        return <NotFound/>
    }
    return (
        <div>
            <Navigation/>
            <Header/>
            <AboutUs/>
            <OurStory/>
            <Program/>
            <DressCode/>
            <Place/>
            <InvitationPersonal setError={setError} {...props}/>
        </div>
    )
}
export default InvitationForPerson;