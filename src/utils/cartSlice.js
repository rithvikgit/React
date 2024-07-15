import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {

            //Vanilla(old) Redux => DON'T MUTATE STATE, returning was mandatory
            //const newState = [...state];
            //newState.items.push(action.payload);
            //return newState

            //Redux Toolkit
            //We HAVE to mutate the state
            //It uses immer js            
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            //mutating the state
            state.items.pop();
        },
        //original State = {items: ["Pizza"]}
        clearCart: (state) => {
            //RTK - either Mutate the existing state or return a new state
            //state.items.length = 0 // original State = []

            return {items:[]}; // This new object will be replaced iside originalState = {items:[]}
        },
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;