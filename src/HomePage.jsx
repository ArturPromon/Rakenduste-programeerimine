import React from "react";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import Checkbox from "./Checkbox.jsx";
import PropTypes from "prop-types";
import "./homepage.css";

class HomePage extends React.PureComponent{

constructor(props){
    super(props);
    this.state={
      items: [],
      allCategories: ["phones", "laptops"],
      selectedCategories: ["phones"],
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

handleDropDown = (event) => {
  if(this.isSelected(event.target.name)){
    const clone = this.state.selectedCategories.slice();
    const index = this.state.selectedCategories.indexOf(event.target.name);
    clone.splice(index, 1);
    this.setState({
      selectedCategories: clone
    });
  }
  else{
    this.setState({
      selectedCategories: this.state.selectedCategories.concat([event.target.name])
    })
  }
};
getVisibleItems = ()=> {
  return this.state.items.filter(item=> this.isSelected(item.category));
};

isSelected = (name) => this.state.selectedCategories.indexOf(name) >= 0;

  render(){
    console.log("App state", this.state);
    return(
      <>
        <Header />
        <ItemFilters
        allCategories={this.state.allCategories}
        handleDropDown={this.handleDropDown}
        isSelected={this.isSelected}
        />
        <ItemList  items ={this.getVisibleItems()}/>
      </>
    );
  }
}

const ItemFilters = ({allCategories, handleDropDown, isSelected}) => {
  return(
    <div className = {"itemFilters-wrapper"}>
      {
        allCategories.map(categoryName => {
          return(
            <Checkbox
            key={categoryName}
            name ={categoryName}
            onChange={handleDropDown}
            checked = {isSelected(categoryName)}
            />
          );
        })
      }
    </div>
  );
};

ItemFilters.propTypes = {
  allCategories: PropTypes.array.isReqired,
  handleDropDown: PropTypes.func.isReqired,
  isSelected: PropTypes.func.isReqired,
}

export default HomePage;
