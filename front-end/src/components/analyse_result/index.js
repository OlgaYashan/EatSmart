import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Image, Grid,Card, Header,Search, Label, Icon, List, Modal, Button,Table, GridRow, Divider  } from 'semantic-ui-react'
import './index.scss'

export default class AnylyseResult extends Component{

    renderTableRaw=(productList)=>{
        return productList.map((product, i) => {
            return(
                <Table.Row key={i}>
                <Table.Cell  className="cellName">{product.name}</Table.Cell>
                </Table.Row>
            );})
    }


    renderList=(productList)=>{
        return(
 
       
        <div className="body-content">
            <Table fixed color="olive" celled>
                <Table.Header className="table_header">
                    <Table.Row>
                        <Table.HeaderCell  width={6}>Назва</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body className="table_body">
                    {this.renderTableRaw(productList)}
                </Table.Body>
            </Table>
            </div>
        )
    }

    render(){
        const {productList, eatProductsWithFC, eatenProductsWithFCArr, userSugarRatio} = this.props;
        return(<div>
                    <Header color="grey"   as='h1'>
                        <Icon name='chart line' color='olive' />
                        Аналіз та прогноз
                    </Header>
                    <Divider/>
                    <Grid divided>
                      {productList.length>0 &&  <Grid.Row>
                            <Grid.Column width={9}>
                            <Header color='olive' as='h3'>
                                <Header.Content>Продукти, які ви їсте найчастіше</Header.Content>
                            </Header>
                            {this.renderList(productList)}
                            </Grid.Column>
                            <Divider/> 
                      </Grid.Row>}            
                        {eatProductsWithFC>0 && 
                          <Grid.Row> 
                                <Grid.Column width={9}>  
                                    <Header color='olive' as='h3'>
                                            <Header.Content>Чи їсте заборонені продукти?</Header.Content>
                                            <Header.Subheader color="grey">Заборонені продукти, які ви їли</Header.Subheader>
                                    </Header>             
                                        {this.renderList(eatenProductsWithFCArr)}
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <Header color='grey' as='h4'>
                                            <Icon color='orange' name='user md' />
                                            <Header.Content>Ви їсте продукти, які містять заборонені для вас компоненти. 
                                                Це може призвести до погіршення вашого здоров'я! </Header.Content>
                                    </Header>
                                </Grid.Column>                               
                         </Grid.Row>}
                        {eatProductsWithFC==0 &&   
                            <Grid.Row> 
                                    <Grid.Column width={9}>  
                                        <Header color='olive' as='h3'>
                                            <Header.Content>Чи їсте заборонені продукти?</Header.Content>
                                        </Header>
                                        <Header color="green" as='h4'>
                                        <Icon color='olive' name='user md' />
                                            Ви молодець. Ви не їсте продуктів із забороненими для вас компонентами) 
                                        </Header>
                                    </Grid.Column> 
                            </Grid.Row>}
                            <Divider/>
                        <Grid.Row>
                                 <Grid.Column width={16}>  
                                        <Header color='orange' as='h3'>
                                            <Header.Content>Цукор: цукровий діабет</Header.Content>
                                        </Header>
                                        <Header color="green" as='h4'>
                                        <Icon color='grey' name='user md' />
                                        {(userSugarRatio==0)&&`Ви не їсте цукоровмісних продуктів, тому загрози вашому здоров'ю немає.`}
                                        {(userSugarRatio==1)&&`В середньому ви їсте  ${userSugarRatio}  цукоровмісний продукт на день. Добова норма для дорослої людини: 2 цукоровмісні продукти на день. Ви дотримуєтеся норми, тому загрози вашому здоров'ю немає.`}
                                        {(userSugarRatio==2)&&`В середньому ви їсте  ${userSugarRatio}  цукоровмісних продукти на день. Добова норма для дорослої людини: 2 цукоровмісні продукти на день. Ви дотримуєтеся норми, тому загрози вашому здоров'ю немає.`}
                                        {(userSugarRatio>2)&&`В середньому ви їсте  ${userSugarRatio}  цукоровмісних продукти(ів) на день. Добова норма для дорослої людини: 2 цукоровмісні продукти на день. Ви перевищуєте норму, тому існує загроза вашому здоров'ю.`}
                                        </Header>
                                 </Grid.Column> 
                        </Grid.Row> 
                    </Grid>
                </div>
        )}
}
