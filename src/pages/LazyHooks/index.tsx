import React, { useState, useRef } from 'react';

import { TextField } from '@mui/material';

import Button from '@/components/input/Button';
import Typography from '@/components/layout/Typography';
import Divider from '@/components/layout/Divider';
import ReactMarkdown from '@/components/dataDisplay/ReactMarkdown';
import CodeBlock from '@/components/dataDisplay/CodeBlock';

import LazyHooks from './LazyHooks';

export default () => {
	const [value, setValue] = useState<string | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		setValue(inputRef.current?.value || null);
	};

	return (
		<>
			{/* valueがnullでなければLazyHooksを呼び出す */}
			{value && <LazyHooks value={value} />}
			<Typography variant='h5'>Valueに値が入るまでHookが走らない</Typography>
			<TextField
				label="value"
				variant="outlined"
				size="small" inputRef={inputRef} />
			<Button variant="contained" onClick={handleClick}>値のセット</Button>
			<Divider />
			<ReactMarkdown markdown={`\`\`\`
{/* valueがnullでなければLazyHooksを呼び出す */}
{value && <LazyHooks value={value} />}
<Typography variant='h5'>Valueに値が入るまでHookが走らない</Typography>
<TextField
	label="value"
	variant="outlined"
	size="small" inputRef={inputRef} />
<Button variant="contained" onClick={handleClick}>値のセット</Button>`} components={{
				code: CodeBlock
			}}/>
			<ReactMarkdown markdown={`\`\`\`
const useLazyHooks = ({ value }: { value: string }) => {
	alert(\`ここでHookを発火させた: \${value}\`);
};

export default ({ value }: { value: string }) => {
	useLazyHooks({ value });
	return <></>;
};
`} components={{
				code: CodeBlock
			}}/>
		</>
	);
};
