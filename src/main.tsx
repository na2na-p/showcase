import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from '@/routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path={routes.home.path()}
					element={routes.home.component} />
				<Route
					path={routes.childToParent.path()}
					element={routes.childToParent.component} />
				<Route
					path={routes.lazyHooks.path()}
					element={routes.lazyHooks.component} />
				<Route
					path={routes.numberGuessingGame.path()}
					element={routes.numberGuessingGame.component} />
				<Route
					path={routes.IpCalculator.path()}
					element={routes.IpCalculator.component} />
				<Route
					path={routes.chmodGenerator.path()}
					element={routes.chmodGenerator.component} />
				<Route
					path="*"
					element={<div>404</div>} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
