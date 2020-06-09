import React, {useState} from "react";
import {Button, ButtonGroup, Col, Form, Image, Row} from "react-bootstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {returnReadOrEdit, translation} from "../../constants";
import {updateAboutUs} from "../../util/SaveAPI";
import {uploadPhotoToPerson} from "../../util/Upload";

let parse = require('html-react-parser');
let lvovich = require('lvovich');
const Person =(props)=>{
    const person =props.person
    const [name,setName]=useState(props.person.name)
    const [about,setAbout]=useState(props.person.about)
    const [show,setShow]=useState(true)
    const [photo,setPhoto]=useState()
    const [personPhoto,setPersonPhoto]=useState("http://localhost:8080/api/admin/files/"+props.person.photoName)
    const checkIfStartsWithVowel = (name) =>{
        let testStr = name
        let vowelRegex = '^[аоиеёэыуюяAОИЕЁЭЫУЮЯ].*'
        let matched = testStr.match(vowelRegex)
        if(matched)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    const uploadPhoto=(event)=> {
        // event.preventDefault();
        const formData = new FormData();
        formData.append('file', photo)
        formData.append('properties',new Blob([JSON.stringify({
            "id": person.id
        })],{type: "application/json"}))
        uploadPhotoToPerson(formData)
            .then(() => {
                props.update()
            }).catch((error) => {
        });
    }
    const save=()=> {
        const personRequest={
            name:name,
            about:about,
            id:person.id
        }
        updateAboutUs(personRequest)
            .then(() => {
                let preposition = 'о'
                if (checkIfStartsWithVowel(name)){
                    preposition = 'об'
                }
                uploadPhoto();
                // props.update()
                setShow(true)
                props.successNotification('Раздел '+preposition+' ' +lvovich.inclineFirstname(name,"prepositional")+" был обновлен");
            }).catch((error) => {
        });
    }
    const returnEdit=()=>{
        return (
            <div>
                <hr/>
                <Row>
                    <Col>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="link" onClick={save}>{translation.save}</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image style={{"height":"200px"}} src={personPhoto}/>
                            <Form.File
                                id={"photo"+person.id}
                                label="Загрузить фото человека 1"
                                onChange={(event)=> {
                                    setPhoto(event.target.files[0]);
                                    setPersonPhoto(URL.createObjectURL(event.target.files[0]))
                                }}
                            />
                </Col>
                </Row>
                <Row>
                    <Col>
                        <input value={name} onChange={(event)=>setName(event.target.value)}/>
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
                            data={about}
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                setAbout(data)
                            }}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
    function standby() {
        setPersonPhoto("http://localhost:8080/api/admin/files/no-image.jpg")
    }
    const returnRead=()=>{
        return(
            <div>
                <hr/>
                <Row>
                    <Col>
                        <Button variant="link" onClick={()=>setShow(false)}>{translation.edit}</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>{translation.name}: {name}</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image style={{"height":"200px"}} onError={standby} src={personPhoto}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>{translation.text}</h5>
                        <div>{parse(about)}</div>
                    </Col>
                </Row>
            </div>

        )
    }
    return returnReadOrEdit(returnRead,returnEdit,show)
}


export default Person;
