import styled from 'styled-components';
import { defaultTheme, typeScale } from '../utils';

const Button = styled.button`
	padding: 12px 24px;
	font-family: ${defaultTheme.primaryFont};
	font-size: ${typeScale.paragraph};
	border-radius: 2px;
	min-width: 100px;
	cursor: pointer;
	transition: 0.2s linear;

	&:hover {
		background-color: ${defaultTheme.primaryColorhover};
	}
`;

export const PrimaryButton = styled(Button)`
	background-color: ${defaultTheme.primaryColor};
	border: none;
	color: ${defaultTheme.textColorInverted};

	&:hover {
		color: ${defaultTheme.textColor};
	}
`;
