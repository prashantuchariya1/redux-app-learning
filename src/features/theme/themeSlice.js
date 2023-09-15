import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "#282c34",
}

export const themeSlice = createSlice({
  name: 'themeColor',
  initialState,
  reducers: {
    
    themeColorSet: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { themeColorSet } = themeSlice.actions

export default themeSlice.reducer