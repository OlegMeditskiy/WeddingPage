import React, {Component} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {getStory} from "../util/GetAPI";
import {updateStory} from "../util/SaveAPI";
import {Button, Container, Form} from "react-bootstrap";
import './AdminSiteBlock.css';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class OurStory extends Component{
    constructor(props) {
        super(props);
        this.state={
            ourStory:'',
            isLoading:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getStory(){
        let promise = getStory()
        this.setState({
            isLoading: true
        });
        promise
            .then(response => {
                this.setState({
                    ourStory: response.story,
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
            story:this.state.ourStory
        }
        updateStory(updateRequest)
            .then(() => {
                this.props.successNotification('историю');
            }).catch((error) => {
            this.props.failNotification();
        });
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    componentDidMount() {
        this.getStory();
    }


    render() {
        return(<div className={"adminSiteBlock"}>
            <Container>
                <h1>Наша история</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="place">
                        <CKEditor
                            editor={ ClassicEditor }
                            data={this.state.ourStory}
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                this.setState({ourStory: data});
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

export default OurStory;