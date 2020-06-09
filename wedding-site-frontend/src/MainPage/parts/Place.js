import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import Iframe from "react-iframe";
import {getPlace} from "../../util/GetAPI";
import {translation} from "../../constants";

const Place =(props)=>{
    const [place,setPlace]=useState('')

    const getPlaceFromAPI=(signal)=>{
        let promise = getPlace(signal)
        promise
            .then(response => {
                setPlace(response.place)
            }).catch(() => {
        });
    }
    useEffect(()=>{
        const abortController = new AbortController()
        const signal = abortController.signal
        getPlaceFromAPI(signal);
        return function cleanup() {
            abortController.abort()
        }
    },[])
    return(
        <div id={"place"} className={"mainPageBlock odBlock"}>
            <h1 style={{"marginBottom":"50px"}} className={"text-center"}><span className={"headline"}>{translation.menu.place}</span></h1>
                <Row>
                    <Col md={{span:8,offset:2}}>
                        <div style={{"marginBottom":"50px"}} id="map-container-google-1" className="z-depth-1-half map-container">
                                <Iframe
                                    frameBorder={"0"}
                                    height={"700px"}
                                    url={"https://maps.google.com/maps?q="+place+"&t=&z=17&ie=UTF8&iwloc=&output=embed"}
                                    allowFullScreen/>
                        </div>
                        <div style={{"marginBottom":"20px"}}>
                            <h3>{translation.directions}</h3>
                            <p>  Прежде чем составлять план, нужно правильно выбрать дату свадьбы. Вот советы, как это сделать с учетом мнения астрологов, различных примет, работы ЗАГСов и других нюансов.

                                А теперь о самом планировании свадьбы. Здесь написано, что нужно делать в зависимости от оставшегося до торжества времени. Вы узнаете, с чего необходимо начинать и что следует предпринимать далее.</p>
                        </div>
                    </Col>
                </Row>
        </div>
    )
}
export default Place;