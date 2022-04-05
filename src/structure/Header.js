import React from "react";
import iceCreamImg from "../assets/img/insane-ice-cream.svg";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="heading">
            <img  className="head_img" src={iceCreamImg} alt="ice error" />
          <h1>
            INSANE ICE-CREAM{" "}
          </h1>
        </div>

        <div className="add_section">
          <div className="main_inp1">
            <NavLink to="/"  className={(isActive)=>(isActive? 'active_cla': '')}>Menu</NavLink></div>
          <div className="main_inp2">
        
          <NavLink to="/ice-creams"  className={(isActive)=>(isActive? 'active_cla2': '')}>Add Your Favourite IceCream</NavLink>
          </div>
        </div>
        <nav>
          {/* <NavLink to="/"  className={isActive =>"" + (!isActive ? " " : "active_cla")}>Navlink</NavLink> */}
          {/* <NavLink to="/"  className={(isActive)=>(isActive? 'active_cla': '')}>Navlink</NavLink> */}
        </nav>
      </header>
    </React.Fragment>
  );
};

export { Header };
