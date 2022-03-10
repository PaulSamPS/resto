import {AppDispatch} from '../store';
import {ProductInterface} from '../../interfaces/product.interface';
import {productSlice} from '../reducers/ProductSlice';
import {productInfoSlice} from '../reducers/ProductInfoSlice';
import {navSlice} from '../reducers/NavSlice';
import {NavInterface} from '../../interfaces/nav.interface';
import axios from 'axios';

export const getProduct = (category: string = 'cold-snacks') => async (dispatch: AppDispatch) => {
  try {
    dispatch(productSlice.actions.setProduct());
    const res = await axios.get<ProductInterface[]>(`/api/products?category=${category}`);
    dispatch(productSlice.actions.setProductSuccess(res.data));
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

export const getNav = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(navSlice.actions.setNav());
    const res = await axios.get<NavInterface[]>(`/api/nav`);
    dispatch(navSlice.actions.setNavSuccess(res.data));
  } catch (e) {
    const error = e as Error;
    dispatch(navSlice.actions.setNavError(error.message));
  }
};
