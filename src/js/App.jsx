import React from "react";
import Navbar from "./component/Navbar";
import Jumbotron from "./component/Jumbotron";
import Card from "./component/Card";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="container my-3">
          <div className="row card-deck text-center justify-content-evenly">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
