import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IProductState {
    sort: string
}

const initialState: IProductState = {
  sort: ''
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    setSortInit(state) {
      state.sort = 'Холодные Закуски';
    }
  }
});

export default sortSlice.reducer;
