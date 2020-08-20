import React from 'react';
import styled from 'styled-components';

// Imported Components
import Form from './molecules/Form';

const Page3 = () => {
	return (
		<Section>
			<h1>Page3</h1>
			<Form />
		</Section>
	);
};

const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export default Page3;
