import "../pages/form.css";
import React from "react";
import "../pages/main.css";
import {toast} from "react-toastify";


class TitleForm extends React.PureComponent{
    state = {
        title: ""
    };

    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (event) => {
        fetch(`/api/v1/items/${this.props.props.match.params.itemId}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state),
        })
            .then(res => {
                toast.success("Uue title lisamine õnnestunud!");
                console.log(res.status);
                
            })
            .catch(err => {
                console.log("Error", err);
                toast.error("Uue title lisamine ebaõnnestunud!");
            });
    };


    render() {
        console.log(this.props.props.match.params.itemId, "title form");
        return(
            <div className={"itemContainer"}>
                <div className="login-page">
                    <div className="form">
                        <form className="register-form" onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                placeholder="product title"
                                name="title"
                                onChange={this.handleChange}
                                value={this.state.title}
                            />
                            <button>Rechange title</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default TitleForm;