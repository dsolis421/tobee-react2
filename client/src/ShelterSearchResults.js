import React from 'react';

const ShelterSearchResults = props => {
  return (
    <div id="shelter-results">
      {props.returnedShelters.map(shelter => {
        return (
          <div key={shelter.id.$t}>
            <h3 >{shelter.name.$t}</h3>
            <span>See Details</span>
          </div>
        );}
      )}
    </div>
  );
}

export default ShelterSearchResults;
