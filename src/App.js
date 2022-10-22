import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

// import Routes from "./navigation/Routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/home/home";
library.add(fab, faChevronRight);

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
