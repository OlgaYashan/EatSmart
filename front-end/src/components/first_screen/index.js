import React, {Fragment,Component} from 'react';
import './index.scss';
import './style.css';
import './style2.css';
import './main.css';
import {Container, Header, Button, Icon,  Menu} from 'semantic-ui-react'
//import {Link} from 'react-router-dom';
import history from "../../history";
import mobile from "./mobile.jpg"



export default class FirstScreen extends Component{
   
redirect =()=>{
    history.push("/products");
}
    render(){
        return(
            <div name="top" className="homePageFragment">
            <div className="homePageLayout">
            <Container className="homePageText" >
                    <Header
                    as='h1'
                    content='EatSmart'
                    inverted
                    className="homePageText_main"
                    />
                    <Header
                    as='h2'
                    content='Ресурс ствоерно з метою контролю якості продукції для споживачів, виробників продуктів та державних органів контролю якості продуктів'
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
                 
                 Почати
                 <Icon name='right arrow'/>
                 </Button>
                </Container>
            </div>
            <section>      
            <div className="container__pad clearfix">
                <div className="text__pad">
                    <h1>Ідея проекту</h1>
                    <h2>Ідея проекту полягає у тому, щоб надати комплекс засобів для контролю якості продуктів харчування. Дана інформаційна система поділена логічно на дві частини:
мобільний додаток для споживачів та веб-ресурс для державних органів контролю
якості продукції, магазинів та виробників.</h2>
                    <a href="#top" class="btn_arrow icon_arrow"></a>
                </div>
                <div className="pic__pad">
                    <img className="pic__pad__size" src={mobile}/>
                </div>
            </div>
            </section>
            <div className="footer">
                  
            </div>
            
        </div>
        );
    }
}