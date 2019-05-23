import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";


import AsideUser from '../../components/aside_user' 
import ProductGridUser from '../../components/grid_search_user' 

import { Grid} from 'semantic-ui-react'
import history from "../../history";

 class MainUser extends Component{
    componentDidMount = () => {
        this.props.loadDiets();
      };

      
    
    redirect =()=>{
        history.push("/");
    }
    render(){
        const {user, error} = this.props;
        console.log(user);
        return( <Fragment >{(user.login =="999") || (user.login =="") && this.redirect()}
                  {(user.login !="999") && (user.login !="") && <Grid >
                        <Grid.Row columns={2}>
                            <Grid.Column width={4}>
                                <AsideUser user={user}/>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                
                                     <ProductGridUser user={user}  source={user.lastProducts} userUpdate={this.props.updateUser} diets={this.props.diets} loadDiets={this.props.loadDiets} components={this.props.components} loadComponents={this.props.loadComponents}/>
                                
                             </Grid.Column>       
                        </Grid.Row> 
                    </Grid>}
                </Fragment>
        )
    }
    
}

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(MainUser);



