import React, {Component} from 'react'
import { Image, Grid,Card, Header,Search, Label, Icon, List, Modal, Button,Table  } from 'semantic-ui-react'
import "./index.scss"; 
import ComponentAddForm from  '../add_component_form';
import ComponentEditForm from  '../edit_component_form';





export default class CustomList extends Component{

    state={
        components: [],
        innit: true,
        deletedComponents:[],
        deleteDone: false,
        modal:false,
        activeComponent: {}

    }
    componentWillMount() {
        this.setState({components: this.props.components});
        
     }

    componentWillUnmount(){
        if(this.state.deletedComponents.length !=0){
          for (var i=0; i< this.state.deletedComponents.length; i++){
            this.props.deleteComponent(this.state.deletedComponents[i]);
          }
        }
      
    }

    handleDelete =(obj)=>{
        this.state.deletedComponents.unshift(obj); 
        console.log(this.state.deletedComponents); 
        this.setState({ deleteDone: true})
    }

    updateArray=(array)=>{
        for (var i=0; i<array.length;i++){
          if(this.myIndexOf(this.state.deletedComponents,array[i])!=-1){
              var index = this.myIndexOf(array,array[i]);
              array.splice(index,1);
          }
        }
        return array;
      }
    

    renderTableRaw=()=>{
        var array;
        const {innit} = this.state;
        if (innit){ array = this.props.components;}
        else{ array = this.state.components; this.setState({innit:false})}
        array = this.updateArray(array);
        console.log(array);
        return array.map((component, i) => {
            return(
                <Table.Row key={i}>
                <Table.Cell>{component.name}</Table.Cell>
                <Table.Cell>{component.type}</Table.Cell>
                <Table.Cell className="cell">{component.description}</Table.Cell>
            {(this.props.user.role == "admin") && 
                <Table.Cell textAlign="center" selectable>
               
               
                <Modal closeIcon={<Button  color="olive" floated='right' icon onClick={()=>this.setState({modal:false})} > <Icon name='times' /></Button>} open={this.state.modal}  size="small" dimmer="blurring" trigger={ 
                    
                    <Button onClick={()=>this.setState({modal:true,activeComponent:component})} className="unstyled-button btn-edit">Змінити</Button> }>
                                <Modal.Content className="modal">
                                
                                    <ComponentEditForm  close={()=>this.setState({modal:false})} component={this.state.activeComponent} loadComponents={this.props.loadComponents} updateComponent={this.props.updateComponent} components={this.props.components} />
                                </Modal.Content>
                            </Modal>
               

                </Table.Cell>}
                {(this.props.user.role == "admin") &&
                <Table.Cell textAlign="center" selectable>
                <Button className="unstyled-button btn-delete" onClick={()=>this.handleDelete(component)}>Видалити</Button>
                </Table.Cell>}
            </Table.Row>
            );})
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

   


    render(){
        return(
            
            
        <div className="body">
        <Header color='olive' as='h2'>
            <Icon name='leaf' color="grey" />
            <Header.Content>Компоненти</Header.Content>
        </Header>
        <div className="body-content">
        

             <Table fixed color="olive" celled>
                <Table.Header className="table_header">
                    <Table.Row>
                        <Table.HeaderCell >Назва</Table.HeaderCell>
                        <Table.HeaderCell>Тип</Table.HeaderCell>
                        <Table.HeaderCell>Опис</Table.HeaderCell>
                        {(this.props.user.role == "admin") &&  <Table.HeaderCell  colSpan='2' textAlign="center">Дія</Table.HeaderCell>}
                    </Table.Row>
    {(this.props.user.role == "admin") && <Table.Row>
                    <Table.HeaderCell colSpan='5'>
                    <Modal size="small" dimmer="blurring" trigger={ 
                    
                    <Button floated='right' icon labelPosition='left' color="olive" size='small'>
                        <Icon name='leaf' /> Додати компонент
                    </Button> }>
                                <Modal.Content className="modal">
                                    <ComponentAddForm loadComponents={this.props.loadComponents} addComponent={this.props.addComponent} components={this.props.components} />
                                </Modal.Content>
                            </Modal>
                   


                    </Table.HeaderCell>
                </Table.Row>}
                </Table.Header>
                <Table.Body className="table_body">
                    {this.renderTableRaw()}
                </Table.Body>
            </Table>
        </div>
        </div>)
    }

}