import {createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import { toast } from "react-toastify";



const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}
// export const productsFetch = createAsyncThunk(
//     "products/productFetch",
//     async() => {
//         const response = await axios.get("http://localhost:500/products")
//     }
// )
const shoppingSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
        const itemIndex =  state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`Increased ${action.payload.title} Quantity`, {
                  position: "top-right",
                });
            } else {
                 const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.title} Added to Cart`, {
                  position: "top-right",
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action) {
           const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )

            state.cartItems = nextCartItems
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            toast.error(`${action.payload.title} Removed from Cart`, {
              position: "top-right",
            });

        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
               cartItem=> cartItem.id == action.payload.id
            ) 
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
                toast.info(`Decreased ${action.payload.title} Cart Quantiy`, {
                  position: "top-right",
                });
            } else if(state.cartItems[itemIndex].cartQuantity){
                const nextCartItems = state.cartItems.filter(
                  (cartItem) => cartItem.id !== action.payload.id
                );

                state.cartItems = nextCartItems;
                
                toast.error(`${action.payload.title} Removed from Cart`, {
                  position: "top-right",
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal
             }, {
                total: 0,
                quantity: 0
            })

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total
        }
    },
})

export const {addToCart, removeFromCart ,decreaseCart , getTotals } = shoppingSlice.actions
export default shoppingSlice.reducer