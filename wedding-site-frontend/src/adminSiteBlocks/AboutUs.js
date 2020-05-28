import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, {Type} from 'react-bootstrap-table2-editor';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {getAllAboutUs} from "../util/GetAPI";
import {updateAboutUs} from "../util/SaveAPI";
import {Container} from "react-bootstrap";
import './AdminSiteBlock.css';

let lvovich = require('lvovich');
class AboutUs extends Component{
    constructor(props) {
        super(props);
        this.state={
            aboutUsList:[],
            isLoading:false
        }

    }

    getAboutList(){
        let promise = getAllAboutUs()
        this.setState({
            isLoading: true
        });
        promise
            .then(response => {
                const aboutUsList = this.state.aboutUsList.slice();
                this.setState({
                    aboutUsList: aboutUsList.concat(response),
                    isLoading: false,
                })

            }).catch(() => {
            this.setState({
                isLoading: false
            })
        });
    }

    componentDidMount() {
        this.getAboutList();
    }


    render() {
        const cellEdit = cellEditFactory({
            mode: 'click',
            blurToSave: true,
            beforeSaveCell: (oldValue, newValue, row, column,done) => {
                const updateAboutUsRequest={
                    ...row,
                    [column.dataField]:newValue,
                }
                updateAboutUs(updateAboutUsRequest)
                    .then(() => {
                        done()
                        let preposition = 'о'
                        if (checkIfStartsWithVowel(row.name)){
                            preposition = 'об'
                        }
                        this.props.successNotification('информацию '+preposition+' ' +lvovich.inclineFirstname(row.name,"prepositional"));
                    }).catch((error) => {
                    this.props.failNotification();
                    done(false);
                });
            },

        });
        return(<div className={"adminSiteBlock"}>
            <Container>
                <h1>О нас</h1>
                <BootstrapTable
                    keyField="id"
                    data={ this.state.aboutUsList }
                    columns={ columns }
                    cellEdit={cellEdit}
                />
            </Container>

        </div>)
    }
}
const checkIfStartsWithVowel = (name) =>{
    var testStr = name
    var vowelRegex = '^[аоиеёэыуюяAОИЕЁЭЫУЮЯ].*'
    var matched = testStr.match(vowelRegex)
    if(matched)
    {
        return true;
    }
    else
    {
        return false;
    }
}

const columns = [ {
    dataField: 'name',
    text: 'Имя'
}, {
    dataField: 'about',
    text: 'Об этом человеке',
    style:{"word-wrap": "break-word"},
    editor: {
        type: Type.TEXTAREA,
        style:{'height':'500px'}
    },

}];
export default AboutUs;