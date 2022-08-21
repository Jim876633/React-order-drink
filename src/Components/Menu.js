import React from "react";
import Product from "./Product";
import data from "../data";
const Menu = () => {
    return (
        <div className="col d-flex flex-wrap gap-2 mb-3 mb-lg-0 align-items-center align-content-between">
            {data.products.map((product, index) => {
                return <Product key={index} {...product} />;
            })}
        </div>
    );
};

export default Menu;
