/* eslint-disable react/prop-types */
import React from "react";

const Card = props => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="Photo1" src={`https://robohash.org/${props.id}?200x200`} />
      <div>
        <h1 className="i">{props.name}</h1>
        <p className="underline">{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
