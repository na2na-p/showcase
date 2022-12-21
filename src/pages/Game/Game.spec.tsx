// import '@testing-library/jest-dom'; // jestのアサーションがエラーになる場合は明示的にimport
import { describe, expect, test } from 'vitest';
import Game from '.';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('Game component', () => {
	test('レンダリングテスト', () => {
		const { container } = render(<Game />);
		expect(container).toMatchSnapshot();
	});

	describe('数当てテスト', () => {
		test('正解した場合', () => {
			render(<Game answer={20} />);
			const input: HTMLInputElement = screen.getByPlaceholderText('いくつでしょう?');
			const button: HTMLButtonElement = screen.getByRole('button', { name: 'トライ!' });
			act(() => {
				input.value = '20';
				button.click();
			});
			expect(screen.getByText('正解')).toBeInTheDocument();
		});

		test('数が大きすぎた場合', () => {
			render(<Game answer={20} />);
			const input: HTMLInputElement = screen.getByPlaceholderText('いくつでしょう?');
			const button: HTMLButtonElement = screen.getByRole('button', { name: 'トライ!' });
			act(() => {
				input.value = '30';
				button.click();
			});
			expect(screen.getByText('もっと小さい')).toBeInTheDocument();
		});

		test('数が小さすぎた場合', () => {
			render(<Game answer={20} />);
			const input: HTMLInputElement = screen.getByPlaceholderText('いくつでしょう?');
			const button: HTMLButtonElement = screen.getByRole('button', { name: 'トライ!' });
			act(() => {
				input.value = '10';
				button.click();
			});
			expect(screen.getByText('もっと大きい')).toBeInTheDocument();
		});
	});
});
