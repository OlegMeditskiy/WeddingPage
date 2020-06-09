import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {updateDate} from "../../util/SaveAPI";
import {getWeddingDate} from "../../util/GetAPI";
import 'moment-timezone';
import Flatpickr from "react-flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";
import { Swedish } from "flatpickr/dist/l10n/sv.js";
import { English } from "flatpickr/dist/l10n/default"
import {returnReadOrEdit, translation} from "../../constants";
import Moment from 'react-moment';
import 'moment/locale/ru';
import 'moment/locale/sv';

const WeddingDate =(props)=>{
    const [date,setDate]=useState('')
    const [show,setShow]=useState(true)
    const handleSubmit=(event)=>{
        event.preventDefault()
        const updateRequest={
            id:1,
            weddingDate:date
        }
        updateDate(updateRequest)
            .then(() => {
                setShow(true);
            }).catch((error) => {
        });
    }
    const getDateFromAPI=()=>{
        let promise = getWeddingDate()
        promise
            .then(response => {
                const newDate = new Date(response.weddingDate)
                setDate(newDate)
            }).catch(() => {
        });
    }
    useEffect(()=>{
        getDateFromAPI();
    },[])

    const returnRead=()=>{
        return(
            <div>
                <Row>
                    <Col><Button onClick={()=>setShow(false)} variant="link" type="submit">
                        {translation.edit}
                    </Button></Col>
                </Row>
                <Row>
                    <Col><Moment format="LLLL" locale={translation.ckEditorLang} >{date}</Moment></Col>
                </Row>
            </div>
        )
    }
    const returnEdit=()=>{
        return(
            <div>
                <Row>
                    <Col>
                        <Button onClick={(event)=>handleSubmit(event)} variant="link" type="submit">
                            {translation.save}
                        </Button></Col>
                </Row>
                <Row>
                    <Col><Flatpickr
                        value={date}
                        // locale={"ru"}
                        options={{
                            locale: props.language,
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

    return(<div className={"adminSiteBlock"}>
            <h1>{translation.weddingDate}</h1>
            {returnReadOrEdit(returnRead,returnEdit,show)}

    </div>)
}
export default WeddingDate;