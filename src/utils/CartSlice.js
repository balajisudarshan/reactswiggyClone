import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name:"cart",
  initialState:{
    items:['dosa']
  },
  reducers:{
    addItem:(state,action)=>{
      state.items.push(action.payload)
    },
    removeItem:(state)=>{
      state.items.pop()
    }
  }
})
export const {addItem,removeItem} = CartSlice.actions
export default CartSlice.reducer