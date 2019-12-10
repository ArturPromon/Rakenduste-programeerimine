import React from "react";
import PropTypes from "prop-types";
import {IoMdArrowDropright} from "react-icons/io";
import "./fancybutton.css";

const FancyButton = ({children, onClick}) => {
    return (
        <div className={"submit-button"} onClick={onClick}>
            <div>
                {children}
            </div>
            <IoMdArrowDropright/>
        </div>
    );
};

FancyButton.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default FancyButton; 