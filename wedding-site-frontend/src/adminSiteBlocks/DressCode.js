import React, {useEffect, useState} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {getDressCode} from "../util/GetAPI";
import {updateDressCode} from "../util/SaveAPI";
import {Button, Col, Row} from "react-bootstrap";
import './AdminSiteBlock.css';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {returnReadOrEdit} from "../constants";

let parse = require('html-react-parser');
const DressCode = (props)=>{
    const [dressCode,setDressCode]=useState('')
    const [show,setShow]=useState(true)
    const getDressCodeFromAPI=()=>{
        let promise = getDressCode()
        promise
            .then(response => {
                setDressCode(response.text)
            }).catch(() => {
        });
    }
    const handleSubmit =(event)=>{
        event.preventDefault()
        const updateRequest={
            id:1,
            text:dressCode
        }
        updateDressCode(updateRequest)
            .then(() => {
                getDressCodeFromAPI();
                setShow(true);
            }).catch((error) => {
            this.props.failNotification();
        });
    }
    useEffect(()=>{
        getDressCodeFromAPI();
    },[])
    const returnEdit=()=>{
        return(
                <div>
                    <h1>Дресс-код</h1>
                    <Row>
                        <Col style={{textAlign: "right"}}>
                            <Button variant="link" onClick={(event)=>handleSubmit(event)}>Сохранить</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CKEditor
                                editor={ ClassicEditor }
                                data={dressCode}
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    setDressCode(data)
                                } }
                            />
                        </Col>
                    </Row>
                </div>
        )
    }
    const returnRead=()=>{
        return(
                    <div>
                    <h1>Дресс-код</h1>
                    <Row>
                        <Col style={{textAlign: "right"}}>
                            <Button variant="link" onClick={()=>setShow(false)}>Изменить</Button>
                        </Col>
                    </Row>
                    <Row>
                        {parse(dressCode)}
                    </Row>
                    </div>

        )
    }
    return(
    <div className={"adminSiteBlock"}>
        {returnReadOrEdit(returnRead,returnEdit,show)}
        </div>
    )

}

export default DressCode;