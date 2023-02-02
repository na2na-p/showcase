import React, { useRef } from 'react';

import Button from '@/components/input/Button';
import TextField from '@/components/input/TextField';
import Stack from '@/components/layout/Stack';
import Typography from '@/components/layout/Typography';
import isNil from '@/utils/isNil';

import { CalcIp } from '../../utils/mod';
import type { IpObj } from '../../utils/types/types';

export type CalcContainerProps = {
	title: string;
	ip: CalcIp;
	setHandler: (ip: string) => void;
}

const CalcContainer = ({ title, ip, setHandler }: CalcContainerProps) => {
	const [result, setResult] = React.useState<IpObj | null>(null);

	const ref = useRef<HTMLInputElement>(null);

	const onButtonClick = () => {
		// 入力されたIPアドレスを取得
		const input = ref.current?.value;
		console.log(input);
		if (isNil(input)) return;
		const calculated = setHandler(input);
		setResult(ip.getAllProperties());
	};

	return (
		<Stack spacing={2} width="100%">
			<Typography variant='h5'>{title}</Typography>
			<TextField placeholder='IPアドレスを入力してください' inputRef={ref} defaultValue={`${CalcIp.addToDottedDecimalNotation(ip.getIp())}/${ip.getCidr()}`} fullWidth />
			<Button onClick={onButtonClick} variant="contained">計算</Button>
			{result && (
				<Stack>
					<Typography variant='h5'>IPアドレス</Typography>
					<Typography variant='body1'>{String(CalcIp.addToDottedDecimalNotation(result.ip))}</Typography>
					<Typography variant='h5'>ネットワークアドレス</Typography>
					<Typography variant='body1'>{String(CalcIp.addToDottedDecimalNotation(result.networkAddress))}</Typography>
					<Typography variant='h5'>ブロードキャストアドレス</Typography>
					<Typography variant='body1'>{String(CalcIp.addToDottedDecimalNotation(result.broadcastAddress))}</Typography>
					<Typography variant='h5'>サブネットマスク</Typography>
					<Typography variant='body1'>{String(CalcIp.addToDottedDecimalNotation(result.subnet))}</Typography>
					<Typography variant='h5'>ホストアドレス</Typography>
					<Typography variant='body1'>{String(CalcIp.addToDottedDecimalNotation(result.hostAddress))}</Typography>
					<Typography variant='h5'>CIDR</Typography>
					<Typography variant='body1'>{result.cidr}</Typography>
				</Stack>
			)}
		</Stack>
	);
};

// Label: Textのように表示するコンポーネント
const LabelAndText = ({ label, text }: { label: string, text: string }) => {
	return (
		<Stack spacing={1}>
			<Typography variant='h5'>{label}</Typography>
			<Typography variant='body1'>{text}</Typography>
		</Stack>
	);
};
export default CalcContainer;
