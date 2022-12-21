import { useRef } from 'react';

type useHooksType = {
	setter: (result: string) => void
}

export const useHooks = ({ setter }: useHooksType) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const onButtonClick = () => {
		if (inputRef.current) {
			const inputValue = inputRef.current.value;
			setter(inputValue);
		}
	};
	return {
		inputRef,
		onButtonClick
	};
};
