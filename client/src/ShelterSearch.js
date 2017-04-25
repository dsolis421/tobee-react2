import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import ShelterSearchResults from './ShelterSearchResults';

class ShelterSearch extends Component {
  constructor() {
    super()

    this.state = {
      shelterSearchText: '',
      returnedShelters: []
    }
  }

  handleSearchChange(e) {
    this.setState({
      shelterSearchText: e.target.value
    });
  }

  getSheltersByZip(zip) {
    $.getJSON(`http://api.petfinder.com/shelter.find?location=${zip}&format=json&key=3c73470956892905e562a55f0e113f50&callback=?`)
    .done(petApiData => {
      let shelters = petApiData.petfinder.shelters.shelter;
      console.log(shelters);
      this.setState({
        returnedShelters: shelters
      })
    });
    /*.error(err => console.log('getSheltersByZip error ' + err));*/
  }

  render() {
    return (
      <div>
        <input id="sheltersearch"
          placeholder="Enter Zip Code"
          maxLength="5"
          onChange={event => this.handleSearchChange(event)}></input>
        <span id="sheltersearchgo"
          className="fa fa-search"
          onClick={() => this.getSheltersByZip(this.state.shelterSearchText)}></span>
        <span>Powered by <a href="www.petfinder.com" target="blank">Petfinder</a></span>
        <ShelterSearchResults returnedShelters={this.state.returnedShelters} />
      </div>
    );
  }
}

export default ShelterSearch;
