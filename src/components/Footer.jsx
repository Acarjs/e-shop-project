import React from 'react'
import styled from 'styled-components'
import footerImage from '../assets/footer-bg.jpeg'
import logo from '../assets/mini-logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Wrapper>
      <div className="logo-info">
        <Link to="/">
          <img src={logo} alt="Besiktas Mini-Logo" />
        </Link>
        <p>Besiktas JK Fan Products</p>
      </div>
      <h5>&copy; {new Date().getFullYear()} </h5>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-image: url(${footerImage});
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-900);
  text-align: center;
  background-position: center;
  background-size: cover;
  object-fit: fill;

  .logo-info {
    margin-top: 1rem;
  }

  p {
    color: var(--primary-0);
    letter-spacing: var(--spacing);
    font-weight: 900;
    line-height: 1.5;
  }

  h5 {
    color: var(--primary-0);
    letter-spacing: var(--spacing);
  }
`

export default Footer
