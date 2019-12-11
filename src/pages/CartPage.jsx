import React from "react";
import PropTypes from "prop-types";
import {IoMdTrash} from "react-icons/io";
import "../components/cart.css";
import FancyButton from "../components/FancyButton.jsx";
import {connect} from "react-redux";
import {removeItem} from "../store/actions.js";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as selectors from "../store/selector";

class CartPage extends React.PureComponent{
    static propTypes = {
        cart: PropTypes.arrayOf(PropTypes.shape(ItemProps)).isRequired,
        dispatch: PropTypes.func.isRequired
    };

    calcNumbers = () => {
      const sum = Math.round(this.props.cart.reduce((acc, item) => acc + item.price, 0));
      const tax = Math.round(sum / 100 * 20);
      return {
          sum, tax
      };
    };

    handleTrash = (_id) => {
         this.props.dispatch(removeItem(_id));
         toast.success("Toode eemaldatud!");
    };

    render() {
        const {sum, tax} = this.calcNumbers();
        return(
            <div className={"cart_items"}>
                <Table
                    onTrash={this.handleTrash}
                    rows={this.props.cart}
                />
                <div className={"cart_summary"}>
                    <table>
                        <tbody>
                        <tr><td>Vahesumma:</td><td>{sum} €</td></tr>
                        <tr><td>Maksud:</td><td>{tax} €</td></tr>
                        <tr><td>Kokku:</td><td>{tax + sum} €</td></tr>
                        <tr>
                                <div className={"submit"}>
                                    <FancyButton>VORMISTA OST</FancyButton>
                                </div>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const Table = ({rows, onTrash}) => {
  return(
      <div className={"table"}>
          {rows.map((row, index) => <Row onTrash={onTrash} key={index} {...row} />)}
      </div>
  );
};
Table.propTypes = {
    rows: PropTypes.array.isRequired,
    onTrash: PropTypes.func.isRequired,
};
const Row = ({_id, title, imgSrc, category, price, onTrash}) => {
    return (
        <div className={"row"}>
            <div className={"cell"}>
                <img src={imgSrc} />
            </div>
            <div className={"title"}>
                Title: {title}
            </div>
            <div className={"category"}>
                Category: {category}
            </div>
            <div className={"itemprice"}>
                Price: {price} €
            </div>
            <div className={"close-icon"}>
            <IoMdTrash
                title={"Eemalda"}
                size={"50px"}
                onClick={() => onTrash(_id)}/>
            </div>
        </div>
    );
};
export const ItemProps = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};
Row.propTypes = {
    ...ItemProps,
    onTrash: PropTypes.func.isRequired,
};
const mapStateToProps = (store) => {
    return {
        cart: selectors.getCart(store),
    };
};
export default connect(mapStateToProps)(CartPage); 