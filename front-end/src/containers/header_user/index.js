import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";

import Header from '../../components/header' 
import "./index.scss";

import history from "../../history";

export class UserHeader extends Component{

    authorization = (login, password)=>{
        this.props.authorizeUser(login,password);  
        
    }
     componentDidUpdate(prevProps){
        if(this.props.user.login!='999'){
            if(prevProps.user.name!=this.props.user.name){
                this.redirect();
            }
        }
     }

     redirect =()=>{
        history.push("/user");
    }

    registration = (login,password,name,surname,gender,age)=>{
        this.props.registrationUser(login,password,name,surname,gender,age,"user",0);
    }
       
    render(){
        const { error, loading, user } = this.props;
        return( <Fragment>
                    <Header clear={this.props.CLEAR} registration={this.registration} user={user} error={error} loading={loading} authorization={this.authorization} />
                </Fragment>
        )
    }
    
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserHeader);