import {ProductInterface} from '../../interfaces/product.interface';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IProductState {
  cart: ProductInterface[]
  totalCount: number
  totalPrice: number
}

const initialState: IProductState = {
  cart: [],
  totalCount: 0,
  totalPrice: 0
};

export const cartSlice = createSlice({
  name: 'cartProduct',
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<ProductInterface>) {
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cart[itemIndex].qty += 1;
        state.totalCount = state.totalCount += 1;
      } else {
        state.cart.push({...action.payload});
        state.totalCount = state.totalCount += 1;
      }
      state.totalPrice = state.cart.reduce((result, item) => item.qty * item.price + result, 0);
    }
  }
});

export default cartSlice.reducer;
