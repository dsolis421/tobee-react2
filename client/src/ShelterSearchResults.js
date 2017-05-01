import React from 'react';

const ShelterSearchResults = props => {
  return (
          <div className="shelters"
            id={props.id} onClick={() => props.showDetail(props.id)}>
            <h4>{props.shelterName}</h4>
            <div>See Details</div>
          </div>
  );
}

export default ShelterSearchResults;
