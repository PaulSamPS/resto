import {ProductInterface} from '../../interfaces/product.interface';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IProductState {
  cart: ProductInterface[]
}

const initialState: IProductState = {
  cart: []
};

export const cartSlice = createSlice({
  name: 'cartProduct',
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<any>) {
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cart[itemIndex].qty += 1;
      } else {
        state.cart.push({...action.payload});
      }
    }
  }
});

export default cartSlice.reducer;
