import React from 'react';

const ShelterSearchResults = props => {
  return (
    <div id="shelter-results">
      {props.returnedShelters.map(shelter => {
        return (
          <div className="shelters" key={shelter.id.$t} id={shelter.id.$t}>
            <h3>{shelter.name.$t}</h3>
            <div>See Details</div>
          </div>
        );}
      )}
    </div>
  );
}

export default ShelterSearchResults;
