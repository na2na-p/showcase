import React from 'react';

import ChildToParent from '@/pages/ChildToParent';
import Home from '@/Home';
import LazyHooks from '@/pages/LazyHooksDemo';
import Game from '@/pages/Game';
import IpCalculator from '@/pages/IpCalculator';
import ChmodGenerator from '@/pages/ChmodGenerator';

type routes = {
	path: () => string;
	component: JSX.Element;
}

type Pages = 'home' | 'childToParent' | 'lazyHooks' | 'numberGuessingGame' | 'IpCalculator' | 'chmodGenerator';
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
		},
		chmodGenerator: {
			path: () => '/chmod-generator',
			component: <ChmodGenerator />
		}
	} as const satisfies {
		[P in Pages]: routes;
	};

export default routes;
