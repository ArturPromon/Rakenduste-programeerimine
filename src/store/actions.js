// const USER_SUCCESS = "USER_LOADED";
// const USER_REQUEST = "USER_REQUEST";
// const USER_FAILURE = "USER_FAILURE";

export const ITEMS_SUCCESS = "ITEMS_SUCCESS";
export const ITEMS_REQUEST = "ITEMS_REQUEST";
export const ITEMS_FAILURE = "ITEMS_FAILURE";
export const ITEM_ADDED = "ITEM_ADDED";
export const ITEM_REMOVE = "ITEM_REMOVED";
export const USER_UPDATE = "USER_UPDATE";

export const getItems = () => (dispatch, getState) => {
    if(getState().items.length > 0) return null;
    dispatch(itemsRequest());
    return fetch("/api/v1/items")
        .then(res => {
            return res.json();
        })
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

export const removeItem = (_id) => ({
    type: ITEM_REMOVE,
    payload: _id,
});

export const addItem = (item) => ({
    type: ITEM_ADDED,
    payload: item,
});

export const userUpdate = (user) => ({
    type: USER_UPDATE,
    payload: user,
}); 