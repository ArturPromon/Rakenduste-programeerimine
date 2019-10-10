import React from "react";
import {phones, laptops} from "./mydatabase.js";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";

const PHONES = "phones";
const LAPTOPS = "laptops";


class HomePage extends React.Component{

constructor(props){
    super(props);
    this.state={
      items: phones,
    };
  }

   handleChange(event) {
    console.log(event.target.value);
    console.log(this.state);
    switch(event.target.value) {
      case PHONES:{
        console.log("phones", this);
        this.setState({
          items: phones,
        });
        break;
      }
      case LAPTOPS:{
        console.log("laptops");
        this.setState({
          items: laptops,
        });
        break;
      }
    }
  }

  render(){
    console.log("App state", this.state);
    return(
      <>
        <Header />
        <select onChange ={this.handleChange.bind(this)}>
          <option value={PHONES}>Phones</option>
          <option value={LAPTOPS}>Laptops</option>
        </select> 
        <ItemList  items ={this.state.items}/>
      </>
    );
  }
}

export default HomePage;
