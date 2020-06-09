import React from "react";
import {Col, Row} from "react-bootstrap";

let parse = require('html-react-parser');
const ProgramsPart =(props)=>{
    const programsText=props.programsPart.programsText
    const startTime =props.programsPart.startTime
    const finishTime =props.programsPart.finishTime
    const returnRead=()=>{
        return(
            <div>
                <Row>
                    <Col md={{span:8,offset:2}}>
                        <div> <b>{startTime} - {finishTime}</b></div>
                        <div>{parse(programsText)}</div>
                    </Col>
                </Row>
            </div>

        )
    }
    return returnRead();
}

export default ProgramsPart;
