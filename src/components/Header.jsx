import React from "react";
import {Link} from "react-router-dom";
import {profileIcon} from "../icons";
import {cartIcon} from "../icons";
import "./header.css";
import PropTypes from "prop-types";
import {AuthContext} from "../index.jsx";

const Header = () => {
  return(
    <AuthContext.Consumer>
			{
				(contextValue) => (
					<div className='header'>
						<Link to={"/"}>
							<img className="header__logo" src="/images/tlu_logo.png"/>
						</Link>
						<div className="header__buttons">
							{contextValue.user.email && <WelcomeIcon user={contextValue.user}/>}
							{!contextValue.user.email && <LoginRegisterIcon/>}
							<div className={"header__button"}>
								<img src={cartIcon} style={{width: 30}}/>
								<div className={"header__button-text"}>cartIcon</div>
							</div>
						</div>
					</div>
				)
			}
		</AuthContext.Consumer>
  );
};

// Header.propTypes = {
// 	token: PropTypes.string,
// 	user: PropTypes.object,
// };


const LoginRegisterIcon = () => {
    return(
      <Link className={"header__button"} to={"/login"}>
        <img src={profileIcon} style={{width: 30}}/>
        <div className={"header__button-text"}>Login/<br/>Register</div>
      </Link>
    );
};

const WelcomeIcon = ({user}) => {
    return(
      <Link className={"header__button"} to={`/users/${user._id}`}>
        <img src={profileIcon} style={{width: 30}}/>
        <div className={"header__button-text"}>Welcome, {user.email}</div>
      </Link>
    );
};

WelcomeIcon.propTypes = {
	user: PropTypes.object.isRequired,
};

export default Header;
  