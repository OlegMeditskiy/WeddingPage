import React, {useEffect, useState} from "react";
import {Col, Image, Row} from "react-bootstrap";
import {getAllAboutUs} from "../../util/GetAPI";
import {translation} from "../../constants";

let parse = require('html-react-parser');
const AboutUs =(props)=>{
    const [personOne,setPersonOne]=useState({
        name:'',
        photoName:"no-image.jpg",
        about:''
    })
    const [personTwo,setPersonTwo]=useState({
        name:'',
        photoName:'no-image.jpg',
        about:''
    })

    const getAboutUsList=(signal)=>{
        let promise = getAllAboutUs(signal)
        promise
            .then(response => {
                // setAboutUsList(response)
                // setIsLoading(false)
                setPersonOne(response[0])
                setPersonTwo(response[1])

            }).catch(() => {

        });

    }
    useEffect(()=>{
        const abortController = new AbortController()
        const signal = abortController.signal
        getAboutUsList(signal);
        return function cleanup() {
                abortController.abort()
        }
    },[])
    return(
        <div id={"aboutUs"} className={"mainPageBlock odBlock"}>
            <h1 style={{"marginBottom":"50px"}} className={"text-center"}><span className={"headline"}>{translation.menu.aboutUs}</span></h1>
                <Row>
                    <Col className="text-center" md={{span:3,offset:2}}>
                        <Image  style={{"height":"300px","marginBottom":"20px"}}  src={"http://localhost:8080/api/admin/files/"+personOne.photoName}/>
                        <div style={{"marginBottom":"20px"}}><b>{translation.fianceeName}</b></div>
                        <div>{parse(personOne.about)}</div>
                    </Col>
                    <Col className="text-center" md={{span:3,offset:2}}>
                        <div><Image style={{"height":"300px","marginBottom":"20px"}}  src={"http://localhost:8080/api/admin/files/"+personTwo.photoName}/></div>

                        <div style={{"marginBottom":"20px"}}><b>{translation.fianceName}</b></div>
                        <div>{parse(personTwo.about)}</div>
                    </Col>
                </Row>


        </div>
    )
}
export default AboutUs;