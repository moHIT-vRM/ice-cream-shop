import React from "react";

const IceCreamimg = ({ iceCreamId }) => {
  // console.log(iceCreamId)
  if(iceCreamId === null){
    return null
  }
  return (
    <img className="all_ice"
          src={`/ice-cream-images/ice-cream-${iceCreamId}.svg`}
          alt="lol"
        />
  );
};



export { IceCreamimg };
