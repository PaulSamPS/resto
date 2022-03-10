import {combineReducers, configureStore} from '@reduxjs/toolkit';
import productReducer from './reducers/ProductSlice';
import productInfoReducer from './reducers/ProductInfoSlice';
import navReducer from './reducers/NavSlice';

const rootReducer = combineReducers({
  productReducer,
  productInfoReducer,
  navReducer
});

export const createStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']
