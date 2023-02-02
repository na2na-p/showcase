import { useRef } from 'react';

type UseHooksType = {
	setter: (result: string) => void
}

export const useHooks = ({ setter }: UseHooksType) => {
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
