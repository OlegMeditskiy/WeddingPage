import React, {useEffect, useState} from "react";
import '@ckeditor/ckeditor5-build-classic/build/translations/ru'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {getProgram} from "../../util/GetAPI";
import {Button, Container, Form} from "react-bootstrap";
import './AdminSiteBlock.css';
import {createProgramsPart} from "../../util/CreateAPI";
import "flatpickr/dist/themes/material_green.css";
import ProgramsPart from "./ProgramsPart";
import {Russian} from "flatpickr/dist/l10n/ru";
import Flatpickr from "react-flatpickr";
import {translation} from "../../constants";

const Program =(props)=>{
    const [program,setProgram]=useState(
        {
            id:'',
            programsParts:[]
        }
    );
    const [startTime,setStartTime]=useState('00:00')
    const [finishTime,setFinishTime]=useState('00:00')

    const getProgramFromAPI =(signal)=>{
        let promise = getProgram(signal)
        promise
            .then(response => {
                setProgram(response)
            }).catch(() => {
        });
    }
    useEffect(()=>{
        const abortController = new AbortController()
        const signal = abortController.signal
        getProgramFromAPI(signal)
        return function cleanup() {
            abortController.abort()
        }
    },[])
    const createNewProgramsPart=(event)=>{
        event.preventDefault();
        const createProgramsPartRequest={
            programsText:'',
            startTime:startTime,
            finishTime:finishTime
        }
        createProgramsPart(createProgramsPartRequest)
            .then(() => {
               getProgramFromAPI();
            }).catch(() => {

        });

    }

    const returnNewProgramsPartForm=()=>{
        return(
            <Form onSubmit={createNewProgramsPart}>
                <Form.Group>
                    <Form.Label>Начало события</Form.Label>
                    <Flatpickr
                        style={{"display":"block"}}
                        options={{
                            locale:Russian,
                            enableTime: true,
                            noCalendar: true,
                            dateFormat: "H:i",
                            defaultDate: startTime,
                            onChange: function(selectedDates, dateStr, instance) {
                                setStartTime(dateStr)

                            },
                        }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Конец события</Form.Label>
                    <Flatpickr
                        style={{"display":"block"}}
                        options={{
                            locale:Russian,
                            enableTime: true,
                            noCalendar: true,
                            dateFormat: "H:i",
                            defaultDate: finishTime,
                            onChange: function(selectedDates, dateStr, instance) {
                                    setFinishTime(dateStr)
                            },
                        }} />
                </Form.Group>
                <Button type={"submit"}>{translation.newPart}</Button>
            </Form>
        )
    }
    const DisplayParts=(props)=>{
        const parts = props.programList
        const list = parts.map((part,idx)=>{
            return (
                <div key={idx}>
                    <ProgramsPart {...props} programsPart={part}/>
                </div>
            )
        })
        return(
            <Container>
                {list}
            </Container>

        )
    }

    return(
        <div className={"adminSiteBlock"}>
                <h1>{translation.program}</h1>
                {returnNewProgramsPartForm()}
                    <DisplayParts {...props} update={getProgramFromAPI} programList={program.programsParts} />


        </div>)

}


export default Program;