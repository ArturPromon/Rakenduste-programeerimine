import React from "react";
import PropTypes from "prop-types";
import {UserPropTypes} from "../store/reducer";
import {connect} from "react-redux";
import FancyButton from "../components/FancyButton.jsx";
import {tokenUpdate, userUpdate} from "../store/actions";
import "./main.css";
import protectedRedirect from "../components/protectedRedirect.jsx";
import * as selectors from "../store/selector";
import ItemForm from "../components/ItemForm.jsx";


class UserPage extends React.PureComponent{
    static propTypes = {
        user: PropTypes.shape(UserPropTypes),
        dispatch: PropTypes.func.isRequired,
    };

    handleLogout = () => {
        this.props.dispatch(userUpdate(null));
        this.props.dispatch(tokenUpdate(null));
    };
    render() {
        return(
            <>
            <div className={"itemContainer"}>
                <div className={"field"}>
                    {this.props.user.email}<br/>
                    {this.props.user.createdAt}
                </div>
                <FancyButton onClick={this.handleLogout}>Logi välja</FancyButton>
            </div>
            <div>
                <ItemForm/>
            </div>
            </>
        );
    }
}
const mapStateToProps = (store) => {
    return {
        user: selectors.getUser(store),
    };
  };
  
  export default connect(mapStateToProps)(protectedRedirect(UserPage));