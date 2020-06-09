import React, {useEffect, useState} from "react";
import {Image} from "react-bootstrap";
import Moment from 'react-moment';
import 'moment/locale/ru';
import 'moment/locale/sv';
import {getWeddingDate} from "../../util/GetAPI";
import {translation} from "../../constants";
import Countdown from 'react-countdown';
const Header =(props)=>{
    const [date,setDate]=useState('')
    const Completionist = () => <span>Свадьба состоялась!!!</span>;
    const getDateFromAPI=(signal)=>{
        let promise = getWeddingDate(signal)
        promise
            .then(response => {
                const newDate = new Date(response.weddingDate)
                setDate(newDate)
            }).catch(() => {
        });
    }
    useEffect(()=>{
        const abortController = new AbortController()
        const signal = abortController.signal
        getDateFromAPI(signal);
        return function cleanup() {
            abortController.abort()
        }
    },[])
    return(
        <div style={{"overflow":"hidden","position":"relative"}}>
            <Image className={"header"}
                   src={"http://localhost:8080/api/admin/files/header2.jpg"}/>
            <div className={"timerBlock"}>
                <div className={"names"}> Daria and Alexander</div>
                <div className={"weddingDate"}>
                    <Moment format="LL" locale={translation.ckEditorLang} >{date}</Moment>
                </div>
                <div className={"beforeWedding"}>{translation.beforeWedding}</div>
                <div className={"timer"}>
                    <Countdown date={date+1}>
                        <Completionist/>
                    </Countdown>
                </div>
            </div>
        </div>
    )
}
export default Header;