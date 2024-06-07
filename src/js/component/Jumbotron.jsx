import React from "react";

const Jumbotron = () => {
  return (
    <div className="container-flex bg-light p-5">
      <h1 className="display-4">A Warm Welcome</h1>
      <p className="lead">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <a className="btn btn-primary btn-lg" href="#">
        Call to action!
      </a>
    </div>
  );
};

export default Jumbotron;
