import React, {Component, Fragment} from 'react'
import { Menu, Container, Image, Dropdown, Modal, Icon,Button } from 'semantic-ui-react'
import logoImg from "./logo.png"
import LoginForm from "../login_form"
import history from "../../history"
import {Link} from 'react-router-dom'
import './index.scss';
import male from "./male1.png"
import female from "./female.png"

export default class Header extends Component{

    state={
        login: "",
        password:"",
        modal:false
  
       
    }

    close=()=>{
        this.setState({modal:false});
    }

    open=()=>{
        this.setState({modal:true}); 
    }

  

    checkUser = ()=>{
        const {user} = this.props;
        return (user.login !=="")&&(user.login !=="999");
      
    }

    redirect =()=>{
        history.push("/products");
    }

    handleExit = () =>{
       this.props.clear();
       history.push("/");
    
     
        
     }

     
 

    render(){
        const { user, authorization, error,registration} = this.props;
        return(
            <Fragment>
                  <Menu fixed='top' inverted>
                    <Container className="heading">
                        <Menu.Item as='a' header>
                            <Image size='mini' src={logoImg} style={{ marginRight: '1.5em' }} />
                            <Link to={"/"}>EatSmart</Link>
                        </Menu.Item>
                        <Menu.Item as='a'><Link to={"/products"}>Продукти</Link></Menu.Item>
                        <Dropdown item simple text='Меню'>
                        <Dropdown.Menu>
                            <Dropdown.Item ><Link className="link_style" to={"/components"}>Компоненти</Link></Dropdown.Item>
                           {(this.checkUser()==true) && <Dropdown.Item><Link className="link_style" to={"/history"}>Історія</Link></Dropdown.Item>}
                            <Dropdown.Divider />
                            <Dropdown.Header>Навчання</Dropdown.Header>
                            <Dropdown.Item>
                            <i className='dropdown icon' />
                            <span className='text text__color' >Тести</span>
                            <Dropdown.Menu>
                                <Dropdown.Item>Тест: Діабет</Dropdown.Item>
                                <Dropdown.Item>Тест: код Е</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown.Item>
                            <Dropdown.Item>Статті</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        {/*this.checkUser() && history.push("/user") */
                            this.checkUser() && <Fragment> <Menu.Item  position='right' as='a' header>
                            {(user.gender === "male") && <Image circular size='mini' src={male} style={{ marginRight: '1.5em' }} />}
                            {(user.gender === "female") && <Image circular size='mini' src={female} style={{ marginRight: '1.5em' }} />}
                            
                            <Link to={"/user"}> {user.name} </Link>
                            
                            </Menu.Item>
                            <Button onClick={this.handleExit} color="black"><Icon size= "large" className="exit" inverted name="sign-out" /></Button>
                            </Fragment> 
                            
                        }
                       
                        {!this.checkUser() && 
                            <Modal  open={this.state.modal} onClose={this.close} size="mini" dimmer="blurring" trigger={ <Menu.Item as='a' onClick={this.open} position='right'>Увійти</Menu.Item >}>
                                <Modal.Content>
                                    <LoginForm user={this.props.user} registration={registration} closeLogin={this.close} openLogin={this.open} error={error} authorization={authorization} />
                                </Modal.Content>
                            </Modal>}
                            
                    </Container>
                </Menu>
            </Fragment>
        )
    }
}