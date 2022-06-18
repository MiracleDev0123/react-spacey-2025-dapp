/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useHistory } from "react-router-dom";
import pancakeImg from "../images/pancake.png";
import uniImg from "../images/uniswap.png";
import gateImg from "../images/gateio.png";
import mexcImg from "../images/mexc.png";
import polyImg from "../images/Polynetwork.png";

import "./GetSpay.css";

export const GetSpay = (props: any) => {
  // const history = useHistory();
  return (
    <div className="flex justify-center">
      <div className="max-w-7xl w-full my-16 mx-4">
        <div className="flex flex-col gap-8">
          <p className="text-2xl">Purchase SPAY on</p>
          <div className="flex flex-row flex-wrap max-w-7xl gap-2">
            <a href="#" className="spay-item">
              <img src={pancakeImg} alt="pancake" />
            </a>
            <a href="#" className="spay-item">
              <img src={uniImg} alt="pancake" />
            </a>
            <a href="#" className="spay-item">
              <img src={gateImg} alt="pancake" />
            </a>
            <a href="#" className="spay-item">
              <img src={mexcImg} alt="pancake" />
            </a>
          </div>
          <p className="text-2xl">Cross-chain SPAY (ETH&lt;-&gt;BSC)</p>
          <div className="flex flex-row flex-wrap max-w-7xl">
            <a href="#" className="spay-item">
              <img src={polyImg} alt="pancake" />
            </a>
          </div>
          <div className="flex flex-col max-w-7xl text-purple gap-1">
            <p>SPAY Contract Address:</p>
            <p>0x58FaD9E3C3AE54c9BA98c3f0E4bF88aB3E8Cf3c5 (ETH)</p>
            <p>0x13A637026dF26F846D55ACC52775377717345c06 (BSC)</p>
          </div>
          <p className="text-2xl">Purchase MARS on</p>
          <div className="flex flex-row flex-wrap max-w-7xl">
            <a href="#" className="spay-item">
              <img src={pancakeImg} alt="pancake" />
            </a>
          </div>
          <div className="flex flex-col max-w-7xl text-purple gap-1">
            <p>METAMARS Contract Address:</p>
            <p>0xaC564270B8138eD3B97794f4cabd4858976b433F (BSC)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
