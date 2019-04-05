import React, {Component} from 'react';
import './index.scss';
import {Container, Header, Button, Icon} from 'semantic-ui-react'
//import {Link} from 'react-router-dom';
import history from "../../history";



export default class FirstScreen extends Component{
   
redirect =()=>{
    history.push("/products");
}
    render(){
        return(
            <div className="homePageFragment">
            <div className="homePageLayout">
            <Container className="homePageText" >
                    <Header
                    as='h1'
                    content='Imagine-a-Company'
                    inverted
                    className="homePageText_main"
                    />
                    <Header
                    as='h2'
                    content='Do whatever you want when you want to.'
                    inverted
                    className="homePageText_secondary"
                    />
                   { /*<Link className="link" to="/products" >
                    <Button color='olive' size='huge' className="homePageButton" > 
                 
                    Get Started
                    <Icon name='right arrow'/>
                    </Button>
        </Link>*/}
        <Button onClick={this.redirect} color='olive' size='huge' className="homePageButton" > 
                 
                 Get Started
                 <Icon name='right arrow'/>
                 </Button>
                </Container>
            </div>
        </div>
        );
    }
}