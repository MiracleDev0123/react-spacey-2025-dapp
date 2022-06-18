import Web3 from 'web3';
// import { BNtoNum, NumToBN } from './utils';

export default class Web3Wrapper {

  web3: Web3;
  chainId: number;
  account: string;
  wrapperOptions: any;

  // TODO: Contracts

  constructor(web3: Web3, chainId: number, account: string, options: any = {}) {
    this.web3 = web3;
    this.chainId = chainId;
    this.account = account;

    this.wrapperOptions = {
      web3, chainId, account,
      ...options
    }
  }

  async getAccountData() {
    //TODO 
    return {
    }
  }
}
