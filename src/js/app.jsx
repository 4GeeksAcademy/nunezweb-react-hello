import React from "react";
import Navbar from "./component/navbar";
import Jumbotron from "./component/jumbotron";
import Card from "./component/card";
import Footer from "./component/footer";

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
