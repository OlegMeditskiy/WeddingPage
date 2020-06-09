import React, {useEffect, useState} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {getStory} from "../../util/GetAPI";
import {updateStory} from "../../util/SaveAPI";
import {Button, Col, Row} from "react-bootstrap";
import './AdminSiteBlock.css';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {returnReadOrEdit, translation} from "../../constants";

let parse = require('html-react-parser');
const OurStory=(props)=>{
    const [ourStory,setOurStory]=useState('')
    const [show,setShow]=useState(true)
    const getStoryFromAPI=()=>{
        let promise = getStory()
        promise
            .then(response => {
                setOurStory(response.story)
            }).catch(() => {
        });
    }
    useEffect(()=>{
        getStoryFromAPI();
    },[])
    const handleSubmit=(event)=>{
        event.preventDefault()
        const updateRequest={
            id:1,
            story:ourStory
        }
        updateStory(updateRequest)
            .then(() => {
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
                                data={ourStory}
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    setOurStory(data);
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
                    <Row>
                        <Col style={{textAlign: "right"}}>
                            <Button variant="link" onClick={()=>setShow(false)}>{translation.edit}</Button>
                        </Col>
                    </Row>
                    <Row>
                        {parse(ourStory)}
                    </Row>
                </div>
        )
    }
    return (
        <div className={"adminSiteBlock"}>
            <h1>{translation.ourStory}</h1>
                {returnReadOrEdit(returnRead,returnEdit,show)}
        </div>
    )
}

export default OurStory;