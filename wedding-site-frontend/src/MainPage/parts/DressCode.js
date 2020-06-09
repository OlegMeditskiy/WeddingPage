import React, {useEffect, useState} from "react";
import {getDressCode} from "../../util/GetAPI";
import {Col, Image, Row} from "react-bootstrap";
import {translation} from "../../constants";

let parse = require('html-react-parser');
const DressCode = (props)=>{
    const [dressCode,setDressCode]=useState('')
    const [photoMale,setPhotoMale]=useState("")
    const [photoFemale,setPhotoFemale]=useState("")

    const getDressCodeFromAPI=(signal)=>{
        let promise = getDressCode(signal)
        promise
            .then(response => {
                setPhotoMale("http://localhost:8080/api/admin/files/"+response.dressMale)
                setPhotoFemale("http://localhost:8080/api/admin/files/"+response.dressFemale)
                setDressCode(response.text)
            }).catch(() => {
        });
    }
    useEffect(()=>{
        const abortController = new AbortController()
        const signal = abortController.signal
        getDressCodeFromAPI(signal);
        return function cleanup() {
            abortController.abort()
        }
    },[])
    const returnRead=()=>{
        return(
            <div>
                <Row style={{"marginBottom":"50px"}}>
                    <Col className={"text-center"}>
                        <h4>{translation.femaleDressCode}</h4>
                        <Image style={{"height":"50vh"}} src={photoFemale}/>
                    </Col>
                    <Col className={"text-center"}>
                        <h4>{translation.maleDressCode}</h4>
                        <Image style={{"height":"50vh"}} src={photoMale}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span:8,offset:2}}>{parse(dressCode)}</Col>

                </Row>
            </div>


        )
    }
    return(
        <div id={"dressCode"} className={"mainPageBlock evenBlock"}>
            <h1 style={{"marginBottom":"50px"}} className={"text-center"}><span className={"headline"}>{translation.menu.dressCode}</span></h1>
            {returnRead()}
        </div>
    )

}

export default DressCode;