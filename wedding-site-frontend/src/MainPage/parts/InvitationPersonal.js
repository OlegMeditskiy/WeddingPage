import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {getInvitationText, getPersonalInvitation} from "../../util/GetAPI";
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/ru';
import {translation} from "../../constants";
import NotFound from "../../common/NotFound";
import {accept, decline} from "../../util/SaveAPI";

let parse = require('html-react-parser');
const InvitationPersonal = (props) => {
    const [invitationText, setInvitationText] = useState('')
    const [date, setDate] = useState('')
    const [names, setNames] = useState('')
    const [status, setStatus] = useState(false)
    const [id, setId] = useState('')
    const [needTransfer, setNeedTransfer] = useState(false)
    const getInvitationTextFromAPI = (signal) => {
        let promise = getInvitationText(signal)
        promise
            .then(response => {
                setDate(new Date(response.finalDate))
                setInvitationText(response.invitationText)
            }).catch(() => {
        });
    }
    const getPersonalInvitationFromAPI = (signal) => {
        let promise = getPersonalInvitation(props.match.params.invitationKey, signal);
        console.log(promise)
        console.log(promise)
        promise
            .then(response => {
                setNames(response.names)
                setNeedTransfer(response.needTransfer)
                setStatus(response.status)
                setId(response.id)
            }).catch(() => {
            props.setError(true)
        });
    }
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        getInvitationTextFromAPI(signal);
        getPersonalInvitationFromAPI(signal);
        return function cleanup() {
            abortController.abort()
        }
    }, [])

    const handleCheckBox = () => {
        if (!needTransfer) {
            setNeedTransfer(true)
        } else {
            setNeedTransfer(false)
        }
    }
    const statusFormatter = (status) => {
        if (status == "NOT_ANSWERED") {
            return translation.not_answered
        } else if (status == "ACCEPTED") {
            return translation.accepted
        } else {
            return translation.declined
        }
    }
    const acceptInvitation = (event) => {
        event.preventDefault();
        const request = {
            id: id,
            needTransfer:needTransfer
        }
        accept(request)
            .then(() => {
                const abortController = new AbortController()
                const signal = abortController.signal
                getPersonalInvitationFromAPI(signal)
                return function cleanup() {
                    abortController.abort()
                }
            })
            .catch((error) => {

            });
    }
    const declineInvitation = (event) => {
        event.preventDefault();
        const request = {
            id: id
        }
        decline(request)
            .then(() => {
                const abortController = new AbortController()
                const signal = abortController.signal
                getPersonalInvitationFromAPI(signal)
                return function cleanup() {
                    abortController.abort()
                }
            })
            .catch((error) => {

            });
    }

    const formAnswer = () => {
        return (
            <div>
                <Form>
                    <Row>
                        <Col style={{"paddingTop": "6px"}} md={4}>
                            <Form.Check className={"text-left acceptButtons"}
                                        type={"checkbox"} onChange={handleCheckBox}
                                        checked={needTransfer}
                                        label={translation.needTransfer}/></Col>
                        <Col md={4}><Button onClick={(event) => acceptInvitation(event)}
                                            className={"acceptButton acceptButtons"}>{translation.acceptButton}</Button></Col>
                        <Col md={4}><Button onClick={(event) => declineInvitation(event)}
                                            className={"acceptButton acceptButtons"}>{translation.declineButton}</Button></Col>
                    </Row>
                </Form>

                <div style={{"marginTop":"20px"}} className={"text-center"}>
                    <b>{translation.answer}:</b> <Moment format="LLL" locale={translation.ckEditorLang}>{date}</Moment>
                </div>
            </div>

        )
    }
    const declined = () =>{
        return (
            <div>
                <p className={"text-center"} style={{"paddingTop": "6px"}}>{translation.declinedMessage}</p>
                <div style={{"marginTop":"20px"}} className={"text-center"}>
                    <b>{translation.answer}:</b> <Moment format="LLL" locale={translation.ckEditorLang}>{date}</Moment>
                </div>
            </div>
        )
    }
    const accepted = () =>{
        return (
            <div>
                <p className={"text-center"} style={{"paddingTop": "6px"}}>{translation.acceptedMessage}</p>
            </div>
        )
    }
    const answerBlock = () =>{
        if (status == "NOT_ANSWERED") {
            return formAnswer()
        } else if (status == "ACCEPTED") {
            return accepted()
        } else {
            return declined()
        }
    }

    return (
        <div id={"invitation"} className={"mainPageBlock evenBlock"}>
            <h1 style={{"marginBottom": "50px"}} className={"text-center"}><span
                className={"headline"}>{translation.menu.invitation}</span></h1>
            <Row>
                <Col md={{span: 8, offset: 2}}>
                    <div>
                        <div style={{"marginBottom": "50px"}} className={"text-center"}><h3>Dear {names}!</h3></div>
                        <div style={{"marginBottom": "50px"}}>
                            {parse(invitationText)}
                        </div>
                        <div className={"answer"}>
                                {answerBlock()}
                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default InvitationPersonal;