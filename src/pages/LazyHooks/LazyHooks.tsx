import React from 'react';

const useLazyHooks = ({ value }: { value: string }) => {
	alert(`ここでHookを発火させた: ${value}`);
};

export default ({ value }: { value: string }) => {
	useLazyHooks({ value });
	return <></>;
};
