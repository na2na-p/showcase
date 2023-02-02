import React, { ReactNode } from 'react';

import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
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
