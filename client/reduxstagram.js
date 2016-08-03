// let's go!
import React from 'react';

import {render} from 'react-dom';

// import CSS
import css from './styles/style.styl';

// import components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// impoort react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
	<Provider store={store}>
		<Router history = {history} >
			<Route path="/" component={App}>//これはヘッダーだからネストしないといけない
				<IndexRoute component = {PhotoGrid}></IndexRoute>// PhotGridとSingleはAppの子供
				<Route path="/view/:postId" component = {Single}></Route>
			</Route>
		</Router>
	</Provider>
)


render(router, document.getElementById('root'));