import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {getStory} from "../../util/GetAPI";
import {translation} from "../../constants";

let parse = require('html-react-parser');
const OurStory =(props)=>{
    const [ourStory,setOurStory]=useState('')
    const getStoryFromAPI=(signal)=>{
        let promise = getStory(signal)
        promise
            .then(response => {
                setOurStory(response.story)
            }).catch(() => {

        });
    }
    useEffect(()=>{
        const abortController = new AbortController()
        const signal = abortController.signal
        getStoryFromAPI(signal);
        return function cleanup() {
            abortController.abort()
        }

    },[])
    return(
        <div id={"ourStory"} className={"mainPageBlock evenBlock"}>
            <h1 style={{"marginBottom":"50px"}} className={"text-center"}><span className={"headline"}>{translation.menu.ourStory}</span></h1>
                <Row>
                    <Col md={{span:8,offset:2}}>
                        <div>
                            {parse(ourStory)}
                        </div>
                    </Col>
                </Row>
        </div>
    )
}
export default OurStory;