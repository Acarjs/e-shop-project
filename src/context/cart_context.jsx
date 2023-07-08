import { createContext, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

const initialState = {}

const CartContext = createContext()

export const cartProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CartContext.Provider value="cart-context">{children}</CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
