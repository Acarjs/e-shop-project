import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, size, amount, product } = action.payload

    const currentItem = state.cart.find((item) => {
      return item.id == size + id
    })

    if (currentItem) {
      const currentCart = state.cart.map((cartItem) => {
        if (cartItem.id === size + id) {
          let newAmount = cartItem.amount + amount

          if (newAmount > cartItem.max) {
            newAmount = cartItem.max
          }
          return { ...cartItem, amount: newAmount }
        } else {
          return cartItem
        }
      })

      return { ...state, cart: currentCart }
    } else {
      const newItem = {
        id: size + id,
        name: product.name,
        size,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }

  if (action.type === REMOVE_CART_ITEM) {
    const currentCart = state.cart.filter((item) => item.id !== action.payload)

    return { ...state, cart: currentCart }
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }
}

export default cart_reducer
