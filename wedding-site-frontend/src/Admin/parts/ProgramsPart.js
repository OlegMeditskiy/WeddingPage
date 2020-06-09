import React, {useState} from "react";
import {Button, ButtonGroup, Col, Row} from "react-bootstrap";
import Flatpickr from "react-flatpickr";
import {Russian} from "flatpickr/dist/l10n/ru";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {returnReadOrEdit, translation} from "../../constants";
import {updateProgramsPart} from "../../util/SaveAPI";
import {deleteProgramsPart} from "../../util/DeleteAPI";

let parse = require('html-react-parser');
const ProgramsPart =(props)=>{
    const programsPart=props.programsPart
    const [programsText,setProgramsText]=useState(props.programsPart.programsText)
    const [show,setShow]=useState(true)
    const [startTime,setStartTime]=useState(props.programsPart.startTime)
    const [finishTime,setFinishTime]=useState(props.programsPart.finishTime)

    const save=()=> {
        const programsPartRequest={
            programsText:programsText,
            startTime:startTime,
            finishTime:finishTime,
            id:programsPart.id
        }

        updateProgramsPart(programsPartRequest)
            .then(() => {
                props.update()
                setShow(true)
            })
            .catch((error) => {

            });
    }
    const deletePart=()=> {
        const programsPartRequest={
            id:programsPart.id
        }
        deleteProgramsPart(programsPartRequest)
            .then(() => {
                props.update()
                setShow(true)
            })
            .catch((error) => {
            });
    }
    const returnEdit=()=>{

        return (
            <div>
                <hr/>
                <Row>
                    <Col>
                        <Flatpickr
                            options={{
                                locale:Russian,
                                enableTime: true,
                                noCalendar: true,
                                dateFormat: "H:i",
                                defaultDate: startTime,
                                onChange: function(selectedDates, dateStr, instance) {
                                    setStartTime(dateStr)

                                },
                            }} /> -
                        <Flatpickr
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
                    </Col>
                    <Col style={{textAlign: "right"}}>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="link" onClick={()=>save()}>{translation.save}</Button>
                            <Button variant="link" onClick={()=>deletePart()}>{translation.delete}</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CKEditor
                            key={"id"}
                            name={"textEdit"}
                            editor={ ClassicEditor }
                            config={{
                                language:translation.ckEditorLang
                            }}
                            data={programsText}
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                setProgramsText(data)
                            }}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
    const returnRead=()=>{
        return(
            <div>
                <hr/>
                <Row>
                    <Col>
                        {startTime} - {finishTime}
                    </Col>
                    <Col style={{textAlign: "right"}}>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="link" onClick={()=>setShow(false)}>{translation.edit}</Button>
                            <Button variant="link" onClick={()=>deletePart()}>{translation.delete}</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {parse(programsText)}
                    </Col>
                </Row>
            </div>

        )
    }
    return returnReadOrEdit(returnRead,returnEdit,show)
}

export default ProgramsPart;
