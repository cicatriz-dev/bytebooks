import { createSlice } from '@reduxjs/toolkit';
import { Book } from './books';

type CartBook = Book & { quantity: number };

export interface CartState {
	books: CartBook[];
	total: number;
	isCartOpen: boolean;
}

const initialState: CartState = {
	books: [],
	total: 0,
	isCartOpen: false,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setIsCartOpen: (state, action) => {
			state.isCartOpen = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function

export const { setIsCartOpen } = cartSlice.actions;

export default cartSlice.reducer;
