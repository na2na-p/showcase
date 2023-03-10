import MuiTableBody from '@mui/material/TableBody';
import MuiTableRow from '@mui/material/TableRow';
import type { ReactNode } from 'react';
import React from 'react';

import Cell from '../Cell';

const TableBody = ({ rows }: { rows: ReactNode[][] }) => {
	return (
		<MuiTableBody>
			{rows.map((row, index) => (
				<MuiTableRow key={index}>
					{row.map((cell, index) => (
						<Cell key={index}>{cell}</Cell>
					))}
				</MuiTableRow>
			))}
		</MuiTableBody>
	);
};

export default TableBody;
