import { useNavigate } from 'react-router-dom';

import ListItemButton from '@/components/dataDisplay/List/ListItemButton';
import ListItemText from '@/components/dataDisplay/List/ListItemText';
import Divider from '@/components/layout/Divider';
import Typography from '@/components/layout/Typography';

import { routes } from './routes';

const Home = () => {
	const navigate = useNavigate();
	return (
		<>
			<Typography variant="h5">Showcase - React</Typography>
			<Divider />
			<Typography variant="subtitle1">Reactとんち問答</Typography>
			<ListItemButton
				onClick={() => {
					navigate(routes.childToParent.path());
				}}
			>
				<ListItemText primary="子から親へ" />
			</ListItemButton>
			<ListItemButton
				onClick={() => {
					navigate(routes.lazyHooks.path());
				}}
			>
				<ListItemText primary="呼んだり呼ばなかったり" />
			</ListItemButton>
			<ListItemButton
				onClick={() => {
					navigate(routes.eventHandler.path());
				}}
			>
				<ListItemText primary="イベントハンドラ調査" />
			</ListItemButton>
			<Divider />
			<Typography variant="subtitle1">ゲーム</Typography>
			<ListItemButton
				onClick={() => {
					navigate(routes.numberGuessingGame.path());
				}}
			>
				<ListItemText primary="数あてゲーム" />
			</ListItemButton>
			<ListItemButton onClick={() => {
				navigate(routes.IpCalculator.path());
			}}>
				<ListItemText primary="IP計算機" />
			</ListItemButton>
			<ListItemButton onClick={()=>{
				navigate(routes.chmodGenerator.path());
			}}>
				<ListItemText primary="chmodジェネレータ" />
			</ListItemButton>
		</>
	);
};

export default Home;
