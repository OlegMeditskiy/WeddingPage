import React, {Component} from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {getPlace} from "../util/GetAPI";
import {updatePlace} from "../util/SaveAPI";
import {Button, Container, Form} from "react-bootstrap";
import './AdminSiteBlock.css';
import Iframe from 'react-iframe'

class Place extends Component{
    constructor(props) {
        super(props);
        this.state={
            isLoading:false,
            place:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getPlace(){

        this.setState({
            isLoading: true,
        });
        let promise = getPlace()
        promise
            .then(response => {
                this.setState({
                    isLoading: false,
                    place:response.place
                })

            }).catch(() => {
            this.setState({
                isLoading: false
            })
        });
    }
    componentDidMount() {
        this.getPlace();
    }

    handleSubmit(event){
        event.preventDefault()
        const updateRequest={
            id:1,
            place:this.state.place
        }
        updatePlace(updateRequest)
            .then(() => {
                this.getPlace()
                this.props.successNotification('место проведения');
            }).catch((error) => {
            this.props.failNotification();
        });
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }


    render() {
        const place = this.state.place
        return(
            <div className={"adminSiteBlock"}>
            <Container>
                <h1>Место проведения</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="place">
                        <Form.Control onChange={this.handleChange} type="text" name={"place"} value={this.state.place} placeholder="Введите место проведения" />
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
                        Сохранить
                    </Button>
                </Form>

            </Container>

        </div>)
    }
}

export default Place;