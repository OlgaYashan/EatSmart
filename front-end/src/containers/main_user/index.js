import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";


import AsideUser from '../../components/aside_user' 
import ProductGridUser from '../../components/grid_search_user' 

import { Grid} from 'semantic-ui-react'
import history from "../../history";

 class MainUser extends Component{
    redirect =()=>{
        history.push("/");
    }
    render(){
        const {testStore, error} = this.props;
        console.log(testStore.user.user);
        return( <Fragment >{(testStore.user.user.login =="999") || (testStore.user.user.login =="") && this.redirect()}
                  {(testStore.user.user.login !="999") && (testStore.user.user.login !="") && <Grid >
                        <Grid.Row columns={2}>
                            <Grid.Column width={4}>
                                <AsideUser user={testStore.user.user}/>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                
                                     <ProductGridUser user={testStore.user.user}  source={testStore.user.user.lastProducts} />
                                
                             </Grid.Column>       
                        </Grid.Row> 
                    </Grid>}
                </Fragment>
        )
    }
    
}

export default connect(
    state=>({
        testStore:state
    }),
    dispatch => ({})
)(MainUser);



