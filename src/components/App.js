import React from 'react';

// Components
import { GlobalStyle } from './utils';
import Header from './organisms/Header';
import { PrimaryButton } from './atoms/Buttons';

function App() {
	return (
		<div className='App'>
			<Header />
			<PrimaryButton>Hello</PrimaryButton>
			<GlobalStyle />
		</div>
	);
}

export default App;
