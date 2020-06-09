import React, {useEffect, useState} from "react";
import {getProgram} from "../../util/GetAPI";
import ProgramsPart from "./ProgramsPart";
import {translation} from "../../constants";

const Program =(props)=>{
    const [program,setProgram]=useState(
        {
            id:'',
            programsParts:[]
        }
    );

    const getProgramFromAPI =(signal)=>{
        let promise = getProgram(signal)
        promise
            .then(response => {
                setProgram(response)
            }).catch(() => {
        });
    }
    useEffect(()=>{
        const abortController = new AbortController()
        const signal = abortController.signal
        getProgramFromAPI(signal)
        return function cleanup() {
            abortController.abort()
        }
    },[])
    const DisplayParts=(props)=>{
        const parts = props.programList
        const list = parts.map((part,idx)=>{
            return (
                <div key={idx}>
                    <ProgramsPart {...props} programsPart={part}/>
                </div>
            )
        })
        return(
            <div>
                {list}
            </div>

        )
    }

    return(
        <div id={"program"} className={"mainPageBlock odBlock"}>
            <h1  style={{"marginBottom":"50px"}} className={"text-center"}><span className={"headline"}>{translation.menu.program}</span></h1>

                <DisplayParts {...props} update={getProgramFromAPI} programList={program.programsParts} />
        </div>)


}
export default Program;