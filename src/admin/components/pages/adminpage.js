import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


import SideNavigation from '../sideNavigation';
import SenaryoForm from '../senaryoform';


import '../../../assets/css/admin/admin.css';
class Adminpage extends Component {
    
   constructor(props){
       super(props);
       console.log(this.props);
   }

   
    render() {

        
        return (

            //state.loggedIn kontrolu burada yapılacak 
            <div className="flexible-content">
                 
                    <div id="content">
                        <SenaryoForm/>
                    </div>
              
            </div>
            
        )
    }
}



export default  Adminpage;