import React, {Component} from 'react'
import { Button, Icon,Card, Form, Grid, Header, Image, Message, Segment,Modal,Divider,List, Menu } from 'semantic-ui-react'
import './index.scss';
import LogoImg from "./logo.png"
import male from "./male1.png"

export default class ForbidenComponentsForm extends Component {
    state = { 
        activeItem: "",
        activeObj:{},
        result:[],
        addDone: "false",
        deleteDone: "false",
        arr:[]
      }


    componentWillMount(){
        var  userArr = this.props.user.forbidenComponents;
        this.props.loadComponents();
        this.setState({result:userArr});
    }

    componentWillUnmount(){
        var newUser = this.props.user;
        newUser.forbidenComponents = this.state.result;
        this.props.userUpdate(newUser);
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

    handleItemClick = (e, { name, obj }) => this.setState({ activeItem: name, activeObj:obj, addDone:"false",deleteDone:"false"   })

    renderMenuItem = (arr) =>{
        const { activeItem } = this.state
        return arr.map((component, i) => {
            return(<Menu.Item name={component.name} obj={component} active={activeItem === component.name} onClick={this.handleItemClick} />);
        })
    }
    handleAdd=()=>{ 
        var component = this.state.activeObj;
            this.state.result.unshift(component);
            this.setState({addDone:"true", deleteDone:"false"});
    }

    handleDelete=()=>{
        var component = this.state.activeObj;
        var index = this.myIndexOf(this.state.result,component);
        this.state.result.splice(index,1); 
        
        this.setState({deleteDone:"true",addDone:"false"});  
    }

    isInUserComponents=(component)=>{
        console.log(component);
        console.log(this.props.user.forbidenComponents);
        if(this.myIndexOf(this.state.result,component)!=-1){
            return true;
        }
        return false;
    }

    
    
    render(){   
        const arr = this.props.components;
        return( <div>
            <Header as='h2'   className="header__style" textAlign='center'>
            <Icon color='grey' size='big' name='setting' />Заборонені компоненти
            </Header>
           <Grid>
        <Grid.Column width={6}>
          <Menu  vertical inverted pointing  className="menu__style">
            {this.renderMenuItem(arr)}
            
         
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={10}>
        {(this.state.activeItem=="")&&<Segment>
        <div><Header color= "grey" block as="h4">
                                         <Icon name='question circle outline' />
                                         <Header.Content> Натисніть на компонент i тут з'явиться <br/> деатльна інформція про нього</Header.Content></Header>
                                         </div>
          </Segment>}
         {(this.state.activeItem!="")&&<Segment>
         <Card fluid className="card__style">
      <Card.Content>
      <Image className="img" size='tiny' src={male} />
        <Card.Header>{this.state.activeObj.name}</Card.Header>
        <Card.Meta>{this.state.activeObj.type}</Card.Meta>
        <Card.Description className="desc_style">{this.state.activeObj.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        {(this.isInUserComponents(this.state.activeObj))&&<Button disabled  onClick={this.handleAdd} basic color='green'>
            Додати
          </Button>}
          {!(this.isInUserComponents(this.state.activeObj))&&(this.state.addDone=="false")&&<Button onClick={this.handleAdd} basic color='green'>
            Додати
          </Button>}
          {!(this.isInUserComponents(this.state.activeObj))&&(this.state.addDone=="true")&&<Button onClick={this.handleAdd} basic color='green'>
            Додати
          </Button>}
          {(this.isInUserComponents(this.state.activeObj))&&(this.state.deleteDone=="true")&&<Button disabled onClick={this.handleDelete} basic color='red'>
            Видалити
          </Button>}
          {(this.isInUserComponents(this.state.activeObj))&&(this.state.deleteDone=="false")&&<Button onClick={this.handleDelete} basic color='red'>
            Видалити
          </Button>}
          {(!this.isInUserComponents(this.state.activeObj))&&<Button disabled basic color='red'>
            Видалити
          </Button>}
        </div>
      </Card.Content>
    </Card>
            
          </Segment>}
        </Grid.Column>
      </Grid>
           
          </div> )
    }
}