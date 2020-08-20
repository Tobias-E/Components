import React from 'react';
import styled from 'styled-components';

// Imported Components
import Gallery from './molecules/Gallery';

const Page2 = () => {
	return (
		<Section>
			<h1>Page2</h1>
			<h2>Gallery</h2>
			<Gallery />
		</Section>
	);
};

const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export default Page2;
