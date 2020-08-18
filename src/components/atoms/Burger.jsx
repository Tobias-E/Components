import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../utils';

const Burger = ({ open, setOpen }) => {
	return (
		<Wrapper open={open} onClick={() => setOpen(!open)}>
			<div />
			<div />
			<div />
		</Wrapper>
	);
};

const Wrapper = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 60px;
	height: 60px;
	padding: 0;
	background: transparent;
	border: none;
	cursor: pointer;

	&:focus {
		outline: none;
	}

	@media screen and (min-width: 1023px) {
		display: none;
	}

	div {
		width: 60px;
		height: 10px;
		position: relative;
		transform-origin: 1px;
		background: ${defaultTheme.primaryColorhover};
		border-radius: 5px;
		transition: all 0.2s linear;

		:first-child {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}

		:nth-child(2) {
			transform: ${({ open }) =>
				open ? 'translateX(60px)' : 'translateX(0)'};
			opacity: ${({ open }) => (open ? '0' : '1')};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;

export default Burger;
