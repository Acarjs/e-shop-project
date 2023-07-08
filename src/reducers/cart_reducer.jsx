import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

const cart_reducer = (action, state) => {
  if (action.type === ADD_TO_CART) {
    const { id, size, amount, product } = action.payload
  }

  return state
}

export default cart_reducer
