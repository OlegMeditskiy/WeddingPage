import React, {Component} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {getDressCode} from "../util/GetAPI";
import {updateDressCode} from "../util/SaveAPI";
import {Button, Container, Form} from "react-bootstrap";
import './AdminSiteBlock.css';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class DressCode extends Component{
    constructor(props) {
        super(props);
        this.state={
            dressCode:'',
            isLoading:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getDressCode(){
        let promise = getDressCode()
        this.setState({
            isLoading: true
        });
        promise
            .then(response => {
                this.setState({
                    dressCode: response.text,
                    isLoading: false,
                })

            }).catch(() => {
            this.setState({
                isLoading: false
            })
        });
    }
    handleSubmit(event){
        event.preventDefault()
        const updateRequest={
            id:1,
            text:this.state.dressCode
        }
        updateDressCode(updateRequest)
            .then(() => {
                this.props.successNotification('дресс код');
            }).catch((error) => {
            this.props.failNotification();
        });
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    componentDidMount() {
        this.getDressCode();
    }


    render() {
        const dressCode = this.state.dressCode
        return(<div className={"adminSiteBlock"}>
            <Container>
                <h1>Дресс-код</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="place">
                        <CKEditor
                            editor={ ClassicEditor }
                            data={this.state.dressCode}
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                this.setState({dressCode: data});
                            } }
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Сохранить
                    </Button>
                </Form>

            </Container>

        </div>)
    }
}

export default DressCode;