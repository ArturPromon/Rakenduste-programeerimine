import React from "react";
import "./form.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {tokenUpdate, userUpdate} from "../store/actions";
import {toast} from "react-toastify";
import * as services from "../services";

class LoginPage extends React.PureComponent{
    static propTypes = {
        history: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
    };
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
            services.login(this.state)
            .then(this.handleSuccess)
            .catch(err => {
                console.log("Error", err);
                toast.error("Logimine ebaõnnestus!");
            });
    };

    handleSuccess = ({token, user}) => {
        this.props.dispatch(userUpdate(user));
        this.props.history.push(`/users/${user._id}`);;
      };
  
    handleChange = (e) => {
        // console.log("handle change", e.target.name, e.target.value);
        this.setState({
           [e.target.name]: e.target.value,
        });
    };

    render() {
        return(
            <>
                <div><h1 style={{textAlign: "center"}}>Login</h1></div>
                <div className="login-page">
                    <div className="form">
                        <form className="login-form" onSubmit={this.handleSubmit}>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                            <button>login</button>
                            <p className="message">Not registered? <Link to={"/signup"}>Create an account</Link></p>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}
export default connect()(LoginPage); 