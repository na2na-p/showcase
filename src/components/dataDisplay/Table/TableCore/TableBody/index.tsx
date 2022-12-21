import React, { ReactNode } from 'react';

import MuiTableBody from '@mui/material/TableBody';
import MuiTableRow from '@mui/material/TableRow';
import Cell from '../Cell';

export default ({ rows }: { rows: ReactNode[][] }) => {
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
