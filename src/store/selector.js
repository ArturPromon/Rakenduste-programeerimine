export const getToken = (store) => {
    if (!store.user) return [];
    return store.user.cart;
  };
  
  export const getUser = (store) => {
      return store.user;
  };
  
  export const getCart = (store) => {
    return store.cart;
  };
  
  export const getItems = (store) => {
      return store.items;
  }; 