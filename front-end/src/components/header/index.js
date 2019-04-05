import React, {Component, Fragment} from 'react'
import { Menu, Container, Image, Dropdown, Modal } from 'semantic-ui-react'
import logoImg from "./logo.png"
import LoginForm from "../login_form"

export default class Header extends Component{

    state={
        login: "",
        password:""
    }

    checkUser = ()=>{
        const {user} = this.props;
        return (user.login !=="");
      
    }

    render(){
        const { user, authorization, error} = this.props;
        return(
            <Fragment>
                  <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                            <Image size='mini' src={logoImg} style={{ marginRight: '1.5em' }} />
                                EatSmart
                        </Menu.Item>
                        <Menu.Item as='a'>Home</Menu.Item>
                        <Dropdown item simple text='Dropdown'>
                        <Dropdown.Menu>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>Header Item</Dropdown.Header>
                            <Dropdown.Item>
                            <i className='dropdown icon' />
                            <span className='text'>Submenu</span>
                            <Dropdown.Menu>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        {this.checkUser() &&  <Menu.Item  position='right' as='a' header>
                        <Image circular size='mini' src={user.avatarLink} style={{ marginRight: '1.5em' }} />
                            {user.name}
                        </Menu.Item>}
                        {!this.checkUser() && 
                            <Modal size="mini" dimmer="blurring" trigger={ <Menu.Item as='a' position='right'>Log in </Menu.Item >}>
                                <Modal.Content>
                                    <LoginForm error={error} authorization={authorization}/>
                                </Modal.Content>
                            </Modal>}
                    </Container>
                </Menu>
            </Fragment>
        )
    }
}