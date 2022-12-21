/* eslint-disable valid-jsdoc */
import { ipBin, ipObj } from '../types/types.js';

/**
 * 引数として渡されたIPアドレスのネットワークアドレスを計算するクラス。
 * @class CalcIp
 */
export class CalcIp {
	#ip: ipBin;
	#subnet: ipBin;
	#cidr?: number;
	#networkAddress: ipBin;
	#broadcastAddress: ipBin;
	#hostAddress: ipBin;
	ipString(): string {
		return CalcIp.addToDottedDecimalNotation(this.#ip);
	}
	subnetString(): string {
		return CalcIp.addToDottedDecimalNotation(this.#subnet);
	}
	networkAddressString(): string {
		return CalcIp.addToDottedDecimalNotation(this.#networkAddress);
	}
	getIp(): ipBin {
		return this.#ip;
	}
	getSubnet(): ipBin {
		return this.#subnet;
	}
	getCidr(): number | undefined {
		return this.#cidr;
	}
	getNetworkAddress(): ipBin {
		return this.#networkAddress;
	}
	getBroadcastAddress(): ipBin {
		return this.#broadcastAddress;
	}
	getHostAddress(): ipBin {
		return this.#hostAddress;
	}

	constructor(ip: string, subnet?: string) {
		if (subnet == undefined) {
			const subnetCidr = ip.split('/')[1] as string;
			this.#subnet = this.parseSubnetFromCidr(subnetCidr);
			this.#cidr = parseInt(subnetCidr);
			const ipStr = ip.split('/')[0] as string;
			this.#ip = this.parseIp(ipStr);
		} else {
			this.#subnet = this.parseSubnet(subnet);
			this.#ip = this.parseIp(ip);
		}

		// ネットワークアドレスを計算する。
		this.#networkAddress = this.#ip & this.#subnet;

		// ホストアドレス部の取り出し
		this.#hostAddress = this.#subnet ^ 4294967295n;

		// ブロードキャストアドレス
		this.#broadcastAddress = this.#networkAddress | this.#hostAddress;
	}

	/**
	 * サブネットマスクを都合のいい形の文字列で返すメソッド。
	 * @param #subnet サブネットマスク(3ケタ区切りのアレ) 例: "255.255.255.0"
	 * @return {bigint}
	 */
	private parseSubnet(subnet: string): bigint {
		// 実はparseIp()と一緒
		return this.parseIp(subnet);
	}

	/**
	 * CIDR形式のあの末尾の数字からサブネットマスクを求めるメソッド
	 * @param #cidr CIDR形式のあの末尾の数字 例: "24"
	 * @return {bigint} サブネットマスクを表す10進数の文字列
	 */
	private parseSubnetFromCidr(cidr: string): bigint {
		// -1をビットシフトして、サブネットマスクを求める。
		return (BigInt(Math.pow(2, 32) - 1) >> BigInt(32 - parseInt(cidr))) << BigInt(32 - parseInt(cidr));
	}

	/**
	 * IPアドレスを二進数の形式の文字列で返すメソッド。
	 * @param #ip IPアドレスを表す文字列 例: "192.168.0.1"
	 * @return {bigint} IPアドレスを表す10進数
	 */
	private parseIp(ip: string): bigint {
		const dividedIp = ip.split('.').reverse();
		const byte = 8;

		return BigInt(
			dividedIp.reduce((accumulator, v, idx) => {
				const binary = (parseInt(v, 10) << (byte * idx)) >>> 0;
				return accumulator + binary;
			}, 0)
		);
	}

	/**
	 * thisで持ってるprivate変数オウム返し(テスト用)
	 * @return {ipObj}
	 */
	public getBinIpObj(): ipObj {
		return {
			ip: this.#ip,
			subnet: this.#subnet,
			networkAddress: this.#networkAddress,
			broadcastAddress: this.#broadcastAddress,
			hostAddress: this.#hostAddress,
			cidr: this.#cidr
		};
	}

	static addToDottedDecimalNotation(ipSrc: ipBin): string {
		// 2進数表記で表されたIPアドレスを、3ケタ区切りの文字列に変換する。
		// 256進数と解釈できるのでいい感じにする。
		const ipString: string[] = [];
		let tempIp = ipSrc;
		for (let i = 4; i > 0; i--) {
			const ip = tempIp >> BigInt(8 * (i - 1));
			tempIp = tempIp - (ip << BigInt(8 * (i - 1)));
			ipString.push(ip.toString());
			if (i > 1) {
				ipString.push('.');
			}
		}
		// foreachで4回
		return ipString.join('');
	}

	public getAllProperties(): ipObj {
		return {
			ip: this.#ip,
			subnet: this.#subnet,
			networkAddress: this.#networkAddress,
			broadcastAddress: this.#broadcastAddress,
			hostAddress: this.#hostAddress,
			cidr: this.#cidr
		};
	}
}
