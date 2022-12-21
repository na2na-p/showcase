import React from 'react';
import { Divider, SxProps } from '@mui/material';

export default () => {
	const sx: SxProps = {
		// 上下に余白
		marginTop: 2,
		marginBottom: 2
	};
	return <Divider sx={sx} />;
};
