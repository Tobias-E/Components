import React from 'react';
import { useInView } from 'react-intersection-observer';

const IntersectionObserver = ({
	setInView,
	triggerOnce,
	rootMargin,
	children,
}) => {
	const [ref, inView] = useInView({
		triggerOnce: triggerOnce || true,
		threshold: 0,
		rootMargin: rootMargin || '0px 0px -50px 0px',
	});
	setInView(inView);
	return <div ref={ref}>{children}</div>;
};

export default IntersectionObserver;
