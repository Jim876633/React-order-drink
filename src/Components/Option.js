import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "./Context";
const Option = ({ type, category, id, option, defaultStandard }) => {
    const { selectHandler, selectProduct } = useGlobalContext();
    const inputRef = useRef();
    const defaultCheck = defaultStandard ? defaultStandard === option : false;
    useEffect(() => {
        inputRef.current.checked = defaultCheck;
        if (defaultCheck) {
            selectHandler(category, inputRef.current.value);
        }
    }, [defaultStandard]);
    const checkedHandler = (e) => {
        selectHandler(category, e.target.value);
    };
    return (
        <div className="form-check form-check-inline py-1 ">
            <input
                className="form-check-input"
                type={type}
                name={category}
                id={id}
                value={option}
                onChange={checkedHandler}
                ref={inputRef}
            />
            <label className="form-check-label" htmlFor={id}>
                {option}
            </label>
        </div>
    );
};

export default Option;
