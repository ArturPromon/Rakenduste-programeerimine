import React from "react";
import {Link} from "react-router-dom";
import {profileIcon} from "../icons";
import {cartIcon} from "../icons";
import "./header.css";
import PropTypes from "prop-types";
import {ItemProps} from "../pages/CartPage.jsx";
import {connect} from "react-redux";
import {UserPropTypes} from "../store/reducer";
import * as selectors from "../store/selector";

const Header = ({user, cart}) => {
  return(
<div className='header'>
			<Link to={"/"}>
				<img className="header__logo" src="static/images/tlu_logo.png"/>
			</Link>
			<div className="header__buttons">
				{user && <WelcomeIcon user={user}/>}
				{!user && <LoginRegisterIcon/>}
				<Link to ={"/checkout/cart"} className={"header__button"}>
					<img src={cartIcon} style={{width: 30}}/>
					<div className={"header__button-text"}>Shopcart</div>
					<Badge>{cart.length}</Badge>
				</Link>
			</div>
		</div>	
  );
};

<div>
<img className="hero" src="static/images/hero.png"/>
</div>

Header.propTypes = {
	token: PropTypes.string,
	user: PropTypes.shape(UserPropTypes),
	cart: PropTypes.arrayOf(ItemProps).isRequired,
};

const Badge = ({children}) => {
	if(children === 0) return null;
	return(
		<span className={"badge"}>
			{children}
		</span>
	);
};

Badge.propTypes = {
	children: PropTypes.number.isRequired
};

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
	user: PropTypes.shape(UserPropTypes),
};

const mapStateToProps = (store) => {
	return {
		cart: selectors.getCart(store),
		user: selectors.getUser(store),
	};
};
export default connect(mapStateToProps)(Header);
// export default Header; 
  