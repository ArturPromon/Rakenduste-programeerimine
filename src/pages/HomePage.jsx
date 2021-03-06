import React from "react";
import ItemsList from "../components/ItemsList.jsx";
import Checkbox from "../components/Checkbox.jsx";
import PropTypes from "prop-types";
import "./homepage.css";
import SortDropdown from "../components/SortDropdown.jsx";
import {connect} from "react-redux";
import {getItems} from "../store/actions.js";
import {ItemProps} from "./CartPage.jsx";
import "../components/header.css";
import * as selectors from "../store/selector.js";


class HomePage extends React.PureComponent {
  static propTypes = {
      dispatch: PropTypes.func.isRequired,
      items: PropTypes.arrayOf(PropTypes.shape(ItemProps))
  };

constructor(props){
    super(props);
    this.state={
      sortDirection: -1,
      allCategories: ["phones", "laptops"],
      selectedCategories: ["phones"],
    };
  }

componentDidMount(){
  this.props.dispatch(getItems());
}



handleFilterSelect = (event) => {
  const categoryName = event.target.name;
  if(this.isSelected(categoryName)){
      return this.unselectCategory(categoryName);
  }
  this.selectCategory(categoryName);
    };

    selectCategory = (categoryName) => {
        this.setState({
            selectedCategories: this.state.selectedCategories.concat([categoryName])
        });
    };

    unselectCategory = (categoryName) => {
        const newArr = this.state.selectedCategories.filter(cn => cn !== categoryName);
        this.setState({
            selectedCategories: newArr
        });
};
getVisibleItems = ()=> {
  return this.props.items
  .filter(item=> this.isSelected(item.category))
  .sort((a, b) => {
    switch (this.state.sortDirection) {
      case -1:
          return b.price - a.price;
      case 1:
          return a.price - b.price;
  }
  });
};

isSelected = (name) => this.state.selectedCategories.indexOf(name) >= 0;

handleSortDropdown= (sortDirection) => {
  this.setState({
    sortDirection: sortDirection,
  });
};

  render(){
    const items = this.getVisibleItems();
    return(
      <>
      <div className ={"header_hero"}>
        <div className = {"header-text"}><h1>Tom and Jerry</h1></div>
      </div>
        <div className={"body-wrapper"}>
        <div className={"filters-wrapper"}>
        <ItemFilters
          allCategories={this.state.allCategories}
          handleDropDown={this.handleFilterSelect}
          isSelected={this.isSelected}
        />
        </div>
        <div className = {"items-header-wrapper"}>
          <div>
            Items found {items.length} {this.state.selectedCategories.join(", ")}
          </div>
          <SortDropdown
            direction={this.state.sortDirection}
            onChange={this.handleSortDropdown}
          />
        </div>
        <ItemsList  items ={items}/>
        </div>

      </>
    );
  }
}
const ItemFilters = ({allCategories, handleDropDown, isSelected}) => {
  return(
    <>
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
    </>
  );
};
ItemFilters.propTypes = {
  allCategories: PropTypes.array.isReqired,
  handleDropDown: PropTypes.func.isReqired,
  isSelected: PropTypes.func.isReqired,
};
const mapStateToProps = (store) => {
  return {
    items: selectors.getItems(store),
  };
};

export default connect(mapStateToProps)(HomePage); 