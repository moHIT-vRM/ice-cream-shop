import React, { Children } from "react";
import { Link } from "react-router-dom";
import { IceCreamimg } from "./IceCreamimg";

const IceCreamCard = ({ Children, iceCreamId, iceCream , value }) => {
  console.log(value);
  return (
    <React.Fragment>
      {/* <ul className="ice_section"> */}
        <div className="card_cont edit_card">
                  <div className="img2">
                    <IceCreamimg iceCreamId={value.id} />
                
                  </div>
                  <div className="text2">
                    <p className="title2">
                      {/* <Link to={`/api/menu/stock/list/${value.id.toString()}`}>
                        {value.name}
                      </Link> */}
                      <Link to={`/menu-items/newlist/${value.id.toString()}`}>
                        {value.name}
                      </Link>
                      {/* {value.name} */}
                    </p>
                    {Children}
                  </div>
                </div>
                {/* </ul> */}

      {/* ````````````````` */}

     
    </React.Fragment>
  );
};

export { IceCreamCard };
