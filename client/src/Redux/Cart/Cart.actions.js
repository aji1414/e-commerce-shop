import UserActionTypes from "./Cart.types";

export const toggleCartHidden = () => ({
    type:UserActionTypes.TOGGLE_CART_HIDDEN
});

export const hideCart = () => ({
    type: UserActionTypes.HIDE_CART
});

export const addItem = item =>({
    type:UserActionTypes.ADD_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type:UserActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const removeItem = item => ({
    type:UserActionTypes.REMOVE_ITEM,
    payload: item
});

export const clearCart = () => ({
    type:UserActionTypes.CLEAR_CART
});