import React from "react";
import "./App.css";
import { Footer } from "./structure/Footer";
import { Header } from "./structure/Header";
import { Menu } from "./ice-cream/Menu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { EditiceCream } from "./ice-cream/EditiceCream";
import IceCreams from "./ice-cream/IceCreams";
import IceCreamAdd from './ice-cream/IceCreamAdd'


// import { EditiceCream } from "./ice-cream/EditiceCream";
// import { NavLink } from "react-router-dom";

// if some one type invalid url then they automatically redirect to the home page.

const App = () => {
  return (
    <React.Fragment>
      {/* <Menu /> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Menu />} exact />
          <Route path="/ice-creams" element={<IceCreams />} />
          <Route path={`/menu-items/:id`} element={<EditiceCream />} exact />
          <Route path={`/menu-items/newlist/:id`} element={<IceCreamAdd />} exact />
          {/* <Redirect to="/" /> */}
          {/* here in the previous version of the react router we are using the redirect component but now in the react router version we are using the navigate */}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
};

export { App };
