import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment,Modal,Icon, Menu } from 'semantic-ui-react'
import "./index.scss"; 

export default class ComponentAddForm extends Component {
    state = {
        name:"",
        type:"",
        description:"",
        activeItem: "",
        activeObj:{},
        messageOpened: false,
        addDone:false
    }

   
    handleName = e => { this.setState({name:e.target.value});  }
    handleType = e => { this.setState({type:e.target.value});}
    handleDescription = e => { this.setState({description:e.target.value});}
    handleSubmit = () =>{
     
      const {addComponent, loadProducts} = this.props;
      const {name,type,description} = this.state;
      addComponent(name,type,description);    
      this.setState({messageOpened:true, addDone:true, name:"",type:"", description:""});
     
    }

 
    componentWillUnmount=()=>{
     
      this.props.loadComponents();
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
            <div className="componentForm">
             <Header as='h2'  textAlign='center' className="productForm_text" >
              Додати компонент
            </Header>
{messageOpened && this.openMessage()}
        <Grid  textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        
        <Grid.Row columns="one">
          <Grid.Column style={{ maxWidth: 350 }}>
           
          
            
            <Form inverted size='large' >
            
              <Segment inverted stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Назва' 
                  onChange={this.handleName} 
                  onClick={this.closeMessage}
                  value={this.state.name} />
                   <Form.Input
                  fluid
                  icon='suitcase'
                  iconPosition='left'
                  placeholder='Тип'
                  onChange={this.handleType}
                  onClick={this.closeMessage}
                  value={this.state.type}
                />
                <Form.TextArea
                  fluid
                  icon='suitcase'
                  iconPosition='left'
                  placeholder='Опис'
                  onChange={this.handleDescription}
                  onClick={this.closeMessage}
                  value={this.state.description}
                />
                <Button color='olive' fluid size='large' onClick={this.handleSubmit}>
                  Додати
                </Button>
              </Segment>
            </Form>
            
          </Grid.Column>
          </Grid.Row>
        </Grid></div>)
    }
}