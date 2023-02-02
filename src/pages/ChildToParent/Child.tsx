import type { Dispatch, SetStateAction, ChangeEvent } from 'react';
import React from 'react';

import TextField from '@/components/input/TextField';

type ChildProps = {
	setName: Dispatch<SetStateAction<string>>
}

const Child = ({ setName }: ChildProps) => {
	const textFieldOnChange = (
		e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		setName(e.target.value);
	};

	return (
		<>
			<TextField
				label="名前"
				variant="outlined"
				size="small"
				onChange={textFieldOnChange}
			/>
		</>
	);
};

export default Child;
