import "../pages/form.css";
import React from "react";
import "../pages/main.css";
import {toast} from "react-toastify";


class ItemForm extends React.PureComponent{
    state = {
        title: "",
        price: "",
        imgSrc: "",
        category: "phones"
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        fetch("/api/v1/items",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state),
        })
            .then(res => {
                toast.success("Uue toode lisamine õnnestunud!");
                console.log(res.status);
            })
            .catch(err => {
                console.log("Error", err);
                toast.error("Uue toode lisamine ebaõnnestunud!");
            });
    };


    render() {
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
                            <input
                                type="number"
                                placeholder="price"
                                name="price"
                                onChange={this.handleChange}
                                value={this.state.price}
                            />
                            <input
                                type="text"
                                placeholder="image URL"
                                name="imgSrc"
                                onChange={this.handleChange}
                                value={this.state.imgSrc}
                            />
                            <button>Create new product</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default ItemForm;