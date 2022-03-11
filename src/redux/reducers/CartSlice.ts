import {ProductInterface} from '../../interfaces/product.interface';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IProductState {
  cart: ProductInterface[]
  totalCount: number
}

const initialState: IProductState = {
  cart: [],
  totalCount: 0
};

export const cartSlice = createSlice({
  name: 'cartProduct',
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<any>) {
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cart[itemIndex].qty += 1;
        state.totalCount = state.totalCount += 1;
      } else {
        state.cart.push({...action.payload});
        state.totalCount = state.totalCount += 1;
      }
    }
  }
});

export default cartSlice.reducer;
