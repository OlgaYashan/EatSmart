import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment,Modal,Icon, Menu } from 'semantic-ui-react'
import "./index.scss"; 

export default class ComponentEditForm extends Component {
    state = {
        name:"",
        type:"",
        description:"",
        activeItem: "",
        activeObj:{},
        messageOpened: false,
        addDone:false, 
        firstName:""
    }

   
    handleName = e => { this.setState({name:e.target.value});  }
    handleType = e => { this.setState({type:e.target.value});}
    handleDescription = e => { this.setState({description:e.target.value});}
    handleSubmit = () =>{
     
      const {updateComponent} = this.props;
      const {name,type,description} = this.state;
      var newComponent = this.props.component;
      newComponent.name=name;
      newComponent.type=type;
      newComponent.description=description;
      updateComponent(this.state.firstName,newComponent);
      this.setState({messageOpened:true}); 
      this.props.close();
    
    }

    componentWillMount(){
    
      const {component} = this.props;
      this.setState({name:component.name,description:component.description,
        type: component.type, firstName:component.name })
  
    }

 


    openMessage = () =>{
      return(<Message className="message"
        error
        header="Компонент успішно додано!"
        content='створіть новий або закрийте це вікно'
        /> )
    }
    closeMessage = () =>{
      
      
        this.setState({messageOpened: false});
      
    }

 

    render(){
      const {error, loading, registration} = this.props;
      const {messageOpened} = this.state;
        return(   
            <div className="productForm">
             <Header as='h2'  textAlign='center' className="productForm_text" >
              Змінити компонент
            </Header>
{messageOpened && this.openMessage()}
        <Grid  textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        
        <Grid.Row columns="one">
          <Grid.Column style={{ maxWidth: 350 }}>
           
          
            
            <Form inverted size='large' >
            
              <Segment inverted stacked>
                <Form.Input label='Назва' fluid icon='user' iconPosition='left' placeholder='Назва' 
                  onChange={this.handleName} 
                  onClick={this.closeMessage}
                  value={this.state.name} />
                   <Form.Input label='Тип'
                  fluid
                  icon='suitcase'
                  iconPosition='left'
                  placeholder='Тип'
                  onChange={this.handleType}
                  onClick={this.closeMessage}
                  value={this.state.type}
                />
                <Form.TextArea label='Опис'
                  fluid
                  icon='suitcase'
                  iconPosition='left'
                  placeholder='Опис'
                  onChange={this.handleDescription}
                  onClick={this.closeMessage}
                  value={this.state.description}
                />
                <Button color='olive' fluid size='large' onClick={this.handleSubmit}>
                  Змінити
                </Button>
              </Segment>
            </Form>
            
          </Grid.Column>
          </Grid.Row>
        </Grid></div>)
    }
}