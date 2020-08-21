import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRecoilState } from 'recoil';
import { inViewState } from '../Recoil';

const IntersectionObserver = ({ triggerOnce, rootMargin, children }) => {
	const [_, setInView] = useRecoilState(inViewState);
	const [ref, inView] = useInView({
		triggerOnce: triggerOnce,
		threshold: 0,
		rootMargin: rootMargin,
	});

	useEffect(() => {
		setInView(inView);
	}, [inView]);
	return <div ref={ref}>{children}</div>;
};

export default IntersectionObserver;
