import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.svg'
import { ButtonContainer } from './Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function Navbar() {
	return (
		<Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
			<Link to="/">
				<img src={logo} alt="store" className="navbar-brand" />
			</Link>
			<ul className="navbar-nav align-items-center">
				<li className="nav-item ml-5">
					<Link to="/" className="nav-link">
						products
					</Link>
				</li>
			</ul>
			<Link to="/cart" className="ml-auto">
				<ButtonContainer>
					<span className="mr-2">
						<ShoppingCartIcon/>
					</span>
					my cart
				</ButtonContainer>
			</Link>
		</Nav>
	);
}

const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;



export default Navbar;
