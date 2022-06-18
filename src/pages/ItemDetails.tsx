/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { locations } from "../locations";
import { useHistory } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import "./ItemDetails.css";
import { Web3ModalContext } from "../contexts/Web3ModalProvider";
import { Web3WrapperContext } from "../contexts/Web3WrapperProvider";
import { abi } from "../contracts/MetaspaceBridgeAbi";
import { AbiItem } from "web3-utils";
// import { MetaspaceBridgeAddress } from "../blockchain/constants";
const address = "0xc10641031430cF29579f829952b118f1d873bbc2";
export const ItemDetails = (props: any) => {
  console.log("====================================");
  console.log(props);
  console.log("====================================");
  const history = useHistory();

  if (!props.location || !props.location.state) history.push(locations.home());

  const {
    is_nft,
    contract_address,
    description,
    image,
    name,
    token_id,
    category_id,
    rarity_id,
    mint_signature,
  } = (props.location && props.location.state) || {};
  console.log(props.location.state);

  const { chainId, account } = useContext(Web3ModalContext);
  const { web3Wrapper: wrapper } = useContext(Web3WrapperContext);
  const handleMint = async () => {
    if (wrapper)
      if (chainId) {
        const MetaspaceBridge = new wrapper.web3.eth.Contract(
          abi as AbiItem[],
          address
        );
        const ret = await MetaspaceBridge.methods
          .matchMint(
            "0xe88A806D31de758762d93a0e6682042Ec1AFe6ac",
            [token_id, category_id, 4, rarity_id],
            mint_signature
          )
          .send({ from: account });
        console.log(ret);
      }
  };
  return (
    <>
      {/* <NavBar /> */}
      <div className="grid place-items-center SignIn-container">
        <div className="flex flex-col w-full max-w-6xl items-start">
          <NavLink
            to={locations.inventory()}
            activeClassName="active"
            className=""
          >
            <button className="text-2xl">&lt; Back</button>
          </NavLink>
          <div className="w-full mt-4 border-panel-row px-16">
            <div className="flex items-center py-16 gap-12">
              <div className="flex flex-col items-start gap-2">
                <img className="max-w-md" src={image} alt="item" />
                <p className="text-xl text-gray-300">Game: SpaceY2025</p>
                <p className="text-xl">Owner: 0x442f....23ED</p>
              </div>
              <div
                className="flex flex-col p-8 flex-grow divide-y"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
              >
                <p>{name}</p>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
