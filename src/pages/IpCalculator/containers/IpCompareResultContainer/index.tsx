import React, { useEffect } from 'react';

import Stack from '@/components/layout/Stack';
import Typography from '@/components/layout/Typography';

import type { Compare } from '../../utils/mod';
import { CalcIp } from '../../utils/mod';

const IpCompareResultContainer = ({ compare }: { compare: Compare }) => {
	return (
		<>
			{compare && (
				<>
					<Typography variant='h5'>疎通可否</Typography>
					<Stack direction="row" spacing={2}>
						<Typography variant='body1'>{'source -> dist'}</Typography>
						<Typography variant='body1'>{compare.result.sourceToDist ? '疎通可能' : '疎通不可'}</Typography>
					</Stack>
					<Stack direction="row" spacing={2}>
						<Typography variant='body1'>{'dist -> source'}</Typography>
						<Typography variant='body1'>{compare.result.distToSource ? '疎通可能' : '疎通不可'}</Typography>
					</Stack>
				</>
			)}
		</>
	);
};

export default IpCompareResultContainer;
