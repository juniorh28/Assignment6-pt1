import './styles/app.css';
import React, { Component } from 'react';
import MatchZipcode from './components/MatchZipcode';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      arrData: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.getZipCode = this.getZipCode.bind(this);
  }

  handleChange(e) {
    this.setState({
      zipcode: e.target.value,
    });
  }

  getZipCode() {
    axios
      .get(`https://ctp-zip-api.herokuapp.com/zip/${this.state.zipcode}`)
      .then((res) => {
        const response = res.data;
        this.setState({
          arrData: response,
        });
      })
      .catch(console.error());
  }

  render() {
    return (
      <div className='App'>
        <div className='base-input'>
          <h1> Zip Code Search</h1>
          <div id='zip-search-field'>
            <label id='zipcode' name='zipcode'>
              {' '}
              Zip Code:
            </label>
            <input
              name='zipcode'
              placeholder='e.g. 10016'
              value={this.state.zipcode}
              onChange={this.handleChange}
              onKeyPress={(e) => {
                if (e.key === 'Enter') this.getZipCode();
              }}
            />
          </div>
        </div>

        <div>
          {this.state.arrData.map((item) => {
            return (
              <MatchZipcode
                City={item.City}
                State={item.State}
                Lat={item.Lat}
                Long={item.Long}
                EstimatedPopulation={item.EstimatedPopulation}
                TotalWages={item.TotalWages}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
