import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";

import Header from '../../components/header' 
import "./index.scss";

export class UserHeader extends Component{

    authorization = (login, password)=>{
        this.props.authorizeUser(login,password);
     
    }
       
    render(){
        const { error, loading, user } = this.props;
        return( <Fragment>
                    <Header user={user} error={error} loading={loading} authorization={this.authorization} />
                </Fragment>
        )
    }
    
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserHeader);