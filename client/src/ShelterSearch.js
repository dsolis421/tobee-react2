import React, { Component } from 'react';
import $ from 'jquery';
import ShelterSearchResults from './ShelterSearchResults';

class ShelterSearch extends Component {
  constructor() {
    super();

    this.greetingIterator = 1;

    this.state = {
      shelterSearchText: '',
      returnedShelters: [],
      greeting: 'pet'
    };
  }

  componentDidMount() {
    setInterval(this.cycleGreeting.bind(this),5000);
  }

  cycleGreeting() {
      const greet = ["pet","friend","family member", "cuddle buddy"];
      let i = this.greetingIterator;
      this.setState({
        greeting: greet[i]
      });
      if(i === 3) {
        this.greetingIterator = 0;
      } else {
        this.greetingIterator += 1;
      }
  }

  handleSearchChange(e) {
    this.setState({
      shelterSearchText: e.target.value
    });
  }

  getSheltersByZip(zip) {
    $.getJSON(`http://api.petfinder.com/shelter.find?location=${zip}&format=json&key=3c73470956892905e562a55f0e113f50&callback=?`)
      .done(response => {
        let shelters = response.petfinder.shelters.shelter;
        console.log(shelters);
        this.setState({
          returnedShelters: shelters
        });
      })
      .fail(err => console.log('getSheltersByZip error ' + err));
  }

  render() {
    return (
      <div>
        <div id="shelter-search-wrapper">
          <div id="sheltersearch">
            <h2>Let us help you find a {this.state.greeting}</h2>
            <input id="shelterzip"
              placeholder="Enter Zip Code"
              maxLength="5"
              onChange={event => this.handleSearchChange(event)}></input>
            <div id="sheltersearchgo" onClick={() => this.getSheltersByZip(this.state.shelterSearchText)}>
              Search Shelters <span className="fa fa-search"></span>
            </div>
            <span>Powered by <a href="www.petfinder.com" target="blank">Petfinder</a></span>
          </div>
        </div>
        <ShelterSearchResults returnedShelters={this.state.returnedShelters} />
      </div>
    );
  }
}

export default ShelterSearch;
