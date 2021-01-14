
import './App.css';
import React,{Component} from 'react'
import MatchZipcode from './Components/MatchZipcode'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state={
      zipcode: 0,
      arrData:[]
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
     
    this.setState({
      zipcode : e.target.value
    })
  }

  async componentDidMount() {
      axios.get(`https://ctp-zip-api.herokuapp.com/zip/${this.state.zipcode}`)
        .then(res => {
          const response = res.data;
          this.setState({ 
              arrData : response,
          });
        }).catch(console.error())

  }

  render(){

      return (
        <div className='App'>
        
          <h1> Zip Code Search</h1>
          <label name="zipcode"> Zip Code:</label>
          <input name="zipcode" placeholder="Try 10016" value={this.state.zipcode} onChange={this.handleChange} onKeyPress={(e)=>{if(e.key === 'Enter') this.componentDidMount()}} />
          
          <div>
               
               {
                 
               this.state.arrData.map((item) =>{
                   
                 return ( <MatchZipcode City={item.City} State={item.State} 
                           Lat={item.Lat} Long={item.Long} EstimatedPopulation={item.EstimatedPopulation} 
                           TotalWages={item.TotalWages} key={item.id} /> 
                         );

               })    

               }
          </div>
          
        </div>
      );
  }

}

export default App;
