import React from "react";
import PropTypes from "prop-types";
import "./itempage.css";
import FancyButton from "../components/FancyButton.jsx";
import {connect} from "react-redux";
import {addItem} from "../store/actions.js";

class ItemPage extends React.PureComponent{
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
};

  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
   this.fetchItem();
  }

  fetchItem = () =>{
    fetch(`/api/v1/items/${this.props.match.params.itemId}`)
    .then(res =>{
      return res.json();
    })
    .then( item=>{
      console.log("item", item);
      this.setState({
        ...item
      });
    })
    .catch(err =>{
      console.log("item page", err);
    });
  };
  handleBuy = () => {
    this.props.dispatch(addItem(this.state));
  };

  render(){
    console.log("this props", this.props);

    return(
      <>
        <div className = {"itemContainer"}>
            <img src = {this.state.imgSrc}/>
            <div className ={"item__title"}>{this.state.title}</div>
            <div className ={"item__price"}>{this.state.price}€</div>
            <div>{loremIpsum}</div>
            <FancyButton onClick={this.handleBuy}>OSTA</FancyButton>
        </div>
      </>
    );
  }
}

ItemPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default connect()(ItemPage);

const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."; 
