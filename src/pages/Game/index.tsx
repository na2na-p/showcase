import React from 'react';

import Button from '@/components/input/Button';
import Stack from '@/components/layout/Stack';
import Divider from '@/components/layout/Divider';
import Typography from '@/components/layout/Typography';

import Input from './Input';
import DataDisplay from './DataDisplay';
import { useHooks } from './hooks';

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
