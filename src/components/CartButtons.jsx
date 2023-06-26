import React from 'react'
import styled from 'styled-components'
import { FaUserCheck, FaUserTimes, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CartButtons = () => {
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">10</span>
        </span>
      </Link>
      <button type="button" className="auth-btn">
        Login <FaUserCheck />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 12rem;

  .cart-btn {
    color: var(--red-999);
    font-size: 1.2rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
  }
`

export default CartButtons
