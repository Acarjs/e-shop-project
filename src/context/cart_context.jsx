import { createContext, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

const initialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 4,
}

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (id, size, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, size, amount, product } })
  }

  const removeItem = (id) => {}

  const toggleAmount = () => {}

  const clearCart = () => {}

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
