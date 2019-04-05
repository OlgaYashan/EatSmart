import React, {Component} from 'react'
import _ from 'lodash'
import { Image, Grid,Card, Header,Search, Label  } from 'semantic-ui-react'
import "./index.scss"; 



const resultRenderer = ({ title }) => <Label content={title} />

export default class GridSearch extends Component{

 
       state = {  object: {},
        array:[],
        innit:false };
    

    componentWillMount() {
        this.resetComponent();
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
                    <button   onClick={()=>this.setState({object:obj})} className="unstyled-button">
                            <Card className="card"> 
                                <Card.Content>
                                    <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
                                    <Card.Header>{obj.title}</Card.Header>
                                    <Card.Meta>{obj.description}</Card.Meta>
                                    <Card.Description>
                                    Steve wants to add you to the group <strong>best friends</strong>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                  
                                    </div>
                                </Card.Content>
                            </Card>
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
       
        return(
            <Grid>
                
                
                       <Grid.Row columns={2}>
                      
                                <Grid.Column width={12}>
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
                                        {this.renderCardsRows()}
                                    </Grid>      
                                   

                                 </Grid.Column>
                                <Grid.Column width={4}>
                                        <div className="aside">
                                         <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
                                         
                                         <Header as="h1">{object.title}</Header>
                                         
                                         <Header as="h1">{object.title}</Header>
                                         
                                         <Header as="h1">{object.title}</Header>
                                         </div>
                                </Grid.Column>
                       
                        </Grid.Row> 
                </Grid>
        )
    }
      
    
}