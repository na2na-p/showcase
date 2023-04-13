import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '@/Home';
import ChildToParent from '@/pages/ChildToParent';
import ChmodGenerator from '@/pages/ChmodGenerator';
import EventHandler from '@/pages/EventHandler';
import Game from '@/pages/Game';
import IpCalculator from '@/pages/IpCalculator';
import LazyHooks from '@/pages/LazyHooksDemo';


type Routes = {
	path: () => string;
	component: JSX.Element;
};

type Pages =
	| 'home'
	| 'childToParent'
	| 'lazyHooks'
	| 'numberGuessingGame'
	| 'IpCalculator'
	| 'chmodGenerator'
	| 'eventHandler'
	| 'notFound';

export const routes = {
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
	},
	eventHandler: {
		path: () => '/event-handler',
		component: <EventHandler />
	},
	notFound: {
		path: () => '*',
		component: <div>404</div>
	}
} as const satisfies {
	[P in Pages]: Routes;
};

const router = createBrowserRouter(
	(() => {
		return Object.values(routes).map((route) => {
			return {
				path: route.path(),
				element: route.component
			};
		});
	})()
);

export default router;
