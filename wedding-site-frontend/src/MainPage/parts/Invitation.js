import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {getInvitationText} from "../../util/GetAPI";
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/ru';
import {translation} from "../../constants";

let parse = require('html-react-parser');
const Invitation =(props)=>{
    const [invitationText,setInvitationText]=useState('')
    const [date,setDate]=useState('')
    const getInvitationTextFromAPI=(signal)=>{
        let promise = getInvitationText(signal)
        promise
            .then(response => {
                setDate(new Date(response.finalDate))
                setInvitationText(response.invitationText)
            }).catch(() => {
        });
    }
    useEffect(()=>{
        const abortController = new AbortController()
        const signal = abortController.signal
        getInvitationTextFromAPI(signal);
        return function cleanup() {
            abortController.abort()
        }
    },[])

    return(
        <div id={"invitation"} className={"mainPageBlock evenBlock"}>
            <h1 className={"text-center"}><span className={"headline"}>{translation.menu.invitation}</span></h1>
                <Row >
                    <Col md={{span:8,offset:2}}>
                        <div >
                            <div className={"text-center"} style={{"padding":"50px"}}>
                                {parse(invitationText)}
                            </div>
                            <div className={"text-center"} style={{"paddingBottom":"50px"}}>
                                <b>{translation.contact}</b>
                            </div>
                            <div className={"text-center"} style={{"paddingBottom":"50px"}}>
                                <b>{translation.answer}:</b> <Moment format="LLL" locale={translation.ckEditorLang}>{date}</Moment>
                            </div>

                        </div>
                    </Col>
                </Row>
        </div>
    )
}
export default Invitation;