import React, {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {getPersonalInvitations} from "../../util/GetAPI";
import {createPersonalInvitation} from "../../util/CreateAPI";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy} from "@fortawesome/free-solid-svg-icons";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import {updatePersonalInvitation} from "../../util/SaveAPI";
import {deletePersonalInvitation} from "../../util/DeleteAPI";
import {translation} from "../../constants";
import InvitationText from "./InvitationText";


const Invitations=(props)=>{

    const [invitations,setInvitations]=useState([])

    const [names,setNames]=useState('')



    const getInvitations=()=>{
        let promise = getPersonalInvitations()
        promise
            .then(response => {
                setInvitations(response)
            }).catch(() => {
        });
    }
    const createInvitation=(event)=>{
        event.preventDefault();
        const createRequest={
            names:names
        }
        createPersonalInvitation(createRequest)
            .then((response) => {
                console.log(response)
                props.successNotification(response[translation.numberOfResponse-1].message)
                getInvitations();
            }).catch(() => {

        });

    }
    const returnNewProgramsPartForm=()=>{
        return(
            <Form onSubmit={(event)=>createInvitation(event)}>
                <Form.Group>
                    <Form.Label>{translation.namesOfInvitees}</Form.Label>
                    <Form.Control onChange={(e)=>setNames(e.target.value)} type={"text"} name={"names"}/>
                </Form.Group>
                <Button type={"submit"}>{translation.newInvitation}</Button>
            </Form>
        )
    }

    useEffect(() => {
       getInvitations();
    },[]);

    const deleteInvitation=(id)=> {
        // event.preventDefault();
        const deleteRequest={
            id:id
        }
        deletePersonalInvitation(deleteRequest)
            .then((response) => {
                props.successNotification(response.message)
                getInvitations();
            })
            .catch((error) => {
            });
    }
    function checkBoxFormatter(cell, row) {
        return <Form.Check readOnly checked={cell}/>
    }
    function statusFormatter(cell, row) {
        if (cell=="NOT_ANSWERED"){
            return translation.not_answered
        }
        else if(cell=="ACCEPTED"){
            return translation.accepted
        }
        else {
            return translation.declined
        }

    }

    function deleteFormatter(cell, row) {
        return (<div>
            <Form onSubmit={()=>deleteInvitation(cell)}>
                <Button variant={"link"} type="submit" >{translation.delete}</Button>
            </Form>
        </div>)
    }
    function linkFormatter(cell, row) {
        return (
            <div>
                {/*<a href={cell}>Ссылка</a>*/}
                <CopyToClipboard text={cell}>
                    <Button>
                        <FontAwesomeIcon icon={faCopy}/>
                    </Button>
                </CopyToClipboard></div>
        )

    }
    const columns = [
        {
            dataField: 'names',
            text: translation.table.names,

        },
        {
            dataField: 'status',
            text: translation.table.status,
            formatter: statusFormatter,
            editable:false
        },
        {
            dataField: 'needTransfer',
            text: translation.table.transfer,
            formatter: checkBoxFormatter,
            editable:false
        },
        {
            dataField: 'invitationLink',
            text: translation.table.link,
            formatter:linkFormatter,
            style:{"wordWrap": "break-word"},
            editable:false
        },
        {
            dataField: 'id',
            text: translation.table.delete,
            formatter:deleteFormatter,
            // formatter:linkFormatter,
            // style:{"wordWrap": "break-word"},
            editable:false
        },

    ];
    const invitationsTable=()=>{
        return(
            <BootstrapTable
                keyField="id"
                data={invitations}
                columns={ columns }
                cellEdit={cellEditFactory({
                    mode: 'click',
                    beforeSaveCell: (oldValue, newValue, row, column) => {
                        const request={
                            ...row,
                            names:newValue
                        }
                        updatePersonalInvitation(request)
                            .then(() => {
                                getInvitations()
                            })
                            .catch((error) => {
                            })
                    }
                })}
            />
        )
    }

    return(
        <div className={"adminSiteBlock"}>
                <h1>{translation.invitationText}</h1>
                <InvitationText/>
                <h1>{translation.invitations}</h1>
                {returnNewProgramsPartForm()}
                {invitationsTable()}
        </div>
    )



}



export default Invitations;