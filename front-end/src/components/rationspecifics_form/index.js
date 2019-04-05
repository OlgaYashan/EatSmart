import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import LogoImg from "./logo.png"

export class RationSpecificsForm extends Component {
    state = {
        pregnancy:false,
        diabetic:false,
        component: ""
    }

    handleComponent = e =>{
        this.setState({component:e.target.value});
    }
    handlePragnency = ()=>{
        this.setState({pregnancy: !this.state.pregnancy});
    }
    handleDiabetic = ()=>{
        this.setState({diabetic: !this.state.diabetic});
    }

    handleSubmit = () =>{
        //const {checkUser} = this.props;
        //checkUser(this.state.login,this.state.password);
        console.log(this.state.pregnancy,this.state.diabetic,this.state.component);

    }

    render(){
        return(<div className='login-form'>
        
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='olive' textAlign='center'>
              <Image size="huge" src={LogoImg} /> Set your diet specifics!
            </Header>
            <Form inverted size='large' >
              <Segment inverted stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='allergy to' 
                  onChange={this.handlecomponent}/>
              <Form.Checkbox inline label='pregnancy'  onChange={this.handlePragnency}/>
              <Form.Checkbox inline label='diabetic' onChange={this.handleDiabetic}/>
    
                <Button color='olive' fluid size='large' onClick={this.handleSubmit}>
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
       
      </div> )
    }
}
   