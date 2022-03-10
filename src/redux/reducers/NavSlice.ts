import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NavInterface} from '../../interfaces/nav.interface';

interface INavState {
  nav: NavInterface[]
  isLoading: boolean
  error: string
}

const initialState: INavState = {
  nav: [],
  isLoading: false,
  error: ''
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setNav(state) {
      state.isLoading = true;
    },
    setNavSuccess(state, action: PayloadAction<NavInterface[]>) {
      state.isLoading = false;
      state.error = '';
      state.nav = action.payload;
    },
    setNavError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default navSlice.reducer;
