import React from 'react';

import ChildToParent from '@/pages/ChildToParent';
import Home from '@/Home';
import LazyHooks from '@/pages/LazyHooks';
import Game from '@/pages/Game';

type routes = {
	path: () => string;
	component: JSX.Element;
}

type pages = 'home' | 'childToParent' | 'lazyHooks' | 'numberGuessingGame';
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
		}
	} as const satisfies {
		[P in pages]: routes;
	};

export default routes;
