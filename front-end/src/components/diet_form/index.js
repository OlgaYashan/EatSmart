import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment,Modal,Card, Icon, List } from 'semantic-ui-react'
import male from "./diet.jpg"
import './index.scss' 


export default class ForbidenComponentsForm extends Component {
    state = {
      activeDiet:{},
      userDiet:{}
    }

    handleOnClick = (diet) =>{
        this.setState({activeDiet:diet});       
    }
    componentDidMount(){
      if(this.props.user.diet != null){
        this.setState({userDiet:this.props.user.diet, activeDiet: this.props.user.diet});
        console.log("yep");
      }
      else{
        this.setState({ activeDiet:{name:""}})
      }
      
      
    }


    componentWillUnmount(){
      var newUser = this.props.user;
      newUser.diet = this.state.activeDiet;
      this.props.userUpdate(newUser);
    }


    renderComponent = (diet) =>{
      return diet.forbidenComponents.map((component, i) => {
         return(<List.Item>
           <List.Icon name='leaf' size='large' verticalAlign='middle' />
           <List.Content>
             <List.Header as='a'>{component.name}</List.Header>
             <List.Description as='a'>{component.type}</List.Description>
           </List.Content>
         </List.Item>);
      });
 }

    renderForbidenComponents=(diet)=>{
      return(
        <Grid className="componentGrid" >
            <List divided relaxed className="component">
                {this.renderComponent(diet)}                   
            </List>
      </Grid>

  );
    }

    renderCards = ()=>{
      var arr = this.props.diets;
      console.log(this.state.activeDiet);
      return arr.map((diet, i) => {
        return( <Grid.Column width={5} key={i} className="column">
        
        
        <button className="unstyled-button" onClick={()=>this.handleOnClick(diet)}> 
       {(diet.name != this.state.activeDiet.name) && <Card 
          className="card__style "    
        >
         <Image src={male} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{diet.name}</Card.Header>
      <Card.Description>
      {diet.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
     {this.renderForbidenComponents(diet)}
    </Card.Content>
      </Card>}
      {
        (diet.name == this.state.activeDiet.name) && <Card 
        className="card__style card_active"    
      >
       <Image src={male} wrapped ui={false} />
  <Card.Content>
    <Card.Header>{diet.name}</Card.Header>
    <Card.Description>
    {diet.description}
    </Card.Description>
  </Card.Content>
  <Card.Content extra>
   {this.renderForbidenComponents(diet)}
  </Card.Content>
    </Card>
      }

      
      
      </button></Grid.Column> );
      })
    }
    
    render(){
        return(<div >
     
        <Grid textAlign='center'   verticalAlign='middle'>
          <Grid.Column>
            <Header as='h2' color='olive' textAlign='center'>
               Дієта
               <Header.Subheader className="subheader">Оберіть або змініть вашу дієту!</Header.Subheader>
            </Header> 
            <Grid className="Grid__style">
              <Grid.Row columns={3}>
                {this.renderCards()}
                </Grid.Row>
            </Grid>
        </Grid.Column>
        </Grid>
       
      </div> )
    }
}