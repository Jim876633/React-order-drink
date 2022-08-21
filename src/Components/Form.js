import React from "react";
import data from "../data";
import Input from "./Input";
import { useGlobalContext } from "./Context";

const Form = () => {
    const { defaultStandard, addProduct } = useGlobalContext();
    return (
        <form>
            {data.standard.map((item, index) => {
                return (
                    <Input
                        key={index}
                        {...item}
                        type={item.type}
                        defaultStandard={defaultStandard[item.category]}
                    />
                );
            })}
            <button
                type="button"
                className="btn btn-primary w-100 my-2 "
                onClick={addProduct}
            >
                加入
            </button>
        </form>
    );
};

export default Form;
