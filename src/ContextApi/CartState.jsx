
import { useReducer } from 'react';
import  CartContext  from './CartContext';
import Reducers from './Reducers';
import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
} from "./Types";


 
const CartState = ({ children }) => {
    
    const [state, dispatch] = useReducer(Reducers, initialState)

    const fullProductDisplay =(item)=> {
         dispatch({
             type: "DISPLAY_PRODUCT",
             payload: id       
       })
     }
    
    const addToCart = (item) => {
        dispatch({ type: ADD_TO_CART, payload: item })
        console.log(item)
        console.log(cartItems)
    }

    const showHideCart = () => {
        dispatch({type:SHOW_HIDE_CART})
    }

    const removeItem = (id) => {
        dispatch({type:REMOVE_ITEM , payload: id})
    }

    const increaseCartItem = (id) => {
        dispatch({type:"INCREASE_CART" , payload: id})
    }
    const decreaseCartItem = (id) => {
        dispatch({type: "DECREASE_CART" , payload: id})
    }

  return (
      <CartContext.Provider
          value={{
              showCart: state.showCart,
              cartItems:[ ...state.cartItems],
              addToCart,
              showHideCart,
              removeItem,
              increaseCartItem,
              decreaseCartItem
          }}
      >
          {children}  

    </CartContext.Provider>
  )
}

export default CartState