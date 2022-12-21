import { useState } from 'react';
import { historyType } from './types';

export const useHooks = ({
	answer
}: {
	answer?: number
}) => {
	const initialAnswer = answer || Math.floor(Math.random() * 100) + 1;
	const [histories, setHistories] = useState<historyType[]>([]);
	const [answerState] = useState(initialAnswer);

	const setResultHistory = (result: string) => {
		setHistories([...histories, {
			index: histories.length + 1,
			history: result,
			// answerとresultを比較して、大きいか小さいか正解かを判定する
			result: parseInt(result) === answerState ?
				'正解' : parseInt(result) > answerState ?
					'もっと小さい' : 'もっと大きい'
		}]);
	};

	const onResetButtonClick = () => {
		setHistories([]);
	};

	return {
		histories,
		setResultHistory,
		onResetButtonClick
	};
};
