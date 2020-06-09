import React, {useEffect, useState} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {getInvitationText} from "../../util/GetAPI";
import {updateInvitationText} from "../../util/SaveAPI";
import {Button, Col, Row} from "react-bootstrap";
import './AdminSiteBlock.css';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {returnReadOrEdit, translation} from "../../constants";
import {Russian} from "flatpickr/dist/l10n/ru";
import Flatpickr from "react-flatpickr";
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/ru';
import 'moment/locale/sv';


let parse = require('html-react-parser');
const InvitationText=(props)=>{
    const [invitationText,setInvitationText]=useState('')
    const [date,setDate]=useState('')
    const [show,setShow]=useState(true)

    const getInvitationTextFromAPI=()=>{
        let promise = getInvitationText()
        promise
            .then(response => {
                setInvitationText(response.invitationText)
                setDate(new Date(response.finalDate))
            }).catch(() => {
        });
    }
    useEffect(()=>{
        getInvitationTextFromAPI();
    },[])

    const handleSubmit=(event)=>{
        event.preventDefault()
        const request={
            id:1,
            invitationText:invitationText,
            finalDate:date
        }
        updateInvitationText(request)
            .then(() => {
                // getInvitationTextFromAPI()
                setShow(true)
            }).catch((error) => {
        });
    }
    const returnEdit=()=>{
        return(
            <div>
                <Row>
                    <Col style={{textAlign: "right"}}>
                        <Button variant="link" onClick={(event)=>handleSubmit(event)}>{translation.save}</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CKEditor
                            editor={ ClassicEditor }
                            data={invitationText}
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                setInvitationText(data)
                            } }
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>{translation.answer}: <Flatpickr
                            value={date}
                            options={{
                                locale:Russian,
                                enableTime: true,
                                minDate: "today",
                                defaultDate: date,
                                onChange: function(selectedDates, dateStr, instance) {
                                    setDate(selectedDates[0])
                                },
                            }} /></Col>
                </Row>
            </div>
        )
    }
    const returnRead=()=>{
        return(
            <div>
                <Row>
                    <Col style={{textAlign: "right"}}>
                        <Button variant="link" onClick={()=>setShow(false)}>{translation.edit}</Button>
                    </Col>
                </Row>
                <Row>
                    {parse(invitationText)}
                </Row>
                <Row>
                    <Col>
                            <div><b>{translation.answer}:</b> <Moment format="LLLL" locale={translation.ckEditorLang}>{date}</Moment></div>
                    </Col>
                </Row>
            </div>
        )
    }
    return (
        <div>
            {returnReadOrEdit(returnRead,returnEdit,show)}
        </div>
    )
}

export default InvitationText;
