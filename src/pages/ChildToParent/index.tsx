import React, { useState } from 'react';

import Typography from '@/components/layout/Typography';
import Divider from '@/components/layout/Divider';

import Child from './Child';

const ChildToParent = () => {
	const [name, setName] = useState('');

	return (
		<>
			<Typography variant='h5'>子から親に(見かけ上は)値が渡るやつ</Typography>
			<Divider />
			<Child setName={setName} />
			<Divider />
			<div>名前: {name}</div>
		</>
	);
};

export default ChildToParent;
