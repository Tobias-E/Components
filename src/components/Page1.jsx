import React from 'react';
import styled from 'styled-components';

// Imported Components

const Page1 = () => {
	return (
		<Section>
			<h1>Page1</h1>
		</Section>
	);
};

const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export default Page1;
