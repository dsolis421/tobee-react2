//attempted to make this an API call and failed miserably.  this code is not in use
import $ from 'jquery';

const petController = {};

petController.listShelters = (request, response, next) => {
  $.getJSON(`http://api.petfinder.com/shelter.find?location=${request.params._zip}&format=json&key=3c73470956892905e562a55f0e113f50&callback=?`).done(response => {
    let shelters = response.petfinder.shelters.shelter;
    console.log(shelters);
    return shelters;
  }).error(err => console.log('listShelters error ' + err));
};

export default petController;