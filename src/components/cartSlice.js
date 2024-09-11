import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [] 
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex > -1) {
                state.cart[existingItemIndex].quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cart.find(item => item.id === id);
            if (item) {
                if (quantity <= 0) {
                    state.cart = state.cart.filter(item => item.id !== id);
                } else {
                    item.quantity = quantity;
                }
            }
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
