import { describe, expect, test } from 'vitest';

import { CalcIp, Compare, Output } from '../utils/mod';

// mochaを利用したテストコード
const inputWithCIDR = '172.16.0.254/16';
const calcWithCIDR = new CalcIp(inputWithCIDR);

const inputIp = '10.128.32.1';
const inputSubnet = '255.0.0.0';
const calc = new CalcIp(inputIp, inputSubnet);
describe('CalcIpクラスのテスト', () => {
	describe('CIDR形式での入力', () => {
		test('IPを10進数に変換ができている', () => {
			expect(calcWithCIDR.getBinIpObj().ip).deep.equal(BigInt(0b10101100000100000000000011111110));
		});
		test('IPアドレスを元の10進表記に戻せる', () => {
			expect(calcWithCIDR.ipString()).deep.equal('172.16.0.254');
		});
		test('サブネットマスクを10進数に変換ができている', () => {
			expect(calcWithCIDR.getBinIpObj().subnet).deep.equal(BigInt(0b11111111111111110000000000000000));
		});
		test('サブネットマスクを10進表記に戻せる', () => {
			expect(calcWithCIDR.subnetString()).deep.equal('255.255.0.0');
		});
		test('マスクビットの取得ができる', () => {
			expect(calcWithCIDR.getBinIpObj().cidr).deep.equal(16);
		});
		test('ネットワークアドレスの取得ができる', () => {
			expect(calcWithCIDR.getBinIpObj().networkAddress).deep.equal(BigInt(0b10101100000100000000000000000000));
		});
		test('ホストアドレス部の取得ができる', () => {
			expect(calcWithCIDR.getBinIpObj().hostAddress).deep.equal(BigInt(0b00000000000000001111111111111111));
		});
		// test('ホストアドレス部を10進表記にできる', () => {
		// 	expect(calc.getBinIpObj().hostAddress.addToDottedDecimalNotation()).deep.equal('0.0.255.255');
		// });
		test('ブロードキャストアドレスの取得ができる', () => {
			expect(calcWithCIDR.getBinIpObj().broadcastAddress).deep.equal(BigInt(0b10101100000100001111111111111111));
		});
	});
	describe('IPアドレス + サブネットマスク形式での入力', () => {
		test('IPを10進数に変換ができている', () => {
			expect(calc.getBinIpObj().ip).deep.equal(BigInt(0b00001010100000000010000000000001));
		});
		test('IPアドレスを元の10進表記に戻せる', () => {
			expect(calc.ipString()).deep.equal('10.128.32.1');
		});
		test('サブネットマスクを10進数に変換ができている', () => {
			expect(calc.getBinIpObj().subnet).deep.equal(BigInt(0b11111111000000000000000000000000));
		});
		test('サブネットマスクを元の10進表記に戻せる', () => {
			expect(calc.subnetString()).deep.equal('255.0.0.0');
		});
		// test('マスクビットの取得ができる', () => {
		// 	expect(calc.getBinIpObj().cidr).deep.equal(12);
		// });
		test('ネットワークアドレスの取得ができる', () => {
			expect(calc.getBinIpObj().networkAddress).deep.equal(BigInt(0b00001010000000000000000000000000));
		});
		test('ネットワークアドレスを10進表記に戻せる', () => {
			expect(calc.networkAddressString()).deep.equal('10.0.0.0');
		});
		test('ホストアドレス部の取得ができる', () => {
			expect(calc.getBinIpObj().hostAddress).deep.equal(BigInt(0b00000000111111111111111111111111));
		});
		test('ブロードキャストアドレスの取得ができる', () => {
			expect(calc.getBinIpObj().broadcastAddress).deep.equal(BigInt(0b00001010111111111111111111111111));
		});
	});
});

const compareIp = '172.16.252.253/16';
const compareSucess = new CalcIp(compareIp);

const compareToIp = '172.17.1.1';
const compareFailSubnet = '255.255.255.0';
const compareFail = new CalcIp(compareToIp, compareFailSubnet);

describe('Compareクラスのテスト', () => {
	const compareSuccessBoth = new Compare(calcWithCIDR, compareSucess);
	describe('正常系', () => {
		describe('双方ともに疎通可能', () => {
			test('疎通確認結果: source -> dist', () => {
				expect(compareSuccessBoth.result.sourceToDist).deep.equal(true);
			});
			test('疎通確認結果: dist -> source', () => {
				expect(compareSuccessBoth.result.distToSource).deep.equal(true);
			});
		});
		describe('双方ともに疎通不可', () => {
			const compareFailBoth = new Compare(calcWithCIDR, compareFail);
			test('疎通確認結果: source -> dist', () => {
				expect(compareFailBoth.result.sourceToDist).deep.equal(false);
			});
			test('疎通確認結果: dist -> source', () => {
				expect(compareFailBoth.result.distToSource).deep.equal(false);
			});
		});
		describe('サーバからクライアントのみ通信可', () => {
			const server = new CalcIp('192.168.144.2', '255.255.0.0');
			const client = new CalcIp('192.168.130.130', '255.255.240.0');
			const compareSucessSource = new Compare(server, client);
			test('疎通確認結果: source -> dist', () => {
				expect(compareSucessSource.result.sourceToDist).deep.equal(true);
			});
			test('疎通確認結果: dist -> source', () => {
				expect(compareSucessSource.result.distToSource).deep.equal(false);
			});
		});
	});
	describe('準正常系', () => {
		describe('どちらか片方のIPがネットワークアドレス', () => {
			const server = new CalcIp('192.168.130.2', '255.255.255.0');
			const client = new CalcIp('192.168.130.0', '255.255.255.0');
			const compareSucessSource = new Compare(server, client);
			test('疎通確認結果: source -> dist', () => {
				expect(compareSucessSource.result.sourceToDist).deep.equal(false);
			});
			test('疎通確認結果: dist -> source', () => {
				expect(compareSucessSource.result.distToSource).deep.equal(false);
			});
		});
		describe('どちらか片方のIPがブロードキャストアドレス', () => {
			const server = new CalcIp('192.168.130.255', '255.255.255.0');
			const client = new CalcIp('192.168.130.2', '255.255.255.0');
			const compareSucessSource = new Compare(server, client);
			test('疎通確認結果: source -> dist', () => {
				expect(compareSucessSource.result.sourceToDist).deep.equal(false);
			});
			test('疎通確認結果: dist -> source', () => {
				expect(compareSucessSource.result.distToSource).deep.equal(false);
			});
		});
		describe('どちらのIPも同一', () => {
			const server = new CalcIp('192.168.130.2', '255.255.240.0');
			const client = new CalcIp('192.168.130.2', '255.255.255.0');
			const compareSucessSource = new Compare(server, client);
			test('疎通確認結果: source -> dist', () => {
				expect(compareSucessSource.result.sourceToDist).deep.equal(false);
			});
			test('疎通確認結果: dist -> source', () => {
				expect(compareSucessSource.result.distToSource).deep.equal(false);
			});
		});
	});
});
