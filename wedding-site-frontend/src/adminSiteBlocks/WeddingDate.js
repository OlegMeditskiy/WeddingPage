import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {updateDate} from "../util/SaveAPI";
import {getWeddingDate} from "../util/GetAPI";
import 'moment-timezone';
import Flatpickr from "react-flatpickr";
import {Russian} from "flatpickr/dist/l10n/ru";
import {returnReadOrEdit} from "../constants";

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
                        Изменить
                    </Button></Col>
                </Row>
                <Row>
                    <Col>{date.toString()}</Col>
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
                            Сохранить
                        </Button></Col>
                </Row>
                <Row>
                    <Col><Flatpickr
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

    return(<div className={"adminSiteBlock"}>
            <h1>Дата свадьбы</h1>
            {returnReadOrEdit(returnRead,returnEdit,show)}

    </div>)
}
export default WeddingDate;