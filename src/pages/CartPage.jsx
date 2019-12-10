import React from "react";
import PropTypes from "prop-types";
import {getItems} from "../actions/itemsActions";
import {IoMdTrash} from "react-icons/io";
import "../components/cart.css";
import FancyButton from "../components/FancyButton.jsx";

class CartPage extends React.PureComponent{
    state = {
        rows: []
    };

    /** mock data */
    componentDidMount() {
        getItems()
            .then(items => {
                this.setState({
                    rows: items.slice(0, 4)
                });
            })
            .catch(err =>{
                console.log("Error", err);
            });

    }

    render() {
        return(
            <div className={"cart_items"}>
                <Table
                    rows={this.state.rows}
                />
                <div className={"cart_summary"}>
                    <table>
                        <tbody>
                        <tr><td>Vahesumma:</td><td>200 €</td></tr>
                        <tr><td>Maksud:</td><td>20 €</td></tr>
                        <tr><td>Kokku:</td><td>180 €</td></tr>
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

const Table = ({rows}) => {
    console.log(rows);
  return(
      <div className={"table"}>
          {rows.map((row) => <Row key={row._id} {...row} />)}
      </div>
  );
};
Table.propTypes = {
    rows: PropTypes.array.isRequired,
};
const Row = ({title, imgSrc, category, price}) => {
    return (
        <div className={"row"}>
            <div className={"cell"}>
                <img src={imgSrc} />
            </div>
            <div className={"title"}>
                {title}
            </div>
            <div className={"category"}>
                Category: {category}
            </div>
            <div className={"price"}>
                Price: {price} €
            </div>
            <div className={"close-icon"}>
            <IoMdTrash size={"50px"}/>
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
export default CartPage; 
Row.propTypes = ItemProps;