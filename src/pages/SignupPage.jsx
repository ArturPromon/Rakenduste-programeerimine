import React from "react";
import "./form.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {toast} from "react-toastify";
import * as services from "../services";

class SignupPage extends React.PureComponent{
    static propTypes = {
        history: PropTypes.object.isRequired,
    };

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            usedEmail: []
        };
    }

    componentDidMount() {
        this.getEmail();
    }

    getEmail = () => {
        fetch("/api/v1/users/")
            .then(accounts => accounts.json())
            .then(users => {
                this.setState({
                    usedEmail: users.map(user => user.email)
                });
            })
    }; 

    handleSubmit = (event) => {
        event.preventDefault();
        services.signup(this.state)
            .then(() => {
                this.props.history.push("/login");
                toast.success("Registreerumine edukas!");
            })
            .catch(err => {
                console.log("Error", err);
                toast.error("Registreerimine ebaõnnestus!");
            });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return(
            <>
                <div><h1 style={{textAlign: "center"}}>Register page</h1></div>
                <div className="login-page">
                    <div className="form">
                        <form className="register-form" onSubmit={this.handleSubmit}>
                            <input
                                type="email"
                                placeholder="email address"
                                name={"email"}
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
                            <button>create</button>
                            <p className="message">Already registered? <Link to={"/login"}>Sign In</Link></p>
                            <p></p>
                            <div>
                                Emails already used:
                            </div>
                            <p></p>
                            <div>
                                {this.state.usedEmail.map((email) => (
                                <p>{email}</p>
                                ))}
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}
export default SignupPage;