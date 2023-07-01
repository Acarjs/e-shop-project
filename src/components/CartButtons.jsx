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
      <button type="button" className="login-btn">
        Login <FaUserCheck />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 15rem;

  .cart-btn {
    color: var(--red-999);
    font-size: 1.2rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
  }

  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.5rem;
      margin-left: 3px;
    }
  }

  .cart-value {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--green-dark);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--green-light);
    padding: 11px;
  }

  .login-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background: transparent;
    border-color: transparent;
    font-size: 1.2rem;
    color: var(--primary-900);
    letter-spacing: var(--spacing);
  }
`

export default CartButtons
