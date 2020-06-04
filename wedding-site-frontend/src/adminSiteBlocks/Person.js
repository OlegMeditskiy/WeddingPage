import React, {useState} from "react";
import {Button, ButtonGroup, Col, Row} from "react-bootstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {menuHeaders, returnReadOrEdit} from "../constants";
import {updateAboutUs} from "../util/SaveAPI";

let parse = require('html-react-parser');
let lvovich = require('lvovich');
const Person =(props)=>{
    const [person,setPerson]=useState(props.person)
    const [name,setName]=useState(props.person.name)
    const [about,setAbout]=useState(props.person.about)
    const [show,setShow]=useState(true)

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
                props.successNotification('Раздел '+preposition+' ' +lvovich.inclineFirstname(name,"prepositional")+" был обновлен");
                props.update()
                setShow(true)
            }).catch((error) => {
            props.failNotification();
        });
    }
    const returnEdit=()=>{
        return (
            <div>
                <hr/>
                <Row>
                    <Col>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="link" onClick={save}>Сохранить</Button>
                        </ButtonGroup>
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
                                language:menuHeaders.ckEditorLang
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
    const returnRead=()=>{
        return(
            <div>
                <hr/>
                <Row>
                    <Col>
                        <Button variant="link" onClick={()=>setShow(false)}>Изменить</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>Имя: {name}</h5>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h5>Текст</h5>
                        <div>{parse(about)}</div>
                    </Col>
                </Row>
            </div>

        )
    }
    return returnReadOrEdit(returnRead,returnEdit,show)
}

export default Person;
