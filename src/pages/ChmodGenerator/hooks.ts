import { CheckboxProps } from '@/components/input/Checkbox';
import { createElement, FC, useMemo, useState } from 'react';

type Permission = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

import PERMISSION_LEVELS from './PERMISSION_LEVELS';

export const useHooks = (Checkbox: FC<CheckboxProps>) => {
	const [owner, setOwner] = useState<number>(0);
	const [group, setGroup] = useState<number>(0);
	const [others, setOthers] = useState<number>(0);
	const headers = ['\u00A0', 'Owner', 'Group', 'Other'];

	const checkboxStates = useMemo(() => {
		return {
			owner: {
				read: owner & PERMISSION_LEVELS.read ? true : false,
				write: owner & PERMISSION_LEVELS.write ? true : false,
				execute: owner & PERMISSION_LEVELS.execute ? true : false
			},
			group: {
				read: group & PERMISSION_LEVELS.read ? true : false,
				write: group & PERMISSION_LEVELS.write ? true : false,
				execute: group & PERMISSION_LEVELS.execute ? true : false
			},
			others: {
				read: others & PERMISSION_LEVELS.read ? true : false,
				write: others & PERMISSION_LEVELS.write ? true : false,
				execute: others & PERMISSION_LEVELS.execute ? true : false
			}
		};
	}, [others, owner, group]);

	const onClickHandlers = useMemo(() => {
		return {
			owner: {
				read: () => setOwner(checkboxStates.owner.read ? owner - PERMISSION_LEVELS.read : owner + PERMISSION_LEVELS.read),
				write: () =>
					setOwner(checkboxStates.owner.write ? owner - PERMISSION_LEVELS.write : owner + PERMISSION_LEVELS.write),
				execute: () =>
					setOwner(checkboxStates.owner.execute ? owner - PERMISSION_LEVELS.execute : owner + PERMISSION_LEVELS.execute)
			},
			group: {
				read: () => setGroup(checkboxStates.group.read ? group - PERMISSION_LEVELS.read : group + PERMISSION_LEVELS.read),
				write: () =>
					setGroup(checkboxStates.group.write ? group - PERMISSION_LEVELS.write : group + PERMISSION_LEVELS.write),
				execute: () =>
					setGroup(checkboxStates.group.execute ? group - PERMISSION_LEVELS.execute : group + PERMISSION_LEVELS.execute)
			},
			others: {
				read: () =>
					setOthers(checkboxStates.others.read ? others - PERMISSION_LEVELS.read : others + PERMISSION_LEVELS.read),
				write: () =>
					setOthers(checkboxStates.others.write ? others - PERMISSION_LEVELS.write : others + PERMISSION_LEVELS.write),
				execute: () =>
					setOthers(checkboxStates.others.execute ? others - PERMISSION_LEVELS.execute : others + PERMISSION_LEVELS.execute)
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
			],
			['Result', owner, group, others]
		];
	}, [Checkbox, checkboxStates, onClickHandlers, owner, group, others]);

	return {
		headers,
		bodies
	};
};
