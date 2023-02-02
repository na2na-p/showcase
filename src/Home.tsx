import React from 'react';

import ListItemButton from '@/components/dataDisplay/List/ListItemButton';
import ListItemText from '@/components/dataDisplay/List/ListItemText';
import Divider from '@/components/layout/Divider';
import Typography from '@/components/layout/Typography';

import routes from './routes';

const Home = () => {
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
			<Typography variant="subtitle1">ゲーム</Typography>
			<ListItemButton LinkComponent="a" href={routes.numberGuessingGame.path()}>
				<ListItemText primary="数あてゲーム" />
			</ListItemButton>
			<ListItemButton LinkComponent="a" href={routes.IpCalculator.path()}>
				<ListItemText primary="IP計算機" />
			</ListItemButton>
			<ListItemButton LinkComponent="a" href={routes.chmodGenerator.path()}>
				<ListItemText primary="chmodジェネレータ" />
			</ListItemButton>
		</>
	);
};

export default Home;
