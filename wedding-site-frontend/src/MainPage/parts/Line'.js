import React from "react";
import {Image} from "react-bootstrap";

const Line =()=>{
    return(
        <div className={"text-center"}>
            <Image style={{"width":"40vw"}} src={"http://localhost:8080/api/admin/files/line.png"}/>
        </div>
    )
}
export default Line;