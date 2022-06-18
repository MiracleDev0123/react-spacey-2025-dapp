import { useState, useContext } from "react";

import { Link, useHistory, useLocation } from "react-router-dom";
import { Web3ModalContext } from "../contexts/Web3ModalProvider";
// import { ellipseAddress } from "../lib/utils";
// import { defaultChainId, networkNames } from '../blockchain/constants';
import { Logo } from "../images/blue";
import avatar from "../images/avatar.png";
import { locations } from "../locations";

// import { Menu, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/solid'

// import { isMobile } from '../lib/utils'

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }
const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Market",
    path: "/market",
  },
  {
    label: "Get Started",
    path: "/doc",
  },
  {
    label: "Get Spay",
    path: "/getspay",
  },
  {
    label: "DAO",
    path: "/community",
  },
  {
    label: "Leaderboard",
    path: "/leaderboard",
  },
  {
    label: "Help",
    path: "/info",
  },
  {
    label: "Affiliates",
    path: "/affiliates",
  },
];
const NavBar = () => {
  const { account } = useContext(Web3ModalContext);

  const history = useHistory();
  const [mobileMenuShow, setMobileMenuShow] = useState(false);

  // useEffect(() => {
  //     if (chainId !== null && Number(chainId) !== Number(defaultChainId)) {
  //         // NotificationManager.error(`Try on ${networkNames[defaultChainId]}`, "Wrong Network");
  //         alert(`Wrong Network! \nTry on ${networkNames[defaultChainId]}`);
  //     }
  // }, [chainId]);

  // const handleConnectWallet = useCallback(() => {
  //     console.log('connect Wallet')
  //     connect();
  // }, [connect]);
  const { pathname } = useLocation();
  // const handleDisconnectWallet = useCallback(() => {
  //   console.log('disconnect Wallet')
  //   disconnect();
  //   history.push(locations.root());
  // }, [disconnect, history]);
  const toggleMenu = () => {
    setMobileMenuShow(!mobileMenuShow);
  };
  const handleSignInPage = () => {
    toggleMenu();
    history.push(locations.signIn());
  };
  // const handleDAOPage = () => {
  //   history.push(locations.community());
  // }

  // const handleLogout = () => {
  //   toggleMenu()
  //   handleDisconnectWallet()
  // }
  const handleAccount = () => {
    history.push(locations.account());
  };

  return (
    <nav className="flex items-center justify-between px-16px  md:px-5 w-full py-3 z-40 text-spacey-white ">
      <div className="container mx-auto mt-3px">
        <div className="flex items-center justify-between font-robo uppercase md:text-sm lg:text-base font-normal container mx-auto">
          <div className="flex-initial lg:mr-9">
            <a className="spacey_logo_bg block pt-3px" href="/">
              <img src={Logo} alt="" className="spacey_logo" />
            </a>
          </div>
          <div className="hidden md:flex flex-1 flex-grow justify-start">
            <div className="flex flex-row items-center space-x-0 font-segoe text-nav text-13px mt-5px align-middle">
              {navItems.map((item, index) => (
                <Link
                  className={`nav-item hover:text-spacey-mobile-background-hover ${
                    pathname === item.path && "active-nav"
                  }`}
                  key={index}
                  to={item.path}
                >
                  {item.label}
                </Link>
              ))}
              {/* <li><a className="hover:text-spacey-mobile-background-hover" target="_blank" href="/market"><span>Marketplace</span></a></li>
              <li><a className="hover:text-spacey-mobile-background-hover" target="_blank" href="https://docs.spacey2025.com/" rel="noopener noreferrer"><span>Get Started</span></a></li>
              <li><a className="hover:text-spacey-mobile-background-hover" target="" href="https://spacey2025.com/getspay/"><span>Get Spay</span></a></li>
              <li><a className="hover:text-spacey-mobile-background-hover" target="_blank" href={locations.community()} rel="noopener noreferrer" ><span>DAO</span></a></li>
              <li><a className="hover:text-spacey-mobile-background-hover" target="_blank" href="https://reward.spacey2025.com/" rel="noopener noreferrer"><span>Leaderboard</span></a></li>
              <li><a className="hover:text-spacey-mobile-background-hover" target="" href="/info/" ><span>Info</span></a></li> */}
            </div>
          </div>
          <div className="accountInfo h-full">
            {!account ? (
              <div className=" hover:text-spacey-mobile-background-hover text-right w-32 md:w-40 invisible md:visible">
                <button
                  className="btn-gradient h-full w-full shadow-sm px-2 py-3"
                  onClick={handleSignInPage}
                >
                  Login
                </button>
              </div>
            ) : (
              <div className=" hover:text-spacey-mobile-background-hover text-right w-16 invisible md:visible">
                {/* <button className="btn-gradient h-full w-full shadow-sm px-2 py-3" onClick={handleDisconnectWallet}>Logout</button> */}
                <button
                  className="btn-gradient rounded-full"
                  style={{ padding: 3 }}
                  onClick={handleAccount}
                >
                  <img className="rounded-full" src={avatar} alt="avatar" />
                </button>
              </div>
            )}
          </div>

          <div className="mobile-nav">
            <div className="flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6 mx-3 my-2 text-orange-500"
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="#FF6B00"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            <div
              className={`${
                mobileMenuShow ? "mobile-menu" : "hidden mobile-menu"
              }`}
            >
              <ul className="mx-4 my-3 zIndex-9999">
                {/* font-semibold */}
                <li className="">
                  <a
                    href={locations.home()}
                    className="block text-sm px-2 py-2 text-white hover:bg-green-500 "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#marketplace"
                    className="block text-sm px-2 py-2 hover:bg-green-500 transition duration-300"
                  >
                    Marketplace
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.spacey2025.com/"
                    className="block text-sm px-2 py-2 hover:bg-green-500 transition duration-300"
                  >
                    Get started
                  </a>
                </li>
                <li>
                  <a
                    href="https://spacey2025.com/getspay/"
                    className="block text-sm px-2 py-2 hover:bg-green-500 transition duration-300"
                  >
                    Get spay
                  </a>
                </li>
                <li>
                  <a
                    href="https://reward.spacey2025.com/"
                    className="block text-sm px-2 py-2 hover:bg-green-500 transition duration-300"
                  >
                    Leaderboard
                  </a>
                </li>

                <li>
                  <a
                    href={locations.community()}
                    className="block text-sm px-2 py-2 hover:bg-green-500 transition duration-300"
                  >
                    Dao
                  </a>
                </li>

                <li>
                  <a
                    href="#info"
                    className="block text-sm px-2 py-2 hover:bg-green-500 transition duration-300"
                  >
                    Info
                  </a>
                </li>
                {!account ? (
                  <li>
                    <div
                      onClick={() => handleSignInPage()}
                      className="block text-sm px-2 py-2 hover:bg-green-500 transition duration-300"
                    >
                      Login
                    </div>
                  </li>
                ) : (
                  // <div onClick={() => handleLogout()} className="block text-sm px-2 py-2 hover:bg-green-500 transition duration-300">
                  //   Logout
                  // </div>
                  <div
                    onClick={handleAccount}
                    className="block rounded-full p-1 transition duration-300"
                  >
                    <img src={avatar} alt="avatar" />
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
