import React from 'react';

import Button from '@/components/input/Button';
import Divider from '@/components/layout/Divider';
import Stack from '@/components/layout/Stack';
import Typography from '@/components/layout/Typography';

import DataDisplay from './DataDisplay';
import { useHooks } from './hooks';
import Input from './Input';

export type GameProps = {
	answer?: number;
}

const Game = ({ answer }: GameProps) => {
	const { histories, setResultHistory, onResetButtonClick } = useHooks({ answer });
	return (
		<Stack spacing={2}>
			<Typography variant="h5">数当てゲーム</Typography>
			<Divider />
			<Input setter={setResultHistory} />
			<Divider />
			<DataDisplay histories={histories} />
			<Button onClick={onResetButtonClick} variant="contained">もう一度最初から</Button>
		</Stack>
	);
};

export default Game;
