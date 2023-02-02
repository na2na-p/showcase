import { useMemo } from 'react';

import Table from '@/components/dataDisplay/Table';
import Checkbox from '@/components/input/Checkbox';
import Stack from '@/components/layout/Stack';
import Typography from '@/components/layout/Typography';
import { useHooks } from './hooks';

const chmodGenerator = () => {
	const { headers, bodies } =
		useHooks(Checkbox);
	// TODO: chmod逆引きするやつ
	return (
		<>
			<Typography variant="h5">chmodジェネレータ</Typography>
			{/* TextInput生やして逆引き用のあれこれする */}
			<Table headers={headers} rows={bodies} />
		</>
	);
};

export default chmodGenerator;
