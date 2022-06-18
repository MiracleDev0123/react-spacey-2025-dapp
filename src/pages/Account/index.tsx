// import { useState, useContext, useCallback } from 'react'
// import { useHistory } from "react-router-dom";

// import { NavBar } from '../../components/NavBar'
// import { NotificationManager } from 'react-notifications';
// import { Web3ModalContext } from '../../contexts/Web3ModalProvider';
// import { Web3WrapperContext } from '../../contexts/Web3WrapperProvider';
// import { defaultChainId, networkNames } from '../../blockchain/constants';
// import { locations } from '../../locations'
import { Properties } from "./Properties";

import avatar from "../../images/avatar.png";

// import { userService } from '../../services';
// import { isMobile } from '../lib/utils'
import "./AccountPage.css";
// import Web3Wrapper from '../blockchain/Web3Wrapper';

export const AccountPage = () => {
  // const [connectError, setConnectError] = useState(false);
  // const [ password, setPassword ] = useState<string>('');
  // const { connect, disconnect, chainId } = useContext(Web3ModalContext);
  // const { web3Wrapper: wrapper } = useContext(Web3WrapperContext);

  // const [mobileMenuShow, setMobileMenuShow] = useState(false);

  // const history = useHistory();

  // const handleConnectWallet = useCallback(() => {
  //     connect();
  // }, [connect]);

  return (
    <>
      {/* <NavBar /> */}
      <div className="grid place-items-center SignIn-container">
        <div className="flex flex-row gap-10">
          <div className="border-panel-col flex flex-col py-2">
            <div className="btn-gradient rounded-full mx-12 mt-12 p-1 w-44">
              <img className="rounded-full w-full" src={avatar} alt="avatar" />
            </div>
            <p className="text-3xl mt-4 flex-grow" style={{ color: "#FF7C53" }}>
              User Name
            </p>
            <div className="flex flex-col w-full">
              <span className="sidenav active text-lg px-8 py-4">Account</span>
              <span className="sidenav text-lg px-8 py-4">Wallet</span>
              <span className="sidenav text-lg px-8 py-4">Properties</span>
              <span className="sidenav text-lg px-8 py-4">History</span>
              <span className="sidenav text-lg px-8 py-4">Achievements</span>
              <span className="sidenav text-lg px-8 py-4">Affiliates</span>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-6xl items-start">
            <Properties />
          </div>
        </div>
      </div>
    </>
  );
};
