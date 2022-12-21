import { useState, useEffect, useMemo, useCallback } from 'react';

import { CalcIp, Compare } from './utils/mod';

export const useHooks = () => {
	const defaultSourceIp = new CalcIp('192.168.0.1/24');
	// const defaultDistIp = new CalcIp('10.192.30.1/12');
	const defaultDistIp = new CalcIp('192.168.1.2/23');
	const [sourceIp, setSourceIp] = useState<CalcIp>(defaultSourceIp);
	const [distIp, setDistIp] = useState<CalcIp>(defaultDistIp);
	const [calculatedCounter, setCalculatedCounter] = useState<number>(0);

	const setSourceIpHandler = useCallback((ip: string) => {
		setSourceIp(new CalcIp(ip));
		setCalculatedCounter(calculatedCounter + 1);
		console.log(calculatedCounter);
	}, [calculatedCounter]);

	const setDistIpHandler = useCallback((ip: string) => {
		setDistIp(new CalcIp(ip));
		setCalculatedCounter(calculatedCounter + 1);
		console.log(calculatedCounter);
	}, [calculatedCounter]);

	const [compare, setCompare] = useState<Compare>(new Compare(sourceIp, distIp));
	useEffect(() => {
		console.log('IpCompareResultContainer useEffect');
		setCompare(new Compare(sourceIp, distIp));
	}, [sourceIp, distIp]);

	return {
		sourceIp,
		setSourceIpHandler,
		distIp,
		setDistIpHandler,
		calculatedCounter,
		compare
	};
};
