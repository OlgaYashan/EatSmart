import React, {Component} from 'react'
import _ from 'lodash'
import { Image, Grid,Card, Header,Search, Label, Divider, Segment, Icon, List  } from 'semantic-ui-react'
import "./index.scss"; 
import male from "./male1.png"
import female from "./female.png"


export default class AsideUser extends Component{

    renderComponent = () =>{
        const { user } = this.props;
        return user.forbidenComponents.map((component, i) => {
           return(<List.Item>
             <List.Icon name='leaf' size='large' verticalAlign='middle' />
             <List.Content>
               <List.Header as='a'>{component.name}</List.Header>
               <List.Description as='a'>Updated 10 mins ago</List.Description>
             </List.Content>
           </List.Item>);
        });
   }

    renderComponents  = () =>{
        return(
            <Grid className="componentGrid" >
                <List divided relaxed className="aside_info">
                    {this.renderComponent()}                   
                </List>
          </Grid>
    
      );
      }
      

    render(){
        const { user } = this.props;
        return(
                <div className="aside_user">
                
                {(user.gender === "male") && <div className="aside_img_container"><Image  size='small' centered src={male} /></div>}
                {(user.gender === "female") && <div className="aside_img_container"><Image  size='small' centered src={female} /></div>}
                <Segment >
                <Header color="grey" textAlign='center' as="h2">{`${user.name} ${user.surname}`}</Header>
                <Divider  horizontal>
                    <p className="divider__color">Інфо</p>
                    </Divider>
                    <div className="info">
                    <Header className="info_header" as='h3'>
                        {user.gender=="male" && <Icon name='mars' />}
                        {user.gender=="female" && <Icon name='venus' />}
                        <Header.Content>
                        Стать
                        <Header.Subheader>{user.gender}</Header.Subheader>
                        </Header.Content>
                    </Header>
                    <Header className="info_header" as='h3'>
                        <Icon name='child' />
                        <Header.Content>
                        Вік
                        <Header.Subheader>{user.age}</Header.Subheader>
                        </Header.Content>
                    </Header>
                    </div>
                <Divider color="olive" horizontal>
                <p className="divider__color">Особливості раціону</p>
                    </Divider>
                    <div className="items"><Header className="divider__color_grey" as='h6' >
                Заборонені компоненти
                    
                    </Header>
                    </div>
                    {this.renderComponents()}
                  
                    <Header className="info_header" as='h4'>
                        <Icon name='user md' />
                        <Header.Content className="divider__color_green" >
                        Дієта
                       {(this.props.user.diet != undefined ) && <Header.Subheader>{this.props.user.diet.name}</Header.Subheader>}
                       {(this.props.user.diet == undefined ) && <Header.Subheader>-</Header.Subheader>}
                        </Header.Content>
                    </Header>
                    
                </Segment>
                </div>

        )
    }
      
    
}