import {createStore} from "redux";

// const USER_SUCCESS = "USER_LOADED";
// const USER_REQUEST = "USER_REQUEST";
// const USER_FAILURE = "USER_FAILURE";

const ITEM_ADDED = "ITEM_ADDED";
const ITEM_REMOVE = "ITEM_REMOVED";

export const removeItem = (_id) => ({
   type: ITEM_REMOVE,
    payload: _id,
});
export const addItem = (item) => ({
    type: ITEM_ADDED,
    payload: item,
});

const initialState = {
    user: {
        email: null,
        _id: null,
        token: null,
    },
    cart: [
        //item
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEM_REMOVE: {
            return {
                ...state,
                cart: removeItemById(state.cart, action.payload)
            };
        }
        case ITEM_ADDED: {
            return {
                ...state,
                cart: state.cart.concat([action.payload])
            };
        }
        default: {
            return state;
        }
    }
};

const store = createStore(reducer);
//store.subscribe(() => console.log(store.getState()));
export default store;

const removeItemById = (items, _id) => {
    const index = items.findIndex(item => item._id === _id);
    if(index === -1) return items;
    const copy = items.slice();
    copy.splice(index, 1);
    return copy;
  }; 