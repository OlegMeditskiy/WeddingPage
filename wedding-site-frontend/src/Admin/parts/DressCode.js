import React, {useEffect, useState} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {getDressCode} from "../../util/GetAPI";
import {updateDressCode} from "../../util/SaveAPI";
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import './AdminSiteBlock.css';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {returnReadOrEdit, translation} from "../../constants";
import {uploadPhotoFemale, uploadPhotoMale} from "../../util/Upload";

let parse = require('html-react-parser');
const DressCode = (props)=>{
    const [dressCode,setDressCode]=useState('')
    const [show,setShow]=useState(true)
    const [photoMaleUpload,setPhotoMaleUpload]=useState()
    const [photoFemaleUpload,setPhotoFemaleUpload]=useState()
    const [photoMale,setPhotoMale]=useState("")
    const [photoFemale,setPhotoFemale]=useState("")

    const getDressCodeFromAPI=()=>{
        let promise = getDressCode()
        promise
            .then(response => {
                setPhotoMale("http://localhost:8080/api/admin/files/"+response.dressMale)
                setPhotoFemale("http://localhost:8080/api/admin/files/"+response.dressFemale)
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

    const uploadMale=(event)=> {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', photoMaleUpload)
        uploadPhotoMale(formData)
            .then(() => {
                getDressCodeFromAPI();
            }).catch((error) => {
        });
    }
    const uploadFemale=(event)=> {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', photoFemaleUpload)
        uploadPhotoFemale(formData)
            .then(() => {
                getDressCodeFromAPI();
            }).catch((error) => {
        });
    }

    useEffect(()=>{
        getDressCodeFromAPI();
    },[])
    const photo=()=>{
        return(
            <Row>
                <Col>
                    <h4>{translation.femaleDressCode}</h4>
                    <Image style={{"height":"200px"}} src={photoFemale}/>
                    <Form onSubmit={uploadFemale}>
                        <Form.File
                            onChange={(event)=> {
                                setPhotoFemaleUpload(event.target.files[0]);
                                setPhotoFemale(URL.createObjectURL(event.target.files[0]))
                            }}
                        />
                        <Button type={"submit"}>{translation.upload}</Button>
                    </Form>


                </Col>
                <Col>
                    <h4>{translation.maleDressCode}</h4>
                    <Image style={{"height":"200px"}} src={photoMale}/>
                    <Form onSubmit={uploadMale}>
                        <Form.File
                            onChange={(event)=> {
                                setPhotoMaleUpload(event.target.files[0]);
                                setPhotoMale(URL.createObjectURL(event.target.files[0]))
                            }}
                        />
                        <Button type={"submit"}>{translation.upload}</Button>
                    </Form>

                </Col>
            </Row>
        )
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
                    <Row>
                        <Col style={{textAlign: "right"}}>
                            <Button variant="link" onClick={()=>setShow(false)}>{translation.edit}</Button>
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
        <h1>{translation.dressCode}</h1>
        {photo()}
        {returnReadOrEdit(returnRead,returnEdit,show)}
        </div>
    )

}

export default DressCode;