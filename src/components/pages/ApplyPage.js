import React, { Component } from 'react'
import ApplyForm from '../ApplyForm';
import {connect} from 'react-redux';
import '../../assets/css/applyform.css'
export default class ApplyPage extends Component {

    
    render() {
        return (
            <div id="applyform">
                <ApplyForm/>
            </div>
        )
    }
}

