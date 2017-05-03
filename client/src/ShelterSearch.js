import React, { Component } from 'react';
import $ from 'jquery';
import ShelterSearchResults from './ShelterSearchResults';
import ShelterDetail from './ShelterDetail';

class ShelterSearch extends Component {
  constructor() {
    super();

    this.greetingIterator = 1;

    this.state = {
      shelterSearchZip: '',
      returnedShelters: [],
      greeting: 'pet',
      showSearchResults: false,
      showShelterDetail: false,
      shelterDetail: {}
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
      shelterSearchZip: e.target.value
    });
  }

  getSheltersByZip() {
    let zip = this.state.shelterSearchZip;
    $.getJSON(`http://api.petfinder.com/shelter.find?location=${zip}&format=json&key=3c73470956892905e562a55f0e113f50&callback=?`)
      .done(response => {
        let shelters = response.petfinder.shelters.shelter;
        console.log('found shelters in ', zip);
        this.setState({
          showShelterDetail: false,
          showSearchResults: true,
          returnedShelters: shelters
        });
      })
      .fail(err => console.log('getSheltersByZip error ' + err));
  }

  getShelterDetail(id) {
    $.getJSON(`http://api.petfinder.com/shelter.get?id=${id}&format=json&key=3c73470956892905e562a55f0e113f50&callback=?`)
    .done(response => {
      let shelterdetail = response.petfinder.shelter;
      console.log('found shelter ', shelterdetail);
      this.setState({
        showSearchResults: false,
        showShelterDetail: true,
        shelterDetail: shelterdetail
      });
    })
    .fail(err => console.log('getShelterDetail ', err));
  }

  render() {
    return (
      <div>
        <div id="shelter-search-wrapper">
          <div id="sheltersearch">
            <h4>Find a Shelter</h4>
            <input id="shelterzip"
              placeholder="Enter Zip Code"
              maxLength="5"
              onChange={event => this.handleSearchChange(event)}></input>
            <div id="sheltersearchgo" onClick={() => this.getSheltersByZip()}>
              Search Shelters <span className="fa fa-search"></span>
            </div>
            <span>Powered by <a href="www.petfinder.com" target="blank">Petfinder</a></span>
          </div>
        </div>
        <div id="shelter-results">
          {this.state.showSearchResults ?
            this.state.returnedShelters.map(shelter => {
              return <ShelterSearchResults key={shelter.id.$t} id={shelter.id.$t}
                shelterName={shelter.name.$t}
                showDetail={this.getShelterDetail.bind(this)} />;
            }) : null}
          {this.state.showShelterDetail ?
            <ShelterDetail shelterID={this.state.shelterDetail.id.$t} 
              shelterName={this.state.shelterDetail.name.$t}
              shelterEmail={this.state.shelterDetail.email.$t}
              shelterPhone={this.state.shelterDetail.phone.$t}
              shelterCity={this.state.shelterDetail.city.$t}
              shelterState={this.state.shelterDetail.state.$t}
              shelterLong={this.state.shelterDetail.longitude.$t}
              shelterLat={this.state.shelterDetail.latitude.$t}
              resetResult={this.getSheltersByZip.bind(this)}/> : null}
        </div>
      </div>
    );
  }
}

export default ShelterSearch;
