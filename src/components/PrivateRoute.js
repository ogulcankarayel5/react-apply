import React from 'react';
import {Redirect,Route} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({component:Component,layout: Layout,...rest}) => (
    <Route {...rest} render ={(props) => (
       localStorage.getItem('user') ? 
       <Layout>
        <Component {...props} />
        </Layout>
        :<Redirect to={{pathname:'/login',state:{from:props.location}}}/>
    )} />
)


const mapStateToProps = state => {
    return{
        isLoggedIn:state.loginForm.loggedIn,
       
    }
}

export default connect (mapStateToProps)(PrivateRoute);