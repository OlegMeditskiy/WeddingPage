import React, {useEffect, useState} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {getAllAboutUs} from "../../util/GetAPI";
import './AdminSiteBlock.css';
import Person from "./Person";
import {translation} from "../../constants";

const AboutUs = (props) => {
    const [aboutUsList,setAboutUsList]=useState([])
    const getAboutUsList=()=>{
        let promise = getAllAboutUs()
        promise
            .then(response => {
                setAboutUsList(response)
            }).catch(() => {
        });
    }
    useEffect(()=>{
        getAboutUsList();
    },[])
    const DisplayPersons=(props)=>{
        const persons = props.persons
        const list = persons.map((person,idx)=>{
            return (
                <div key={idx}>
                    <Person {...props} person={person}/>
                </div>
            )
        })
        return(
            <div>
                {list}
            </div>

        )
    }


    return(
        <div className={"adminSiteBlock"}>
            <h1>{translation.aboutUs}</h1>
            <DisplayPersons {...props} update={getAboutUsList} persons={aboutUsList}/>
        </div>
    )

}


export default AboutUs;