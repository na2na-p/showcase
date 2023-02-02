import Table from '@/components/dataDisplay/Table';

import type { HistoryType } from '../types';

const DataDisplay = ({ histories }: { histories: HistoryType[] }) => {
	const tableHeaders = ['回数', 'あなたの答え', '判定'];
	const historyRows = histories.map((historyRecord, index) => {
		const { history, result } = historyRecord;
		return [index + 1, history, result];
	});
	return (
		<Table headers={tableHeaders} rows={historyRows} />
	);
};

export default DataDisplay;
