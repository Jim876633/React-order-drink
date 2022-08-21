import React from "react";

const OutputItem = ({ item }) => {
    const { title, sugar, ice, toppings, price } = item;
    return (
        <div className="d-flex  align-items-center justify-content-between border-bottom border-primary border-1 py-2">
            <div>
                {title}-{sugar}
                {ice}
                <div>
                    配料 : {toppings.length == 0 ? "無" : toppings.join("、")}
                </div>
            </div>
            <div>${price}</div>
        </div>
    );
};

export default OutputItem;
