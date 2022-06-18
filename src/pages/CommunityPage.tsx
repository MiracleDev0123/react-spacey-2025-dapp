// import React, { useEffect, useState, useCallback } from 'react'
// import { NavBar } from '../components/NavBar'
// import { FooterContainer } from '../container/common/FooterContainer'
// import { Props } from './CommunityPage.type'
import {
  arrowIcon,
  building,
  select04,
  select24,
  select29,
} from "../images/blue";
import { locations } from "../locations";
// import { Loader, Page } from 'decentraland-ui'

import { useHistory } from "react-router-dom";

export const CommunityPage = () => {
  // const {
  //   wallet,
  //   onNavigate,
  // } = props

  // console.log('====================================');
  // console.log(props);
  // console.log('====================================');

  // const handCreate = useCallback(() => onNavigate(locations.proposals()), [
  //   onNavigate
  // ])
  const history = useHistory();

  const handlePollPage = () => {
    history.push(locations.proposals());
  };

  return (
    <div className="">
      {/* <NavBar /> */}
      {
        <div>
          <div className="mt-24 container mx-auto ">
            {" "}
            {/* md:max-w-screen-xl */}
            <div className="flex flex-row text-4xl md:text-6xl">
              <div className="mr-80">DAO</div>
              <div className="w-8 md:w-12">
                <img src={arrowIcon} alt="arrow icon" />
              </div>
            </div>
          </div>
          <div className="gradientBackgroundFull my-5">
            <div className="container mx-auto py-5 flex flex-col justify-center md:justify-between md:flex-row gap-x-2  w-11/12 md:w-full ">
              <div className="text-2xl ">The virtual world in your hands.</div>
              <div
                className="text-center text-2xl gap-2  px-11 py-1 rounded-xl bg-yellow-500 hover:bg-yellow-600 cursor-pointer"
                onClick={handlePollPage}
              >
                <button className="ui">START VOTING</button>
              </div>
            </div>
          </div>
          <div>
            <div className="container  mx-auto relative ">
              <div className="flex flex-row justify-center container md:justify-between">
                <div className="flex flex-col mt-24">
                  <div className="text-3xl">What is the SpaceY 2025 DAO?</div>
                  <div className="mt-12 font-size">
                    DAO stands for "Decentralized Autonomous Organization". The
                    SpaceY 2025 DAO governs the most important smart contracts
                    and assets used in the SpaceY 2025 universe.
                  </div>
                </div>
                <div className="w-400">
                  <img src={building} alt="Build icon" className="w-full" />
                </div>
              </div>
              <div className="flex flex-row justify-center container md:justify-between mt-14 md:mt-0">
                <div className="w-400">
                  <img src={select04} alt="select icon" className="w-full" />
                </div>
                <div className="flex flex-col">
                  <div className="text-3xl ">
                    <div>What is the purpose of the DAO? </div>
                    <div>How Does it affect me?</div>
                  </div>
                  <div className="mt-12 font-size">
                    By circumventing the need for human intervention or
                    centralized coordination, DAOs are often referred to as
                    “trustless” systems. A DAO’s trustless decision-making
                    frameworks are generally intended to help make governance
                    accessible to everyone, rather than a select few. Through
                    the DAO the community can propose and vote on-chain
                    governance proposals to determine SpaceY 2025 features now
                    and for the future.
                  </div>
                </div>
              </div>
              {/* <div className='flex flex-row justify-center container md:justify-between mt-31'>
                <div className='flex flex-col'>
                  <div className='text-3xl'>How does the DAO work?</div>
                  <div className='mt-31 font-size'>The community will propose and vote on policy updates, future LAND
                    auctions, whitelisting of NFT contracts to be allowed inside the World,
                    Builder and Marketplace, and whatever the community deems relevant.
                    Voting takes place on the Decentraland DAO's governance interface,
                    powered by Aragon.</div>
                </div>
                <div><img src={select09} alt="select icon" /></div>
              </div> */}
              <div className="flex flex-row justify-center container md:justify-between mt-14 md:mt-0">
                <div className="flex flex-col">
                  <div className="text-3xl">
                    What type of things will you get to help to determine?
                  </div>
                  <div className="mt-12 ">
                    <div className="flex items-center">
                      <div className="w-9 md:w-4 h-4 bg-yellow-400 rounded-full mr-4"></div>
                      <div>
                        Over the coming year we will be scheduling votes to
                        decide on a range of issues including but not limited
                        to:{" "}
                      </div>
                    </div>
                    <div className="mt-8 flex items-center">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full mr-4"></div>
                      <div>Future Island features {"&"} protocol upgrades</div>
                    </div>
                    <div className="mt-8 flex items-center">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full mr-4"></div>
                      <div>Dates for future Island sales</div>
                    </div>
                    <div className="mt-8 flex items-center">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full mr-4"></div>
                      <div>Allocation of SPAY for community grants</div>
                    </div>
                    <div className="mt-8 flex items-center">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full mr-4"></div>
                      <div>Moderation of content among others</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="img-font w-400">
                    <img src={select29} alt="" className="w-full" />
                  </div>
                  <div className="img-font mt-33 w-400">
                    <img src={select24} alt="" className="w-full" />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center container md:justify-between mt-31">
                <div className="flex flex-col justify-center container">
                  {/* <div className='text-3xl'>What about MANA?</div> */}
                  <div className="mt-10 font-size ">
                    The DAO is your platform for greater authority and influence
                    over the development of SpaceY 2025 and we urge you to
                    exercise your right to vote & positively shape our virtual
                    world!
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      }

      {/* <FooterContainer /> */}
    </div>
  );
};

// export default React.memo(CommunityPage)
