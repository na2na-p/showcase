import { Divider as MuiDivider, SxProps } from '@mui/material';

const Divider = () => {
	const sx: SxProps = {
		// 上下に余白
		marginTop: 2,
		marginBottom: 2
	};
	return <MuiDivider sx={sx} />;
};

export default Divider;
