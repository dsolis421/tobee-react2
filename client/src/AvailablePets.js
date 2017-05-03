import React from 'react';

const AvailablePets = props => {
  return (
    <div className="available-pet">
      <div>
        <img src={props.petPic} alt={props.petName} />
      </div>
      <div>
        <h3>{props.petName}</h3>
        <p>{props.petDesc}</p>
      </div>
    </div>
  )
}

export default AvailablePets;
