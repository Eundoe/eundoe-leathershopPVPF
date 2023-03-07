import { createSlice, configureStore } from "@reduxjs/toolkit";






let orderList = createSlice({
  name : "orderList",
  initialState : {
    data : [],
    total : 0,
    amount : 0,
  },
  reducers: {
    AddCart(state,action){
    state.total += action.payload.total
    state.amount += action.payload.amount
    state.data.push(action.payload)
      
    },
    RemoveCart(state,action){
      state.total -= state.data[action.payload].total
      state.amount -= state.data[action.payload].amount
      state.data = state.data.filter((item,index) =>{
        return index !== action.payload
      })
    }
  }
})

export let {AddCart,RemoveCart} = orderList.actions




export default configureStore({
  reducer :{
    orderList : orderList.reducer
  }

})
