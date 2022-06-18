export const defaultChainId = 1;
// export const MetaspaceBridgeAddress = {
//   "4": "0xc10641031430cF29579f829952b118f1d873bbc2"
// }
export const rpcUrls = {
  1: "https://mainnet.infura.io/v3/" + process.env.REACT_APP_INFURA_PROJECT_ID,
  4: "https://rinkeby.infura.io/v3/" + process.env.REACT_APP_INFURA_PROJECT_ID,
  56: "https://bsc-dataseed.binance.org/",
};

export const networkNames = {
  1: "Ethereum Mainnet",
  4: "Rinkeby Test Network",
  56: "Binance Smart Chain",
};

interface TokenAddresses {
  [key: number]: string;
}

export const tokenAddresses: TokenAddresses = {
  1: "0x58FaD9E3C3AE54c9BA98c3f0E4bF88aB3E8Cf3c5",
  4: "0x2dc56919feb74d25063da852f8539f4f325752a6",
  56: "0x13A637026dF26F846D55ACC52775377717345c06",
};
