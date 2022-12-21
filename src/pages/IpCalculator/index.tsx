import React from 'react';

import Typography from '@/components/layout/Typography';
import Divider from '@/components/layout/Divider';
import Stack from '@/components/layout/Stack';

import CalcContainer from './containers/CalcContainer';
import IpCompareResultContainer from './containers/IpCompareResultContainer';
import { useHooks } from './hooks';


const IpCalculator = () => {
	const {
		sourceIp,
		setSourceIpHandler,
		distIp,
		setDistIpHandler,
		calculatedCounter,
		compare
	} = useHooks();
	console.log(calculatedCounter);
	return (
		<>
			<Typography variant='h5'>IPアドレス計算機</Typography>
			<Stack direction='row' width="100%" spacing={2}>
				<CalcContainer title='source' ip={sourceIp} setHandler={setSourceIpHandler}/>
				<CalcContainer title='dist' ip={distIp} setHandler={setDistIpHandler}/>
			</Stack>
			<Divider />
			{calculatedCounter >= 2 && (
				<IpCompareResultContainer compare={compare} />
			)}
		</>
	);
};

export default IpCalculator;
