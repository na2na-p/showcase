const EventHandler = () => {
	const onBlurHandler = () => {
		alert('onBlur');
	};

	const onChangeHandler = () => {
		alert('onChange');
	};

	return (
		<>
			<fieldset>
				<label>
					<input
						type="radio"
						name="radio"
						value="foo"
						onBlur={onBlurHandler}
						onChange={onChangeHandler}
					/>
        foo
				</label>
				<br />
				<label>
					<input
						type="radio"
						name="radio"
						value="bar"
						onBlur={onBlurHandler}
						onChange={onChangeHandler}
					/>
        bar
				</label>
				<br />
				<label>
					<input
						type="radio"
						name="radio"
						value="baz"
						onBlur={onBlurHandler}
						onChange={onChangeHandler}
					/>
        baz
				</label>
			</fieldset>
			<label>
				<input
					type="checkbox"
					name="checkbox"
					value="hoge"
					onBlur={onBlurHandler}
					onChange={onChangeHandler}
				/>
        hoge
			</label>
		</>
	);
};

export default EventHandler;
