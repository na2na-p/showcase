export type IpObj = {
    ip: IpBin;
    subnet: IpBin;
    networkAddress: IpBin;
    broadcastAddress: IpBin;
    hostAddress: IpBin;
    cidr: number | undefined;
}

export type IpBin = bigint;

export type ResultType = {
	source: {
		ip: string;
		subnet: string;
		netAddr: string;
		otherNetAddr: string;
	},
	dist: {
		ip: string;
		subnet: string;
		netAddr: string;
		otherNetAddr: string;
	},
	sourceToDist: boolean;
	distToSource: boolean;
};
