import React from 'react';
import $ from 'jquery';
import AvailablePets from './AvailablePets'

class ShelterDetail extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    this.getShelterPets();
  }

  getShelterPets() {
    let id = this.props.shelterID;
    $.getJSON(`http://api.petfinder.com/shelter.getPets?id=${id}&format=json&key=3c73470956892905e562a55f0e113f50&callback=?`)
      .done(response => {
        let availablepets = response.petfinder.pets.pet;
        console.log('found pets ', availablepets);
        this.setState({
          pets: availablepets
        });
      })
      .fail(err => console.log('getShelterPets error ' + err));
  }

  render() {
    return (
      <div className="shelter-detail">
        <span className="fa fa-reply" onClick={() => this.props.resetResult()}></span>
        <h2>{this.props.shelterName}</h2>
        <h4>{this.props.shelterEmail}</h4>
        <h4>{this.props.shelterPhone}</h4>
        <div>
          <div>
            <img src={`https://maps.googleapis.com/maps/api/staticmap?markers=color:blue|${this.props.shelterLat},${this.props.shelterLong}&zoom=10&scale=1&size=400x200&maptype=roadmap&key=AIzaSyCoz06xfpcSiADgr6oMbvQhrIi-JCaSGC4`}
            alt={this.props.shelterName}></img>
          </div>
          <div>
            {this.state.pets.map(pet => <AvailablePets key={pet.id.$t}
              id={pet.id.$t}
              petName={pet.name.$t}
              petDesc={pet.description.$t}
              petPic={pet.media.photos ? pet.media.photos.photo[0].$t : './logo.svg' } /> )}
          </div>
        </div>
      </div>
    );
  }
}

export default ShelterDetail;
