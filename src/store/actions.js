import * as services from "../services";
import * as selectors from "./selector";
import {toast} from "react-toastify";

// const USER_SUCCESS = "USER_LOADED";
// const USER_REQUEST = "USER_REQUEST";
// const USER_FAILURE = "USER_FAILURE";

export const ITEMS_SUCCESS = "ITEMS_SUCCESS";
export const ITEMS_REQUEST = "ITEMS_REQUEST";
export const ITEMS_FAILURE = "ITEMS_FAILURE";
export const ITEM_ADDED = "ITEM_ADDED";
export const ITEM_REMOVE = "ITEM_REMOVED";
export const USER_UPDATE = "USER_UPDATE";
export const TOKEN_UPDATE = "TOKEN_UPDATE";

export const removeItem = (itemId) => (dispatch, getState) => {
    const store = getState();
    const token = selectors.getToken(store);
    const userId = selectors.getUser(store)._id;
    services.removeItemFromCart({userId, itemId, token})
        .then(() => {
            toast.success("Toode eemaldatult!");
            dispatch({
                type: ITEM_REMOVE,
                payload: itemId,
            });
        })
        .catch(err => {
            console.log(err);
            toast.error("Toode eemaldamine ebaõnnestus");
        });
};

export const addItem = (item) => (dispatch, getState) => {
    const store = getState();
    const itemId = item._id;
    const token = selectors.getToken(store);
    const userId = selectors.getUser(store)._id;
    services.addItemToCart({userId, itemId, token})
        .then(() => {
            toast.success("Toode lisatud!");
            dispatch({
                type: ITEM_ADDED,
                payload: itemId,
            });
        })
        .catch(err => {
            console.log(err);
            toast.error("Toode lisamine ebaõnnestus");
        });
};


export const getItems = () => (dispatch, getState) => {
    const store = getState();
    if(selectors.getItems(store).length > 0) console.log("ura");
    dispatch(itemsRequest());
        return services.getItems()
        .then(items => {
            dispatch(itemsSuccess(items));
        })
        .catch(err => {
            console.log("Error", err);
            dispatch(itemsFailure());
        });
};

export const itemsSuccess = (items) => ({
    type: ITEMS_SUCCESS,
    payload: items,
});

export const itemsRequest = () => ({
    type: ITEMS_REQUEST,
});

export const itemsFailure = () => ({
    type: ITEMS_FAILURE,
});

export const userUpdate = (user) => ({
    type: USER_UPDATE,
    payload: user,
});

export const tokenUpdate = token => ({
    type: TOKEN_UPDATE,
    payload: token,
}); 