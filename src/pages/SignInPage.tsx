/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useContext, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { NotificationManager } from "react-notifications";
import { Web3ModalContext } from "../contexts/Web3ModalProvider";
import { Web3WrapperContext } from "../contexts/Web3WrapperProvider";
import { defaultChainId, networkNames } from "../blockchain/constants";
import { locations } from "../locations";

import { userService } from "../services";
// import { isMobile } from '../lib/utils'
import "./SignInPage.css";
// import Web3Wrapper from '../blockchain/Web3Wrapper';

export const SignInPage = () => {
  const [connectError, setConnectError] = useState(false);
  // const [ password, setPassword ] = useState<string>('');
  const { connect, disconnect, chainId } = useContext(Web3ModalContext);
  const { web3Wrapper: wrapper } = useContext(Web3WrapperContext);

  // const [mobileMenuShow, setMobileMenuShow] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (chainId !== null && Number(chainId) !== Number(defaultChainId)) {
      NotificationManager.error(
        `Try on ${networkNames[defaultChainId]}`,
        "Wrong Network"
      );
      // alert(`Wrong Network! \nTry on ${networkNames[defaultChainId]}`);
    }
  }, [chainId]);

  useEffect(() => {
    if (wrapper) {
      console.log(wrapper.account);

      const fetchNonce = async (addr: string) => {
        const { getNonce } = userService;
        let nonce = await getNonce(addr);
        if (nonce) {
          // let nonceHash: string = wrapper.web3.utils.sha3(nonce)!;
          // console.log('nonceHash=', nonceHash);
          // nonce = 'a09d4846-39f1-436e-add2-8ab821cab26f';
          await wrapper.web3.eth.personal.sign(
            nonce, // nonceHash,
            wrapper.account,
            "",
            async function (err: any, signed: string) {
              if (!err) {
                // console.log(`${signed}`)
                console.log(`${signed.substring(2)}`);
                // setPassword(signed.substring(2))
                // loginFunc(wrapper.account, signed.substring(2))
                const { login } = userService;
                let result: any = await login(addr, signed.substring(2));
                if (result && result.jwt_token) {
                  history.push(locations.inventory());
                } else {
                  NotificationManager.error(
                    `Couldn't login, please try again`,
                    "Info"
                  );
                }
              } else {
                NotificationManager.error(`Please sign the nonce`, "Info");
                disconnect();
              }
            }
          );
        } else {
          NotificationManager.error(
            `Couldn't connect to server`,
            "Server Error"
          );
          disconnect();
        }
      };

      fetchNonce(wrapper.account);
    }
  }, [wrapper, history, disconnect]);

  const handleConnectWallet = useCallback(() => {
    connect();
  }, [connect]);

  return (
    <>
      {/* <NavBar /> */}
      <div className="grid place-items-center SignIn-container">
        <div className="flex flex-col w-full max-w-6xl items-start">
          <button className="text-2xl">&lt; Back</button>
          <div className="SignIn w-full mt-4 border-panel-row">
            <div className="flex items-center py-16">
              <div className="flex flex-col items-start w-full gap-6 mx-8 text-xl ">
                <p className="text-center w-full text-3xl">
                  Log in with Wallet
                </p>
                <label className="text-gray-300">Email</label>
                <input
                  type="text"
                  className="w-full py-4 px-4 bg-input text-white focus:outline-none focus:ring focus:border-blue-500"
                />
                <label className="text-gray-300">Code</label>
                <div className="flex gap-8 w-full">
                  <input
                    className="flex-grow py-4 px-4 bg-input text-white focus:outline-none focus:ring focus:border-blue-500"
                    type="text"
                  />
                  <button className="btn-gradient py-4 px-8">Send Code</button>
                </div>
                <p className="text-gray-300">
                  By Logging in you agree to our TOS and Privacy Policy.
                </p>
                <button className="btn-gradient py-4 px-16 self-center">
                  Log in
                </button>
              </div>
              <div className="flex flex-col items-start w-full gap-8 mx-8 text-xl ">
                <p className="text-center w-full text-3xl">
                  Log in with Wallet
                </p>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore .
                </p>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore .
                </p>
                <p className="text-gray-300">
                  By Logging in you agree to our TOS and Privacy Policy.
                </p>
                <button
                  className="btn-gradient py-4 px-8 mt-8 self-center"
                  onClick={handleConnectWallet}
                >
                  Connect with Metamask
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
