import React, { useState } from 'react';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { inViewState } from './Recoil';
import IntersectionObserver from './atoms/IntersectionObserver';

const Page4 = ({}) => {
	const inView = useRecoilValue(inViewState);
	return (
		<Section>
			<h1>Page4</h1>
			<Fill>Fill!</Fill>
			<Test> Not observing this</Test>
			<IntersectionObserver
				triggerOnce={false}
				rootMargin={'0px 0px -50px 0px'}
			>
				<Test inView={inView}>THE BIG TEST! STATUS: {`${inView}`}</Test>
			</IntersectionObserver>
		</Section>
	);
};

const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Fill = styled.h2`
	margin-top: 1000px;
`;

const Test = styled.h2`
	margin: 0 0 100px 0;
	transition: all 0.8s ease-in-out;
	opacity: ${({ inView }) => (inView ? '1' : '0')};
	transform: ${({ inView }) =>
		inView
			? 'translateX(0px) rotate(0)'
			: 'translateX(-160px) rotate(-90deg)'};
`;

export default Page4;
