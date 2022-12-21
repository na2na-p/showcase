import React from 'react';

import ChildToParent from '@/pages/ChildToParent';
import Home from '@/Home';
import LazyHooks from '@/pages/LazyHooks';
import Game from '@/pages/Game';
import IpCalculator from './pages/IpCalculator';

type routes = {
	path: () => string;
	component: JSX.Element;
}

type Pages = 'home' | 'childToParent' | 'lazyHooks' | 'numberGuessingGame' | 'IpCalculator';
const routes =
	{
		home: {
			path: () => '/',
			component: <Home />
		},
		childToParent: {
			path: () => '/child-to-parent',
			component: <ChildToParent />
		},
		lazyHooks: {
			path: () => '/lazy-hooks',
			component: <LazyHooks />
		},
		numberGuessingGame: {
			path: () => '/number-guessing-game',
			component: <Game />
		},
		IpCalculator: {
			path: () => '/ip-calculator',
			component: <IpCalculator />
		}
	} as const satisfies {
		[P in Pages]: routes;
	};

export default routes;
