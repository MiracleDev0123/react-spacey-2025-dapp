import { useContext, useEffect, useState } from "react";
import { Web3ModalContext } from "../contexts/Web3ModalProvider";
import ERC20Contract from "../contracts/ERC20.json";
import { BigNumber } from "ethers";
import { tokenAddresses } from "../blockchain/constants";
let Web3 = require("web3");

function useBalance(chainId: number) {
  const { account } = useContext(Web3ModalContext);
  const [balance, setBalance] = useState<BigNumber>(BigNumber.from(0));

  const web3 = new Web3(
    "https://rinkeby.infura.io/v3/60876f0b9ef649cf8aa2adeac58f4934"
  );

  useEffect(() => {
    if (!account) return;
    const contract = new web3.eth.Contract(
      ERC20Contract,
      tokenAddresses[chainId]
    );

    const getBalance = async () => {
      const bal = await contract.methods.balanceOf(account).call();
      if (bal) {
        setBalance(BigNumber.from(bal));
      }
    };
    getBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, chainId]);

  return balance;
}

export default useBalance;
