import React from "react";
import PropTypes from "prop-types";
import {getItems} from "../actions/itemsActions";
import {IoMdTrash} from "react-icons/io";
import "../components/cart.css";

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
            <Table
                rows={this.state.rows}
            />
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
Row.propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};
export default CartPage; 