import React, { useEffect, useState } from "react";
import { IceCreamCard } from "./IceCreamCard";

const IceCreamContainer = ({ children ,value}) => {

   
    return(
  <ul className="ice_section edit_ice">
  
    {value.map((x)=>{
        return(<IceCreamCard value={x} />)
    })}
  
  </ul>
    )
};

export { IceCreamContainer };





























 // const [value , setValue ] = useState([]);
    // useEffect(() => {
    //     ;(async () => {
    //       const response = await fetch("/api/menu/stock/list");
    //       const res = await response.json();
    //       console.log(res);
    //       setValue(res);
    //       // console.log(response)
    //     })();
    //   }, []);
