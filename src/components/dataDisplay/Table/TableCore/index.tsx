import MuiTable from '@mui/material/Table';
import MuiTableContainer from '@mui/material/TableContainer';
import type { ReactNode } from 'react';
import React from 'react';

import TableBody from './TableBody';
import TableHead from './TableHead';

export type TableCoreProps = {
	headers: ReactNode[],
	rows: ReactNode[][]
}

const TableCore = ({ headers, rows }: TableCoreProps) => {
	return (
		<MuiTableContainer>
			<MuiTable>
				<TableHead headers={headers} />
				<TableBody rows={rows} />
			</MuiTable>
		</MuiTableContainer>
	);
};

export default TableCore;
