import React from "react";
import { Data } from "../Data";
import BoxProduct from "./BoxProduct";

const BoxList = (props) => {
  return (
    <div>
      {props.children}
      {Data.map((item, index) => {
        let newClass = "";
        if (index === 1) newClass = "abc";
        return (
          <BoxProduct
            key={item.id}
            name={item.name}
            image={item.image}
            content={item.content}
            butname={item.butname}
            price={item.price}
            className={newClass}
          ></BoxProduct>
        );
      })}
    </div>
  );
};

export default BoxList;
