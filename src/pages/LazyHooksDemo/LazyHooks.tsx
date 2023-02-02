const useLazyHooks = ({ value }: { value: string }) => {
	alert(`ここでHookを発火させた: ${value}`);
};

const LazyHooks = ({ value }: { value: string }) => {
	useLazyHooks({ value });
	return <></>;
};

export default LazyHooks;
