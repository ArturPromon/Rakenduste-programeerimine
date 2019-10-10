import React from "react";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";

class HomePage extends React.PureComponent{

constructor(props){
    super(props);
    this.state={
      items: [],
      sellectedCategory: "phones",
    };
  }

componentDidMount(){
  this.fetchItems();
}

fetchItems = () => {
  fetch("/api/items")
  .then(res =>{
    console.log("res", res);
    return res.json();
  })
  .then(items => {
    console.log("items", items);
    this.setState({
      items
    });
  }) 
  .catch(err =>{
    console.log("err", err);
  });
};

handleDropDown(event) {
  console.log(event.target.value);
  this.setState({
    sellectedCategory: event.target.value
  });
}

getVisibleItems = ()=> {
  return this.state.items.filter(item=> item.category ===this.state.sellectedCategory);
};

  render(){
    console.log("App state", this.state);
    return(
      <>
        <Header />
        <select onChange ={this.handleDropDown.bind(this)}>
          <option value="phones">Phones</option>
          <option value="laptops">Laptops</option>
        </select> 
        <ItemList  items ={this.getVisibleItems()}/>
      </>
    );
  }
}

export default HomePage;
