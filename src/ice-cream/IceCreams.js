import React, { useEffect, useState } from "react";
import { IceCreamCard } from "./IceCreamCard";
import { IceCreamContainer } from "./IceCreamContainer";
// import { IceCreamContainer } from "./IceCreamContainer";

const IceCreams = () => {
  // const [newStock, setNewStock] = useState();

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("/api/menu/stock/list");
  //     const res = await response.json();
  //     setNewStock(res);

  //     // return res.sort((a, b) => {
  //     //   if (a.name < b.name) {
  //     //     return -1;
  //     //   }
  //     //   if (a.name > b.name) {
  //     //     return 1;
  //     //   }
  //     //   return 0;
  //     }); // console.log(response);
  //     // console.log(res);
  //   })();
  // });


  // ``````````````````````````````````

    const [value , setValue ] = useState([]);
    useEffect(() => {
        ;(async () => {
          const response = await fetch("/api/menu/stock/list");
          const res = await response.json();
          console.log(res);
          setValue(res);
          // console.log(response)
        })();
      }, []);

  

  return (
    <React.Fragment>
      <div className="menu_start"> Choose Your Poison and Enjoy!!
      
      </div>;
         <IceCreamContainer value={value} />
      
    </React.Fragment>
  );
};

export default IceCreams;
