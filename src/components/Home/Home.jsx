import React from "react";
import Footer from "./Footer/Footer";
import Services from "./AppServices/Services";
import Header from "./Header/Header";
import Topbar from "./Navigation/Topbar";
import Menubar from "./Navigation/Menubar";
import Submenu from "./Navigation/Submenu";
import Offerbar from "./Navigation/Offerbar";

const Home = () => {
  return (
    <>
      <Topbar />
      <Menubar/>
      <Submenu/>
      <Offerbar/>
      <Header />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
