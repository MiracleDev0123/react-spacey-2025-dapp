/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useContext } from "react";
import { Web3WrapperContext } from "../contexts/Web3WrapperProvider";
//智能合约对应Abi文件
import DidRegistryContract from "../contracts/Faucet.json";
let Web3 = require("web3");
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/60876f0b9ef649cf8aa2adeac58f4934"
  )
);
// import {Web3} from 'web3'
const EthereumTx = require("ethereumjs-tx");
//智能合约地址
const registryAddress = "0x2dc56919FeB74D25063da852F8539f4f325752a6";
//私钥转换为Buffer
// const privateKey = Buffer.from('7c5c45e9d3b6859b239311b4415ee838accf8c3b67091fb3e4add802fbeb8708', "hex")
const privateKey =
  "7c5c45e9d3b6859b239311b4415ee838accf8c3b67091fb3e4add802fbeb8708";

//私钥转换为账号
const account = web3.eth.accounts.privateKeyToAccount(
  "7c5c45e9d3b6859b239311b4415ee838accf8c3b67091fb3e4add802fbeb8708"
);
//私钥对应的账号地地址
const address = account.address;
console.log(address, "ADDRESS");

export const TestFaucetPage = () => {
  const [userAddress, setUserAddress] = useState("");
  // const { web3Wrapper: wrapper } = useContext(Web3WrapperContext);
  const handleMint = () => {
    // if (wrapper)
    //获取合约实例
    var myContract = new web3.eth.Contract(
      DidRegistryContract as any,
      registryAddress
    );
    //获取nonce,使用本地私钥发送交易
    web3.eth.getTransactionCount(address).then(
      (nonce: any) => {
        console.log("nonce: ", nonce);
        console.log("contract address");

        console.log(registryAddress.toLowerCase());
        console.log("-------");
        console.log("user address");

        console.log(userAddress);
        console.log("-------");

        const txParams = {
          nonce: nonce,
          gasLimit: "0x271000",
          to: registryAddress.toLowerCase(),
          data: myContract.methods
            .mint(userAddress, "100000000000000000000")
            .encodeABI(), //智能合约中set方法的abi
        };
        const signPromise = web3.eth.accounts.signTransaction(
          txParams,
          privateKey
        );
        signPromise.then((signedTx: any) => {
          web3.eth.sendSignedTransaction(
            signedTx.rawTransaction,
            function (err: any, hash: any) {
              if (!err) {
                console.log(
                  "The hash of your transaction is: ",
                  hash,
                  "\nCheck Alchemy's Mempool to view the status of your transaction!"
                );
              } else {
                console.error(
                  "Something went wrong when submitting your transaction:",
                  err
                );
              }
            }
          );
        });

        // const tx = new EthereumTx(txParams)
        // tx.sign(privateKey)
        // const serializedTx = tx.serialize()
        // web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
        //   .on('receipt', console.log);
      },
      (e: any) => console.log(e)
    );
  };

  // const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.target.value)
  // }
  const addClick = (userAddress: any) => {
    console.log(userAddress);
  };

  return (
    <>
      {
        <div className="TestFaucetPage">
          <input
            color="0x000000"
            type="text"
            value={userAddress}
            onChange={(e) => {
              setUserAddress(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              handleMint();
            }}
          >
            Send Me SPAY
          </button>
        </div>
      }

      {/* <FooterContainer /> */}
    </>
  );
};

// export default React.memo(CommunityPage)
