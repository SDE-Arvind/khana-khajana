// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem?.quantity) {
                // If the item is already in the cart, increase its quantity
                existingItem.quantity += 1;
            } else {
                newItem.quantity = 1;
                // If the item is not in the cart, add it
                state.items.push(newItem);
            }
        },
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload;
            const itemToRemove = state.items.find(item => item.id === itemIdToRemove);

            if (itemToRemove) {
                if (itemToRemove.quantity > 0) {
                    // Decrease quantity
                    itemToRemove.quantity -= 1;
                } else {
                    // Remove the item if quantity is already 0
                    state.items = state.items.filter(item => item.id !== itemIdToRemove);
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
