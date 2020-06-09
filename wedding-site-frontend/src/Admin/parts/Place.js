import React, {useEffect, useState} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {getPlace} from "../../util/GetAPI";
import {updatePlace} from "../../util/SaveAPI";
import {Button, Container, Form} from "react-bootstrap";
import './AdminSiteBlock.css';
import Iframe from 'react-iframe'
import {translation} from "../../constants";

const Place =(props)=>{
    const [place,setPlace]=useState('')

    const getPlaceFromAPI=()=>{
        let promise = getPlace()
        promise
            .then(response => {
               setPlace(response.place)
            }).catch(() => {
        });
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        const updateRequest={
            id:1,
            place:place
        }
        updatePlace(updateRequest)
            .then(() => {
                getPlaceFromAPI();
            }).catch((error) => {
        });
    }
    useEffect(()=>{
        getPlaceFromAPI();
    },[])

    return(
        <div className={"adminSiteBlock"}>
            <Container>
                <h1>{translation.plats}</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="place">
                        <Form.Control onChange={(event)=>setPlace(event.target.value)} type="text" name={"place"} value={place} placeholder="Введите место проведения" />
                    </Form.Group>
                    <Form.Group controlId={"googleMap"}>
                        <div id="map-container-google-1" className="z-depth-1-half map-container">
                            <Iframe
                                frameBorder={"0"}
                                height={"700px"}
                                url={"https://maps.google.com/maps?q="+place+"&t=&z=17&ie=UTF8&iwloc=&output=embed"}
                                allowFullScreen/>
                        </div>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {translation.save}
                    </Button>
                </Form>

            </Container>
        </div>)
}


export default Place;