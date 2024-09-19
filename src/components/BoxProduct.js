import React from 'react';

const BoxProduct = (props) => {
  return (
    <div>
      <div className={`card ${props.className}`}>
        <img
          src={props.image}
          alt="Denim Jeans"
          style={{ width: "200px", height: "200px" }}
        ></img>
        <h1>{props.name || "null"}</h1>
        <p className="price">{props.price}</p>
        <p>{props.content}</p>
        <p>
          <button>{props.butname}</button>
        </p>
      </div>
    </div>
  );
};

export default BoxProduct;
