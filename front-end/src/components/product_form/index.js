import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment,Modal,Icon, Menu } from 'semantic-ui-react'

import "./index.scss"; 
import { loadProducts } from '../../logic/products/actions';

export default class ProductForm extends Component {
    state = {
        name:"",
        producer:"",
        barCode:"",
        activeItem: "",
        activeObj:{},
        messageOpened: false,
        pickedArr: [],
        addDone:false
    }

    myIndexOf = (arr, o) =>{  
        console.log(arr.length); 
        for (var i = 0; i < arr.length; i++) {
          
            if (arr[i].name == o.name) {
                return i;
            }
        }
        return -1;
    }


    handleItemClick = (e, { name, obj }) =>{
        if(this.myIndexOf(this.state.pickedArr, obj)!=-1){
            var i = this.myIndexOf(this.state.pickedArr, obj);
            this.state.pickedArr.splice(i,1);
        }
        else{
            this.state.pickedArr.unshift(obj);
        }
        this.setState({ activeItem: name, activeObj:obj, addDone:"false",deleteDone:"false"   });
    }

    isInPicked = (obj) =>{
        if(this.myIndexOf(this.state.pickedArr, obj)!=-1){
            return true;
        }
        else{
            return false;
        }
    }




   
    handleName = e => { this.setState({name:e.target.value});  }
    handleProducer = e => { this.setState({producer:e.target.value});}
    handleBarCode = e => {this.setState({barCode:e.target.value});}
    handleSubmit = () =>{
     
      const {addProduct, loadProducts} = this.props;
      const {name,producer,pickedArr,barCode} = this.state;
      addProduct(name,producer,pickedArr,barCode);    
      this.setState({messageOpened:true, addDone:true, name:"",producer:"", pickedArr:[], barCode:""});
    }

 
    componentWillUnmount=()=>{
    
      this.props.loadProducts();   
    }

    openMessage = () =>{
      return(<Message className="message"
        error
        header="Продукт успішно додано!"
        content='створіть новий або закрийте це вікно'
        /> )
    }
    closeMessage = () =>{
      
      
        this.setState({messageOpened: false});
      
    }

    renderMenuItem = () =>{
        const { activeItem } = this.state;
        return this.props.components.map((component, i) => {
            
            
           if(this.isInPicked(component) == true){
            return( 
            <Menu.Item name={component.name} obj={component}   onClick={this.handleItemClick} className="picked"/>
            
            );}
            else{
                return( 
                <Menu.Item name={component.name} obj={component}   onClick={this.handleItemClick}/>
                );}
        })
    }

    render(){
      const {error, loading, registration} = this.props;
      const {messageOpened} = this.state;
        return(   
            <div className="productForm">
             <Header as='h2'  textAlign='center' className="productForm_text" >
              Додати продукти
            </Header>
{messageOpened && this.openMessage()}
        <Grid  textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        
        <Grid.Row columns="two">
          <Grid.Column >
           
          
            
            <Form className="form" inverted size='large' >
            
              <Segment inverted stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Назва' 
                  onChange={this.handleName} 
                  onClick={this.closeMessage}
                  value={this.state.name} />
                <Form.Input
                  fluid
                  icon='suitcase'
                  iconPosition='left'
                  placeholder='Виробник'
                  onChange={this.handleProducer}
                  onClick={this.closeMessage}
                  value={this.state.producer}
                />
                 <Form.Input
                  fluid
                  icon='barcode'
                  iconPosition='left'
                  placeholder='Штрих-код'
                  onChange={this.handleBarCode}
                  onClick={this.closeMessage}
                  value={this.state.barCode}
                />
                <Button color='olive' fluid size='large' onClick={this.handleSubmit}>
                  Додати
                </Button>
              </Segment>
            </Form>
            
          </Grid.Column>
          <Grid.Column style={{ maxWidth: 350 }}>
          <Menu  vertical inverted className="menu__style_form">
            {this.renderMenuItem()}
            
         
          </Menu>
          </Grid.Column>
          </Grid.Row>
        </Grid></div>)
    }
}