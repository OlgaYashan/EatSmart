import React, {Component} from 'react'
import _ from 'lodash'
import { Image, Grid,Card, Header,Search, Label  } from 'semantic-ui-react'
import "./index.scss"; 
import male from "./male1.png"
import female from "./female.png"


export default class AsideUser extends Component{

 
      

    render(){
        const { user } = this.props;
       
        return(
                <div className="aside_user">
                
                {(user.gender === "male") && <div className="aside_img_container"><Image  size='medium' centered src={male} /></div>}
                {(user.gender === "female") && <div className="aside_img_container"><Image  size='medium' centered src={female} /></div>}
                <Header as="h1">{user.name}</Header>
                
                <Header as="h1">{user.surname}</Header>
                
                <Header as="h1">hh</Header>
                </div>

        )
    }
      
    
}