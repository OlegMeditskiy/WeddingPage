import React, {Component} from "react";
import {Button, Container, Form} from "react-bootstrap";
import DateTimePicker from 'react-datetime-picker';
import {updateDate} from "../util/SaveAPI";
import {getWeddingDate} from "../util/GetAPI";
import 'moment-timezone';

class WeddingDate extends Component{
    constructor(props) {
        super(props);
        this.state={
            isLoading:false,
            date: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange = date => this.setState({ date })
    handleSubmit(event){
        event.preventDefault()
        const updateRequest={
            id:1,
            weddingDate:this.state.date
        }
        updateDate(updateRequest)
            .then(() => {
                this.props.successNotification('дату свадьбы');
            }).catch((error) => {
            this.props.failNotification();
        });
    }
    getDate(){
        let promise = getWeddingDate()
        this.setState({
            isLoading: true
        });

        promise
            .then(response => {
                this.setState({
                    date: new Date(response.weddingDate),
                    isLoading: false,
                })

            }).catch(() => {
            this.setState({
                isLoading: false
            })
        });
    }
    componentDidMount() {
        this.getDate();
    }

    render() {
        return(<div className={"adminSiteBlock"}>
            <Container>
                <h1>Дата свадьбы</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="place">
                <DateTimePicker
                    locale={"ru"}
                    onChange={this.onChange}
                    value={this.state.date}
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
export default WeddingDate;