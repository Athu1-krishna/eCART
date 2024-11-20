import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartItems',
    initialState: [],
    reducers: {
        addToCart:(state, actionByComponent)=>{
            const existingProduct = state.find(item=>item.id==actionByComponent.payload.id);
            if(existingProduct){
                // if a product is already existing then the quantity and price is updated
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
                const remainingProduct = state.filter(item=>item.id!=existingProduct.id)
                state = [...remainingProduct, existingProduct]
            }
            else{
                // when a product is added to the cart for the first time 
                state.push({...actionByComponent.payload, quantity:1, totalPrice:actionByComponent.payload.price})
            }
        },
        incrementQuantity : (state, actionByCart) => {
            const existingProduct = state.find(item=>item.id == actionByCart.payload)
            existingProduct.quantity++;
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
            const remainingProduct = state.filter(item => item.id != existingProduct.id);
            state = [...remainingProduct, existingProduct]
        },
        decrementQuantity : (state, actionByCart) => {
            const existingProduct = state.find(item=>item.id == actionByCart.payload)
            if(existingProduct.quantity > 1)
            {
                existingProduct.quantity--;
            }else{
                 return state.filter(item=>item.id != actionByCart.payload)
            }
            
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
            const remainingProduct = state.filter(item => item.id != existingProduct.id);
            state = [...remainingProduct, existingProduct]
        },
        removeCartItem : (state, actionByCart) => {
            return state.filter(item=>item.id != actionByCart.payload)
        },
        emptyCart : (state) => {
            return state = []
        }
    }
})

export const { addToCart, incrementQuantity, removeCartItem, decrementQuantity, emptyCart }= cartSlice.actions
export default cartSlice.reducer