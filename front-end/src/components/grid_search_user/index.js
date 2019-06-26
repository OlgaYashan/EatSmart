import React, {Component} from 'react'
import _ from 'lodash'
import { Image, Grid,Card, Header,Search, Segment, Label, Icon,Button,Divider,Modal, Popup,List  } from 'semantic-ui-react'
import "./index.scss"; 
import history from "../../history";
import img from "../../img/product.png"
import ForbidenComponentsForm from '../forbidenComponents_form';


import DietForm from '../diet_form';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG, UV_UDP_REUSEADDR } from 'constants';



const resultRenderer = ({ title }) => <Label content={title} />

export default class GridSearch extends Component{

 
       state = {  object: {},
        array:[],
        innit:false,
      comp_modal:false,
      diet_modal:false  };
    

        comp_close=()=>{
          this.setState({comp_modal:false});
      }
  
      comp_open=()=>{
          this.setState({comp_modal:true}); 
      }
      diet_close=()=>{
        this.setState({diet_modal:false});
    }

    diet_open=()=>{
        this.setState({diet_modal:true}); 
    }

    componentWillMount() {
        this.resetComponent();
      }

      handleOnClick=(obj)=>{

      }

      componentCheckFC=(product)=>{
        var res=false;
        const {user} = this.props;
        for(var i=0; i<product.components.length;i++){
          for(var j=0; j<user.forbidenComponents.length;j++){
              if(product.components[i].name==user.forbidenComponents[j].name){
                res=true;
              }
          }
        }
        return res;
      }

      isEmpty(obj) {
        for (var key in obj) {
          return false;
        }
        return true;
      }

      componentCheckDiet=(product)=>{
        var res=false;
        const {user} = this.props;
        for(var i=0; i<product.components.length;i++){
          if(!this.isEmpty(user.diet)){
          for(var j=0; j<user.diet.forbidenComponents.length;j++){
              if(product.components[i].name==user.diet.forbidenComponents[j].name){
                res=true;
              }
          }
        }
        }
        return res;
      }

      componentCheck=(product)=>{
        if(this.componentCheckDiet(product)==true || this.componentCheckFC(product)==true){
          return true;
        }
        else{
          return false;
        }
       
      }
    
      resetComponent = () =>
        this.setState({ isLoading: false, results: [], value: '',array:this.props.source })
    
      handleResultSelect = (e, { result }) => this.setState({ value: result.title })
    
      handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value, array:this.props.source, innit:true })
    
        setTimeout(() => {
          const {array} = this.state;
          if (this.state.value.length < 1) return this.resetComponent()
    
          const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
          const isMatch = result => re.test(result.name)
    
          this.setState({
            isLoading: false,
            results: _.filter(array, isMatch),
            array:_.filter(array,isMatch)
          })
        }, 300)
      }


      renderProductComponent = (obj) =>{
        return obj.components.map((component, i) => {
           return(<List.Item>
             <List.Icon name='leaf' size='large' verticalAlign='middle' />
             <List.Content>
               <List.Header as='a'>{component.name}</List.Header>
               <List.Description as='a'>{component.type}</List.Description>
             </List.Content>
           </List.Item>);
        });
   }

   renderProductComponents  = (obj) =>{
   return(
     <div className="segment__style">
     <List divided relaxed >
         {this.renderProductComponent(obj)}                   
     </List>
     </div>

 );
 }

    renderCardsColumn = () =>{
        var array;
        const {innit} = this.state;
        if (innit){ array = this.state.array;}
        else{ array = this.props.source;}
        return array.map((obj, i) => {
            return(
                    <Grid.Column key={i} className="column">
                     
                     <Modal closeIcon trigger={<button  className="unstyled-button">
                    {(this.componentCheck(obj)==false)&&<Card 
    image={img}
    header={obj.name}
    meta={"Виробник: "+obj.name}
    extra={<a>
    <Icon name='star outline' />
    {obj.rating}
  </a>}
  />}

{(this.componentCheck(obj)==true)&&
<Popup  position='right center' size='tiny' className="popup_style"
    trigger={
<Card 
    image={img}
    className="forbidenProduct"
    header={obj.name}
    meta={"Виробник: "+obj.name}
    extra={<a>
    <Icon name='star outline' />
    {obj.rating}
  </a>}
  />
}
>
  <Popup.Header>Цей продукт вам заборонено</Popup.Header>
  <Popup.Content>містить заборонені компоненти</Popup.Content>
</Popup>
  }
                            </button>}>
    <Modal.Header>Продукт</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={img} />
      <Modal.Description>
        <div className="modal_info" >
        <Header as='h2' attached='top'>
        {obj.name}
        <Header.Subheader>{"Виробник: "+obj.id_producer }</Header.Subheader>
        
    </Header>
    
  
    
                                       { this.renderProductComponents(obj)}

                            
    <a className="rate">
    <Icon name='star outline' />
    {obj.rating}
  </a>                           
                                         
                                        
                                        
                                    </div> 
        
      </Modal.Description>
    </Modal.Content>
  </Modal>


                        </Grid.Column>
            );
        })
    
    }

    renderCardsRows = () =>{
            return(
              
              
                <Grid.Row columns={4}>
                 
                    {this.renderCardsColumn()}                   
                </Grid.Row>
               

            );
        
        
    
    };

  


    render(){
        const { isLoading, value, results, object } = this.state;
        const {source, userUpdate, components, loadComponents} = this.props;
       
        return(
            <React.Fragment>
                    <div className="top_pannel" padded>
                    
                    <Icon color='grey' size='big' name='setting' />
                   

                    <Modal closeIcon  open={this.state.comp_modal} onClose={this.comp_close} size="large" dimmer="blurring" trigger={ <Button className="btn" size='small' onClick={this.comp_open} content='Заборонені компоненти' color='olive' />}>
                                <Modal.Content className="modal">
                                    <ForbidenComponentsForm user={this.props.user} userUpdate={userUpdate} components={this.props.components} loadComponents={this.props.loadComponents}/>
                                </Modal.Content>
                            </Modal>
                    <Modal closeIcon open={this.state.diet_modal} onClose={this.diet_close} size="large" dimmer="blurring" trigger={<Button className="btn" size='small' onClick={this.diet_open} content='Дієта' secondary />}>
                        <Modal.Content>
                            <DietForm user={this.props.user} diets={this.props.diets} loadDiets={this.props.loadDiets} userUpdate={userUpdate}/>
                        </Modal.Content>
                    </Modal>
                    
                                <Search
                                    className="Search_user"
                                    loading={isLoading}
                                    onResultSelect={this.handleResultSelect}
                                    onSearchChange={_.debounce(this.handleSearchChange, 500, {
                                    leading: true,
                                    })}
                                    results={results}
                                    value={value}
                                    resultRenderer={resultRenderer}
                                    {...this.props}
                                />
                                </div>
                                <Divider className="divider" horizontal>
                    <p className="divider__color">Останні переглянуті продукти</p>
                    </Divider>    
                                <Grid className="cardGrid_user" >
                               
                                      {source.length!=0 && this.renderCardsRows()}
                                         
                                    </Grid>      
                                   

            </React.Fragment>
        )
    }
      
    
}