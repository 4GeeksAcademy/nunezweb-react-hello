import React from "react";

const Card = () => {
  return (
    <div className="card m-3 p-0" style={{ width: "18rem" }}>
      <img
        src="https://via.placeholder.com/500x325"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <a href="#" className="btn btn-primary">
          Find Out More!
        </a>
      </div>
    </div>
  );
};

export default Card;
