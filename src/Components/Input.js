import React from "react";
import Option from "./Option";

const Input = ({ category, title, options, type, defaultStandard }) => {
    return (
        <div className=" d-flex justify-content-start flex-wrap " id={category}>
            <span className="d-inlin-block me-3 py-1">{title} : </span>
            {options.map((option, index) => {
                const id = `${category}-${index}`;
                return (
                    <Option
                        key={index}
                        type={type}
                        id={id}
                        option={option}
                        defaultStandard={defaultStandard}
                        category={category}
                    />
                );
            })}
            {category === "toppings" && (
                <p className="d-inlin-block me-3 py-1">( $5 )</p>
            )}
        </div>
    );
};

export default Input;
