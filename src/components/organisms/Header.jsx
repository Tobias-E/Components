import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Assets
import logo from '../../assets/logo.svg';
import { defaultTheme } from '../utils';

// Imported Components
import Burger from '../atoms/Burger';

// Exported Component
const Header = () => {
	const [open, setOpen] = useState(false);
	console.log(open);
	return (
		<Container>
			<Logo src={logo} alt='logo' />
			<Nav open={open}>
				<LinkS to='/'>Page1</LinkS>
				<LinkS to='/page2'>Page2</LinkS>
				<LinkS to='/page3'>Page3</LinkS>
				<LinkS to='/page4'>Page4</LinkS>
			</Nav>
			<Burger open={open} setOpen={setOpen} />
		</Container>
	);
};

// Styling
const Container = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	align-items: center;
	position: relative;

	@media screen and (min-width: 1023px) {
	}
`;

const Logo = styled.img`
	max-width: 100px;
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	background-color: ${defaultTheme.primaryColor};
	transition: all 0.2s linear;
	position: absolute;
	top: 100px;
	right: 0;
	opacity: ${({ open }) => (open ? '1' : '0')};

	@media screen and (max-width: 1022px) {
		height: 300px;
	}

	@media screen and (min-width: 1023px) {
		width: 50vw;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		position: static;
		background-color: transparent;
		opacity: 1;
	}
`;

const LinkS = styled(Link)`
	text-decoration: none;
	color: ${defaultTheme.secondaryColor};

	:hover {
		color: ${defaultTheme.secondaryColorHover};
	}
	:focus {
		color: ${defaultTheme.primaryColorhover};
	}

	@media screen and (max-width: 1022px) {
		padding: 0 3rem;
	}
`;
export default Header;
