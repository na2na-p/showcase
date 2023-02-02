import { CheckboxProps } from '@/components/input/Checkbox';
import { createElement, FC, useMemo, useState } from 'react';

type Permission = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export const useHooks = (Checkbox: FC<CheckboxProps>) => {
	const [owner, setOwner] = useState<number>(0);
	const [group, setGroup] = useState<number>(0);
	const [others, setOthers] = useState<number>(0);
	const headers = ['/', 'Owner', 'Group', 'Other'];

	const checkboxStates = useMemo(() => {
		return {
			owner: {
				read: owner & 4 ? true : false,
				write: owner & 2 ? true : false,
				execute: owner & 1 ? true : false
			},
			group: {
				read: group & 4 ? true : false,
				write: group & 2 ? true : false,
				execute: group & 1 ? true : false
			},
			others: {
				read: others & 4 ? true : false,
				write: others & 2 ? true : false,
				execute: others & 1 ? true : false
			}
		};
	}, [others, owner, group]);

	console.log(checkboxStates);

	const onClickHandlers = useMemo(() => {
		return {
			owner: {
				read: () =>
					setOwner(checkboxStates.owner.read ? owner - 4 : owner + 4),
				write: () =>
					setOwner(checkboxStates.owner.write ? owner - 2 : owner + 2),
				execute: () =>
					setOwner(checkboxStates.owner.execute ? owner - 1 : owner + 1)
			},
			group: {
				read: () =>
					setGroup(checkboxStates.group.read ? group - 4 : group + 4),
				write: () =>
					setGroup(checkboxStates.group.write ? group - 2 : group + 2),
				execute: () =>
					setGroup(checkboxStates.group.execute ? group - 1 : group + 1)
			},
			others: {
				read: () =>
					setOthers(checkboxStates.others.read ? others - 4 : others + 4),
				write: () =>
					setOthers(checkboxStates.others.write ? others - 2 : others + 2),
				execute: () =>
					setOthers(checkboxStates.others.execute ? others - 1 : others + 1)
			}
		};
	}, [checkboxStates, others, owner, group]);

	const bodies = useMemo(() => {
		return [
			[
				'Read',
				createElement(Checkbox, {
					checked: checkboxStates.owner.read,
					onClick: onClickHandlers.owner.read
				}),
				createElement(Checkbox, {
					checked: checkboxStates.group.read,
					onClick: onClickHandlers.group.read
				}),
				createElement(Checkbox, {
					checked: checkboxStates.others.read,
					onClick: onClickHandlers.others.read
				})
			],
			[
				'Write',
				createElement(Checkbox, {
					checked: checkboxStates.owner.write,
					onClick: onClickHandlers.owner.write
				}),
				createElement(Checkbox, {
					checked: checkboxStates.group.write,
					onClick: onClickHandlers.group.write
				}),
				createElement(Checkbox, {
					checked: checkboxStates.others.write,
					onClick: onClickHandlers.others.write
				})
			],
			[
				'Execute',
				createElement(Checkbox, {
					checked: checkboxStates.owner.execute,
					onClick: onClickHandlers.owner.execute
				}),
				createElement(Checkbox, {
					checked: checkboxStates.group.execute,
					onClick: onClickHandlers.group.execute
				}),
				createElement(Checkbox, {
					checked: checkboxStates.others.execute,
					onClick: onClickHandlers.others.execute
				})
			]
		];
	}, [Checkbox, checkboxStates, onClickHandlers]);

	return {
		headers,
		bodies
	};
};
