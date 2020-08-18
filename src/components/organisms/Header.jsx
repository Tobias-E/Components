import React, { useState } from 'react';
import styled from 'styled-components';

// Assets
import logo from '../../assets/logo.svg';

// Imported Components
import Burger from '../atoms/Burger';

// Exported Component
const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<Container>
			<Logo src={logo} alt='logo' />
			<Burger open={open} setOpen={setOpen} />
		</Container>
	);
};

// Styling
const Container = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 1rem;

	@media screen and (min-width: 1023px) {
	}
`;

const Logo = styled.img`
	max-width: 100px;
`;
export default Header;
