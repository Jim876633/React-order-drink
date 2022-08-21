import React from "react";
import { useGlobalContext } from "./Context";
import OutputItem from "./OutputItem";
const Output = () => {
    const { productList } = useGlobalContext();
    const totalPrice = productList.reduce((total, item) => {
        return total + item.price;
    }, 0);
    return (
        <div className="h-75 bg-light bg-opacity-75  overflow-auto p-3 rounded-3">
            {productList.map((item, index) => (
                <OutputItem key={index} item={item} />
            ))}
            <div className="py-3 d-flex justify-content-between ">
                <span className="fs-4 fst-italic">小計 :</span>
                <span className="fs-4 fst-italic">$ {totalPrice}</span>
            </div>
        </div>
    );
};

export default Output;
