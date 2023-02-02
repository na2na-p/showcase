import React from 'react';
import LibReactMarkdown from 'react-markdown';
import type { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import type { NormalComponents } from 'react-markdown/lib/complex-types';

const ReactMarkdown = ({ markdown, components }: {markdown: string, components: Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents>}) => {
	return (
		// eslint-disable-next-line react/no-children-prop
		<LibReactMarkdown children={markdown} components={components} />
	);
};

export default ReactMarkdown;
