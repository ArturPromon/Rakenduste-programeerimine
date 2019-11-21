import React from "react";
import "./form.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


class LoginPage extends React.PureComponent{
    static propTypes = {
        history: PropTypes.object.isRequired,
        onLogin: PropTypes.func.isRequired,
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
        fetch("/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state),
        })
            .then(res => res.json())
            .then(({token, user}) => {
                this.props.onLogin({token, user});
                this.props.history.push(`/users/${user._id}`);
            })
            .catch(err => {
                console.log("Error", err);
            });
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
export default LoginPage;