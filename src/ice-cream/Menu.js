import React, { useState, useEffect } from "react";
// import { getMenu } from "../data/iceCreamData";
import { IceCreamimg } from "./IceCreamimg";
import { Link, useNavigate } from "react-router-dom";
import { IceCreamAdd } from "./IceCreamAdd";

// import { json } from "body-parser";
// import { response } from "express";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const navigate = useNavigate();
  
  //   useEffect(() => {
  //     getMenu().then((menuData) => {
  //       setMenu(menuData);
  //       //   setMenu('');
  //     });
  //   }, []);

  // `````````````````````````````````````````fetch
  // useEffect(()=>{
  //     const rep= async ()=>{
  //         const tpp= await fetch('/api/menu')
  //         const rol=await tpp.json();
  //         // console.log(rol)
  //         setMenu(rol);

  //     }
  //     rep();

  // } ,[])

  useEffect(() => {
    ;(async () => {
      const response = await fetch("/api/menu");
      const res = await response.json();
      console.log(res);
      // console.log(response)

      setMenu(res);
    })();
  }, []);
  //

  //   `````````````````````````````````````````````````
 


//   ``````````````````````````



  //   console.log(menuData)
  //   console.log(menu)

//   const onItemClick = (to) => {};

  return (
    <main>
      <h2 className="main_menu">Try Out Our New InSanE Flavour!!</h2>

      {menu.length > 0 ? (
        <ul className="ice_section">
          {menu.map(
            ({ id, iceCream, price, description, inStock, quantity }) => (
              <li key={id.toString()}>
                {/* <div className="ice_section"> */}
                {/* <div className="card_cont" onClick={()=>{
                onItemClick(`/menu/menu-items/${id.string()}`)
            }}> */}

                <div className="card_cont">
                  <div className="img">
                    <IceCreamimg iceCreamId={iceCream.id} />
                  </div>
                  <div className="card_text">
                    <p className="title">
                      <Link to={`/menu-items/${id.toString()}`}>
                        {iceCream.name}
                      </Link>
                    </p>
                    <p className={`stock${inStock ? "" : " out"}`} id="stock">
                      {`$${price.toFixed(2)}`}-{" "}
                      {inStock
                        ? `${quantity} in stock`
                        : `Currently out of stock`}
                    </p>
                    {/* <span className="price">
                  {`$${price.toFixed(2)}`}-
                </span>
                <span className={`stock${inStock ? "" : " out"}`}>
                {" "}
                  {inStock ? `${quantity} in stock` : `Currently out of stock`}
                </span> */}

                    <p className="des">{description}</p>
                  </div>
                </div>
                {/* </div> */}
              </li>
            )
          )}
        </ul>
      ) : (
        <p>Your Menu Is Empty!!</p>
      )}
    </main>
    
  );
};



export { Menu };

// //

//       /* 2222222222222222222222222222222222222222 */

//       /* <div className="ice_section">
//         <div className="card_cont">
//           <div className="img">
//             image section<img src=""></img>
//           </div>
//           <div className="card_text">

//           <p className="title">Castle in the sky</p>
//           <p className="price">price</p>
//           <p className="des">description</p>
//           </div>
//         </div>
//         <div className="card_cont">
//           <div className="img">
//             image section<img src=""></img>
//           </div>
//           <div className="card_text">

//           <p className="title">Castle in the sky</p>
//           <p className="price">price</p>
//           <p className="des">description</p>
//           </div>
//         </div>
//         <div className="card_cont">
//           <div className="img">
//             image section<img src=""></img>
//           </div>
//           <div className="card_text">

//           <p className="title">Castle in the sky</p>
//           <p className="price">price</p>
//           <p className="des">description</p>
//           </div>
//         </div>
//         <div className="card_cont">
//           <div className="img">
//             image section<img src=""></img>
//           </div>
//           <div className="card_text">

//           <p className="title">Castle in the sky</p>
//           <p className="price">price</p>
//           <p className="des">description</p>
//           </div>
//         </div>
//         <div className="card_cont">
//           <div className="img">
//             image section<img src=""></img>
//           </div>
//           <div className="card_text">

//           <p className="title">Castle in the sky</p>
//           <p className="price">price</p>
//           <p className="des">description</p>
//           </div>
//         </div>
//       </div>



