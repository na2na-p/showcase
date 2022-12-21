import React from 'react';

import Typography from '@/components/layout/Typography';
import Divider from '@/components/layout/Divider';
import ListItemButton from '@/components/dataDisplay/List/ListItemButton';
import ListItemText from '@/components/dataDisplay/List/ListItemText';

import routes from './routes';

export default () => {
	return (
		<>
			<Typography variant="h5">Showcase - React</Typography>
			<Divider />
			<Typography variant="subtitle1">Reactとんち問答</Typography>
			<ListItemButton LinkComponent="a" href={routes.childToParent.path()}>
				<ListItemText primary="子から親へ" />
			</ListItemButton>
			<ListItemButton LinkComponent="a" href={routes.lazyHooks.path()}>
				<ListItemText primary="呼んだり呼ばなかったり" />
			</ListItemButton>
			<Divider />
			<Typography variant="subtitle1">数あてゲーム</Typography>
			<ListItemButton LinkComponent="a" href={routes.numberGuessingGame.path()}>
				<ListItemText primary="数あてゲーム" />
			</ListItemButton>
		</>
	);
};
