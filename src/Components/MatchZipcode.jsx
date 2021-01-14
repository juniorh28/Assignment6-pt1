    import React, {Component} from 'react'
    import './Zipcod.css'



    class MatchZipcode extends Component{
    constructor(props){
        super(props)

    }


    render(){
        return(
            <div  class="contener">
                <p>City : {this.props.City}</p>
                <p>state: {this.props.State}</p>
                <p> Location :({this.props.Lat},{this.props.Long})</p>
                <p>population: {this.props.EstimatedPopulation}</p>
                <p>Total Wages: {this.props.TotalWages}</p> 
                <br/>
                <br/>  
            </div>

        );
    }
    }


    export default MatchZipcode