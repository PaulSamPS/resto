import {AppDispatch} from '../store';
import {ProductInterface} from '../../interfaces/product.interface';
import {productSlice} from '../reducers/ProductSlice';
import {productInfoSlice} from '../reducers/ProductInfoSlice';
import axios from 'axios';

export const getProduct = (name:string = 'Холодные закуски') => async (dispatch: AppDispatch) => {
  try {
    dispatch(productSlice.actions.setProduct());
    const res = await axios.get<ProductInterface[]>(`/api/products`);
    dispatch(productSlice.actions.setProductSuccess(res.data.filter((e) => e.category == name)));
  } catch (e) {
    const error = e as Error;
    dispatch(productSlice.actions.setProductError(error.message));
  }
};

export const getInfoProduct = (id: string | undefined) => async (dispatch: AppDispatch) => {
  try {
    dispatch(productInfoSlice.actions.setInfoProduct());
    const res = await axios.get<ProductInterface>(`/api/products/${id}`);
    dispatch(productInfoSlice.actions.setInfoProductSuccess(res.data));
  } catch (e) {
    const error = e as Error;
    dispatch(productInfoSlice.actions.setInfoProductError(error.message));
  }
};
