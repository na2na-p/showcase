import React, { ReactNode } from 'react';

import MuiTable from '@mui/material/Table';
import MuiTableContainer from '@mui/material/TableContainer';

import TableHead from './TableHead';
import TableBody from './TableBody';

export type TableCoreProps = {
	headers: ReactNode[],
	rows: ReactNode[][]
}

export default ({ headers, rows }: TableCoreProps) => {
	return (
		<MuiTableContainer>
			<MuiTable>
				<TableHead headers={headers} />
				<TableBody rows={rows} />
			</MuiTable>
		</MuiTableContainer>
	);
};
