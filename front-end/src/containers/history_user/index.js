import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Image, Grid,Card, Header,Search, Label, Icon, List, Modal, Button,Table  } from 'semantic-ui-react'
import { mapStateToProps, mapDispatchToProps } from "./container";
import './index.scss'
import history from '../../history'
import img from "../../img/product.png"
import moment from 'moment';
import {mostOftenEatenProduct, eatenProductsWithForbidenComponents,SugarRatio} from '../../analysis/index'
import AnylyseResult from '../../components/analyse_result/index'


 class HistoryList extends Component{

    state={
        oftenProducts:[],
        eatProductsWithFC: false,
        eatenProductsWithFCArr:[],
        userSugarRatio:0
    }

    redirect =()=>{
        history.push("/");
    }
    checkUser = ()=>{
        const {user} = this.props;
        return (user.login !=="")&&(user.login !=="999");
      
    }
    componentWillMount(){
        if(this.checkUser()==false){
            this.redirect()
        }
        else{
           var arr1 =  mostOftenEatenProduct(this.props.user.history);
           this.setState({oftenProducts:arr1});

           var arr2 = eatenProductsWithForbidenComponents(this.props.user.history,this.props.user.forbidenComponents);
           if(arr2.length!=0){
            this.setState({eatProductsWithFC:true, eatenProductsWithFCArr:arr2});
           }
           var res = SugarRatio(this.props.user.history);
           this.setState({userSugarRatio:res})
        }
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
   
    renderTableRaw=()=>{
        return this.props.user.history.map((product, i) => {
            console.log()
           
            return(
                <Table.Row key={i}>
                <Modal closeIcon trigger={<Table.Cell selectable className="cellName">{product.name}</Table.Cell>}>
                    <Modal.Header>Продукт</Modal.Header>
                    <Modal.Content image>
                                <Image wrapped size='medium' src={img} />
                                <Modal.Description>
                                    <div className="modal_info" >
                                        <Header as='h2' attached='top'>
                                            {product.name}
                                            <Header.Subheader>{"Виробник: "+product.id_producer }</Header.Subheader> 
                                        </Header>          
                                        {this.renderProductComponents(product)}                      
                                        <a className="rate">
                                        <Icon name='star outline' />
                                        {product.rating}</a>                           
                                    </div> 
                                </Modal.Description>
                     </Modal.Content>
                </Modal>
                <Table.Cell className="cellDate" textAlign='center'>{moment(product.date).format('DD-MM-YYYY LT')}</Table.Cell>
            </Table.Row>
            );})
    }


    render(){
        return(<div className="body">
            {this.checkUser()&& <div>
                    <Header color='olive' as='h2'>
                            <Icon name='leaf' color="grey" />
                            <Header.Content>Історія: продукти, які ви їли</Header.Content>
                    </Header>
                    <div className="body-content">
                        <Table fixed color="olive" celled>
                            <Table.Header className="table_header">
                                <Table.Row>
                                    <Table.HeaderCell  width={12}>Назва</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center' width={4}>Дата</Table.HeaderCell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='5'>
                                        <Modal  size="large" dimmer="blurring" trigger={ 
                                            <Button floated='right' icon labelPosition='left' color="olive" size='small' onClick={()=>console.log(this.state.eatenProductsWithFCArr)}>
                                                <Icon name='chart line' /> Аналіз та прогноз
                                            </Button> }>
                                            <Modal.Content>
                                                    <AnylyseResult productList={this.state.oftenProducts}  eatProductsWithFC={this.state.eatProductsWithFC} eatenProductsWithFCArr={this.state.eatenProductsWithFCArr} userSugarRatio={this.state.userSugarRatio} />    
                                            </Modal.Content>
                                        </Modal>
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            {this.props.user.history.length>0 &&<Table.Body className="table_body">
                                {this.checkUser()==true &&  this.renderTableRaw()}
                            </Table.Body>}
                        </Table>
                    </div>
                    <div>
                    {
                    this.props.user.history.length==0 &&
                            <Header color='olive' as='h2'className="hed">
                            <Icon name='mobile alternate' color="grey" />
                            <Header.Content>Скористайтеся мобільним додатком та відскануйте штрих-код продукту, який будете їсти!</Header.Content>
                            </Header>
                        }</div>
                    </div>
                    }
                    
                </div>
                );}
}

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(HistoryList);



