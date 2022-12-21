import React from 'react';

import Table from '@/components/dataDisplay/Table';

import type { historyType } from '../types';

export default ({ histories }: { histories: historyType[] }) => {
	const tableHeaders = ['回数', 'あなたの答え', '判定'];
	const historyRows = histories.map((historyRecord, index) => {
		const { history, result } = historyRecord;
		return [index + 1, history, result];
	});
	return (
		<Table headers={tableHeaders} rows={historyRows} />
	);
};
