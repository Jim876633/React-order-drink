import React from "react";
import { useGlobalContext } from "./Context";
const Product = ({ id, title, recommend, price }) => {
    const { recommendHandler, selectHandler, selectProduct } =
        useGlobalContext();
    const { ice, sugar } = recommend;
    return (
        <button
            className={`btn btn-outline-primary  d-flex col-5 flex-fill justify-content-between align-items-center ${
                title === selectProduct.title && "bg-primary text-light"
            }`}
            onClick={() => {
                selectHandler("title", title);
                recommendHandler(id);
            }}
        >
            <div className="text-start">
                <h2 className="fs-3">{title}</h2>
                <p className="m-0 fst-italic -">
                    推薦 : {ice}
                    {sugar}
                </p>
            </div>
            <div>${price}</div>
        </button>
    );
};

export default Product;
