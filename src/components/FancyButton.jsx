import React from "react";
import PropTypes from "prop-types";
import {IoMdArrowDropright} from "react-icons/io";
import "./fancybutton.css";

const FancyButton = ({children}) => {
    return (
        <div className={"submit-button"}>
            <div>
                {children}
            </div>
            <IoMdArrowDropright/>
        </div>
    );
};

FancyButton.propTypes = {
    children: PropTypes.string.isRequired
};

export default FancyButton; 