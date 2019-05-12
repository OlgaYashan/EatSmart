import React, {Component} from 'react'
import _ from 'lodash'
import { Image, Grid,Card, Header,Search, Label, Icon, List, Modal, Button  } from 'semantic-ui-react'
import "./index.scss"; 
import { finished } from 'stream';
import img from "../../img/product.png"
import ProductForm from '../product_form';



const resultRenderer = ({ title }) => <Label content={title} />

export default class GridSearch extends Component{

 
       state = {  object: {},
        check: 0,
        array:[],
        innit:false,
        lastProducts: []
      };
    

    componentWillMount() {
        this.resetComponent();
        
      }

    componentWillUnmount(){
        if(this.state.lastProducts.length !== 0){
            this.props.updateProductsArray(this.state.lastProducts);
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

      myIndexOf = (arr, o) =>{  
        console.log(arr.length); 
        for (var i = 0; i < arr.length; i++) {
          
            if (arr[i].name == o.name) {
                return i;
            }
        }
        return -1;
    }

    set = (arr) =>{
      this.setState({lastProducts:arr});
    }

      handleOnClick = (obj) =>{
       
        if ((this.props.user.login !== "")&&(this.props.user.login !== "999")){
          

          
          console.log("user " + this.props.user.lastProducts);
          console.log("state " + this.state.lastProducts);
          console.log("prod "+obj);
         
          if(this.state.lastProducts.indexOf(obj)!=-1){
            var i = this.state.lastProducts.indexOf(obj);
            this.state.lastProducts.splice(i,1);
            this.state.lastProducts.unshift(obj);
          }
          else{
            this.state.lastProducts.unshift(obj); 
          }
            
          
          

        }
        this.setState({object:obj});
        
      }

      


    renderCardsColumn = () =>{
        var array;
        const {innit} = this.state;
        if (innit){ array = this.state.array;}
        else{ array = this.props.source;}
        return array.map((obj, i) => {
            return(
                    <Grid.Column key={i} className="column">
                    <button   onClick={()=>this.handleOnClick(obj)} className="unstyled-button">
                   {(this.props.user.role !="admin")&&  <Card 
    image={img}
    header={obj.name}
    meta={"Виробник: "+obj.name}
    extra={<a>
    <Icon name='star outline' />
    {obj.rating}
  </a>}
  />}
  {(this.props.user.role=="admin")&&  <Card 
    image={img}
    header={obj.name}
    meta={"Виробник: "+obj.name}
    extra={<div className='ui two buttons'>
    <Button size="tiny" basic color='olive'>
      <Icon name="edit"/>
    </Button>
    <Button size="tiny" basic color='grey'>
    <Icon name="trash alternate"/>
    </Button>
  </div>}
  />}
                            </button>
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

    renderProductComponent = (obj) =>{
         return obj.components.map((component, i) => {
            return(<List.Item>
              <List.Icon name='leaf' size='large' verticalAlign='middle' />
              <List.Content>
                <List.Header as='a'>{component.name}</List.Header>
                <List.Description as='a'>Updated 10 mins ago</List.Description>
              </List.Content>
            </List.Item>);
         });
    }

    renderProductComponents  = (obj) =>{
    return(
      <List divided relaxed className="aside_info">
          {this.renderProductComponent(obj)}                   
      </List>

  );
  }


    render(){
        const { isLoading, value, results, object } = this.state;
       
        return(
            <Grid>
                
                
                       <Grid.Row columns={2}>

                                <Grid.Column width={12}>
                                {(this.props.user.role=="admin")&& <div className="top_pannel_admin">
                                <Modal closeIcon  size="small" dimmer="blurring" trigger={ <Button className="btn" size='small'  content='Додати продукт' color='olive' />}>
                                <Modal.Content className="modal">
                                    <ProductForm components={this.props.components}/>
                                </Modal.Content>
                            </Modal>
                                <Search
                                    className="Search"
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
                                </div>}
                                {(this.props.user.role !="admin")&& <div className="top_pannel_user">
                               
                                <Search
                                    className="Search"
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
                                </div>}
                                <Grid className="cardGrid" >
                                        {this.renderCardsRows()}
                                    </Grid>      
                                   

                                 </Grid.Column>
                                <Grid.Column width={4}>
                                        <div className="aside">
                                         <div className="aside_img_container"><Image  size='medium' centered src={img} /></div>
                                         
                                         {(object.name != null) && <div >
                                          <Card className="aside_card"
                                          
                                          header={object.name}
                                          meta={"Виробник: "+object.id_producer }
                                          extra={<a>
                                          <Icon name='star outline' />
                                          {object.rating}
                                        </a>}
                                        />
                                    </div> }
                                  {(object.name != null)&& this.renderProductComponents(object)}
                                         {(object.name == null) && <div><Header color= "grey" block as="h4">
                                         <Icon name='question circle outline' />
                                         <Header.Content> Натисніть на продукт <br/>i тут з'явиться деатльна інформція про нього</Header.Content></Header>
                                         </div>}
                                         </div>
                                </Grid.Column>
                       
                        </Grid.Row> 
                </Grid>
        )
    }
      
    
}