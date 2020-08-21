import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

// Imported Components
import { GlobalStyle } from './utils';
import Header from './organisms/Header';

// Routes
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

function App() {
	return (
		<div className='App'>
			<RecoilRoot>
				<Router>
					<GlobalStyle />
					<Header />
					<Switch>
						<Route exact path='/' component={Page1} />
						<Route path='/page2' component={Page2} />
						<Route path='/page3' component={Page3} />
						<Route path='/page4' component={Page4} />
					</Switch>
				</Router>
			</RecoilRoot>
		</div>
	);
}

export default App;
