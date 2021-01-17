import React, { Component } from 'react';

class MatchZipcode extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <p>
          <span className='label'>City: </span> {this.props.City}
        </p>
        <p>
          <span className='label'>State: </span>
          {this.props.State}
        </p>
        <p>
          {' '}
          <span className='label'>Location: </span>({this.props.Lat},
          {this.props.Long})
        </p>
        <p>
          <span className='label'>Population: </span>
          {this.props.EstimatedPopulation}
        </p>
        <p>
          <span className='label'>Total Wages: </span>
          {this.props.TotalWages}
        </p>
        <br />
        <br />
      </div>
    );
  }
}

export default MatchZipcode;
