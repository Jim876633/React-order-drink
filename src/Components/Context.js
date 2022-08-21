import React, { useContext, useState } from "react";
import data from "../data";
const AppContext = React.createContext();
const { products } = data;
export const AppProvider = ({ children }) => {
    const [defaultStandard, setDefaultStandard] = useState({
        sugar: "",
        ice: "",
        toppings: [],
    });
    const [selectProduct, setSelectProduct] = useState({
        title: "",
        sugar: "",
        ice: "",
        toppings: [],
        price: 0,
    });
    const [productList, setProductList] = useState([]);
    const selectHandler = (type, value) => {
        if (type === "title") {
            const [product] = products.filter((item) => item.title === value);
            const { title, price } = product;
            setSelectProduct({
                ...selectProduct,
                title: title,
                price: price,
            });
        } else if (type === "toppings") {
            setSelectProduct({
                ...selectProduct,
                toppings: [...selectProduct.toppings, value],
                price: selectProduct.price + 5,
            });
        } else {
            setSelectProduct((prev) => {
                return { ...prev, [type]: value };
            });
        }
    };
    const addProduct = (e) => {
        e.preventDefault();
        if (selectProduct.title === "") {
            return;
        }
        setProductList([...productList, selectProduct]);
        setSelectProduct({
            ...selectProduct,
            title: "",
            toppings: [],
            price: 0,
        });
        setDefaultStandard({});
    };
    const recommendHandler = (id) => {
        const [clickProduct] = products.filter((product) => product.id === id);
        setSelectProduct((prev) => {
            return { ...prev, toppings: [] };
        });
        setDefaultStandard({
            ...defaultStandard,
            ...clickProduct.recommend,
            toppings: [],
        });
    };

    return (
        <AppContext.Provider
            value={{
                defaultStandard,
                selectProduct,
                productList,
                recommendHandler,
                selectHandler,
                addProduct,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
export const useGlobalContext = () => {
    return useContext(AppContext);
};
