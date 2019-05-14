import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment,Modal } from 'semantic-ui-react'
import LogoImg from "./logo.png"
import "./index.scss"; 
import history from "../../history";
import LoginForm from "../login_form";


const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

export default class SignupForm extends Component {
    state = {
      login:"",
      password:"",
      name: "",
      surname: "",
      gender: "", 
      age: 0,
      messageOpened: false,
      modal:true,
      check: false
    }
    
    close = ()=>{
      this.setState({modal:false});
  }

  
    handleSurname = e => { this.setState({surname:e.target.value}); }
    handleGender =e => { this.setState({gender:e.target.value}); }
    handleAge = e => { this.setState({age:e.target.value}); }
    handleNotTyping = () =>{ this.setState({messageOpened:false});}
    handleLogin = e => { this.setState({login:e.target.value, name:e.target.value});  }
    handlePassword = e => { this.setState({password:e.target.value});}

    redirect =()=>{
      history.push("/user");
  }
 
    handleSubmit = () =>{
      const {registration, error,loading} = this.props;
      const {login, password, name, surname, gender,age,check} = this.state;
      if(login==""||password==""||name==""||surname==""||gender==""||age==""||check==false){
        this.setState({messageOpened:true});
        this.openMessage();
      }
      else{
        registration(login,password,name,surname,gender,age);
        this.redirect();
      }
              
    }
 

    openMessage = () =>{
      return(<Message className="message"
        error
        header="Ой..."
        content='Заповніть порожні поля!'
        /> )
    }
    closeMessage = () =>{
      
      
        this.setState({messageOpened: false});
      
    }

    render(){
      const {error,authorization, loading} = this.props;
      const {messageOpened, messageOpened_EmptyName} = this.state;
        return(<div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
     
        <Grid className="loginForm" textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 350 }}>
            <Header as='h2' color='olive' textAlign='center'>
            Реєстрація
            </Header>
            { messageOpened && this.openMessage()}
            <Form open={this.state.modal} inverted size='large' >
            
              <Segment inverted stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Ім&#39;я' 
                  onChange={this.handleLogin} 
                  onClick={this.closeMessage} />
              
               
                 <Form.Input fluid icon='user' iconPosition='left' placeholder='Прізвище' 
                  onChange={this.handleSurname}  onClick={this.closeMessage} />
                <Form.Select className="text__color" fluid  options={options} placeholder='Стать' onChange={(e, { value }) => this.setState({gender:value}) }   onClick={this.closeMessage}  />
                <Form.Input fluid icon='info' iconPosition='left' placeholder='Вік' 
                  onChange={this.handleAge}  onClick={this.closeMessage} />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Пароль'
                  type='password'
                  onChange={this.handlePassword}
                  onClick={this.closeMessage}
                />
                 <Form.Checkbox label='Даю згоду на зберігання та обробку персональних даних' onChange={(e, { value }) => this.setState({check:value}) }  onClick={this.closeMessage}  />
                <Button color='olive' fluid size='large' onClick={this.handleSubmit}>
                  Зареєструватися
                </Button>

              </Segment>
            </Form>
            
          </Grid.Column>
        </Grid>
       
      </div> )
    }
}