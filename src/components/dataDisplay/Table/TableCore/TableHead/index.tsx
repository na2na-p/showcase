import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import type { ReactNode } from 'react';
import React from 'react';

import Cell from '../Cell';

const TableHead = ({ headers }: { headers: ReactNode[] }) => {
	return (
		<MuiTableHead>
			<MuiTableRow>
				{headers.map((header, index) => (
					<Cell key={index}>{header}</Cell>
				))}
			</MuiTableRow>
		</MuiTableHead>
	);
};

export default TableHead;
