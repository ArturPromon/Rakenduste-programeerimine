import PropTypes from "prop-types";
import {
    ITEMS_SUCCESS,
    ITEM_REMOVE,
    ITEM_ADDED,
    USER_UPDATE,
    TOKEN_UPDATE
} from "./actions";

export const UserPropTypes = {
    _id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    cart: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const initialState = {
    token: null,
    user: null,
    items: [],
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOKEN_UPDATE:
            return {
              ...state,
              token: action.payload,
            };
        case USER_UPDATE:
            return {
                ...state,
                user: action.payload,
            };
        case ITEMS_SUCCESS:
            return {
                ...state,
                items: action.payload,
            };
        case ITEM_REMOVE: {
            return {
                ...state,
                user: removeProductFromCart(state.user, action.payload),
            };
        }
        case ITEM_ADDED: {
            return {
                ...state,
                user: addProductToCart(state.user, action.payload),
            };
        }
        default: {
            return state;
        }
    }
};

const addProductToCart = (user, itemId) => {
    return{
      ...user,
      cart: user.cart.concat([itemId])
    };
  };
  
  const removeProductFromCart = (user, itemId) => {
    const index = user.cart.findIndex(cartId => cartId === itemId);
    if(index === -1) return user;
    const cartCopy = user.cart.slice();
    cartCopy.splice(index, 1);
    return {
        ...user,
        cart: cartCopy
    };
  };
  
  // const removeItemById = (items, _id) => {
  //     const index = items.findIndex(item => item._id === _id);
  //     if(index === -1) return items;
  //     const copy = items.slice();
  //     copy.splice(index, 1);
  //     return copy;
  // }; 