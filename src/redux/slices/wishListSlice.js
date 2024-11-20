import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name : "wishlists",
    initialState : [],
    reducers : {
        addToWishlist : ( state, actionFromView) => {
            state.push(actionFromView.payload)
        },
        removeItem:(state, actionFromWishlist)=>{
            return state.filter(item=>item.id!=actionFromWishlist.payload)
        }
    }
})
export const { addToWishlist, removeItem } = wishListSlice.actions
export default wishListSlice.reducer