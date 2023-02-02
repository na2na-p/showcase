import { CalcIp } from './CalcIp.js';
import type { ResultType, IpBin } from '../types/types.js';


export class Compare {
	private source: CalcIp;
	private dist: CalcIp;
	public result: ResultType;

	constructor(source: CalcIp, dist: CalcIp) {
		this.source = source;
		this.dist = dist;

		this.result = {
			source: {
				ip: this.source.ipString(),
				subnet: this.source.subnetString(),
				netAddr: this.source.networkAddressString(),
				otherNetAddr: CalcIp.addToDottedDecimalNotation(this.calcOtherNetAddr(this.source, this.dist))
			},
			dist: {
				ip: this.dist.ipString(),
				subnet: this.dist.subnetString(),
				netAddr: this.dist.networkAddressString(),
				otherNetAddr: CalcIp.addToDottedDecimalNotation(this.calcOtherNetAddr(this.dist, this.source))
			},
			sourceToDist: this.checkCanReach(this.source, this.dist),
			distToSource: this.checkCanReach(this.dist, this.source)
		};
	}

	private checkCanReach(myHost: CalcIp, distHost: CalcIp): boolean {
		// 自身がネットワークアドレス or ブロードキャストアドレスの場合はfalse
		if (myHost.getIp() === myHost.getNetworkAddress() || myHost.getIp() === myHost.getBroadcastAddress()) {
			return false;
		}

		// 自身のネットワークアドレスと相手のIPが一致したらfalse
		if (myHost.getIp() === distHost.getIp()) {
			return false;
		}

		// networkAddress <= host <= broadcastAddress
		if (myHost.getNetworkAddress() < distHost.getIp() && distHost.getIp() < myHost.getBroadcastAddress()) {
			return true;
		}

		return false;
	}

	private calcOtherNetAddr(myHost: CalcIp, distHost: CalcIp): IpBin {
		// myHostのsubnetを利用してdistHostのネットワークアドレスを計算する
		return distHost.getIp() & myHost.getSubnet();
	}
}
