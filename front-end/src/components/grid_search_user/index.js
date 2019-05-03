import React, {Component} from 'react'
import _ from 'lodash'
import { Image, Grid,Card, Header,Search, Label, Icon  } from 'semantic-ui-react'
import "./index.scss"; 
import history from "../../history";
import img from "../../img/product.png"



const resultRenderer = ({ title }) => <Label content={title} />

export default class GridSearch extends Component{

 
       state = {  object: {},
        array:[],
        innit:false };
    

    componentWillMount() {
        this.resetComponent();
      }

      handleOnClick=(obj)=>{

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
          const isMatch = result => re.test(result.title)
    
          this.setState({
            isLoading: false,
            results: _.filter(array, isMatch),
            array:_.filter(array,isMatch)
          })
        }, 300)
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
                    <Card 
    image={img}
    header={obj.name}
    meta={"Виробник: "+obj.name}
    extra={<a>
    <Icon name='star outline' />
    {obj.rating}
  </a>}
  />
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

  


    render(){
        const { isLoading, value, results, object } = this.state;
        const {source} = this.props;
       
        return(
            <React.Fragment>
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
                                
                                <Grid className="cardGrid" >
                                        
                                      {source.length!=0 && this.renderCardsRows()}
                                         
                                    </Grid>      
                                   

            </React.Fragment>
        )
    }
      
    
}