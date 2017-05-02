import React from 'react';

const ShelterDetail = props => {
  return (
    <div className="shelter-detail">
      <span className="fa fa-reply" onClick={() => props.resetResult()}></span>
      <h2>{props.shelterName}</h2>
      <h4>{props.shelterEmail}</h4>
      <h4>{props.shelterPhone}</h4>
      <img src={`https://maps.googleapis.com/maps/api/staticmap?markers=color:blue|${props.shelterLat},${props.shelterLong}&zoom=10&scale=1&size=400x200&maptype=roadmap&key=AIzaSyCoz06xfpcSiADgr6oMbvQhrIi-JCaSGC4`}
        alt={props.shelterName}></img>
    </div>
  );
}

export default ShelterDetail;
