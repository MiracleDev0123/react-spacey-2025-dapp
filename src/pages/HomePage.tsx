import {
  blue_006,
  blue_011,
  blue_007,
  blue_010,
  blue_008,
  blue_009,
} from "../images/blue";
import {
  Select_01,
  Select_02,
  Select_03,
  Select_04,
  Select_05,
  Chest1,
} from "../images/blue";

import { LaunchContainer } from "../container/homepage/LaunchContainer";
import { BuyContainer } from "../container/homepage/BuyContainer";
import { PlayToEarnContainer } from "../container/homepage/PlayToEarnContainer";
import { SponsorsContainer } from "../container/homepage/SponsorsContainer";
import { FooterContainer } from "../container/common/FooterContainer";

import { LaunchContainerMobile } from "../container/homepage/LaunchContainerMobile";
import { BuyContainerMobile } from "../container/homepage/BuyContainerMobile";
import { PartnersContainer } from "../container/homepage/PartnersContainer";

import { isMobile } from "../lib/utils";

type props = {
  text: string;
};

export const HomePage = ({ text }: props) => {
  const items_land: any[] = [
    {
      img_url: blue_006,
      content:
        "For research and production of electronic components and mechanical parts.",
      category: "legendary",
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "gray",
      head: "Martian Institute:",
    },
    {
      img_url: blue_007,
      content: "Used to refine Martian mineral resources.",
      category: "legendary",
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "gray",
      head: "Smelter Factory:",
    },
    {
      img_url: blue_008,
      content:
        "Used to controls Drones and allocates them to different tasks. ",
      category: "legendary",
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "orange",
      head: "Drone Radar:",
    },
    {
      img_url: blue_009,
      content: "A teleportation device that helps people explore the Mars",
      category: "legendary",
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "orange",
      head: "Chronosphere:",
    },
    {
      img_url: blue_010,
      content:
        "Generate energy to maintain the normal operation of other buildings and various activities.",
      category: "legendary",
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "green",
      head: "Reactor:",
    },
    // {img_url:blue_010, content:'Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt', category: 'legendary', name: 'Land', price: '500', chain: 'Binance Smart Chain', color: 'purple'}
  ];
  const items_lootbox: any[] = [
    {
      img_url: Select_01,
      content: "The simplest kinetic tower with good, but limited power.",
      category: "legendary",
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "gray",
      head: "Sentry:",
    },
    {
      img_url: Select_02,
      content: "Attacks targets with a powerful energy beam.",
      category: "legendary",
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "gray",
      head: "Laser:",
    },
    {
      img_url: Select_03,
      content:
        "Attacks three targets at once. Deals double damage to flying units.",
      category: "legendary",
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "orange",
      head: "Missile Launcher:",
    },
    {
      img_url: Select_04,
      content: "Has ultra-long attack range.Deals extremely high AOE damage.",
      category: "legendary",
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "orange",
      head: "Mortar:",
    },
    {
      img_url: Select_05,
      content: "Generates an energy wave that shocks nearby targets.",
      category: "legendary",
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "green",
      head: "Shock Wave:",
    },
    // {img_url:Select_05, content:'Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt', category: 'legendary', name: 'Land', price: '500', chain: 'Binance Smart Chain', color: 'purple'},
  ];

  console.log("isMobile", isMobile());

  return (
    <>
      <div id="homepage">
        {isMobile() ? (
          <>
            <LaunchContainerMobile />
            <BuyContainerMobile
              name={"buyLand"}
              items={items_land}
              brand={blue_011}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
              }
            />
            <BuyContainerMobile
              name={"buyLootBox"}
              items={items_land}
              brand={blue_011}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
              }
            />
            <PartnersContainer />
          </>
        ) : (
          <>
            <LaunchContainer />
            <BuyContainer
              leftSide={true}
              name={"buyLand"}
              items={items_land}
              brand={blue_011}
              desc={
                "All buildings can only be held on a Land where you can customize and develop your own space."
              }
            />
            <BuyContainer
              leftSide={false}
              name={"buyLootBox"}
              items={items_lootbox}
              brand={Chest1}
              desc={
                "You can get all these exclusive Tower and Building NFTs from the limited Loot Boxes."
              }
            />
            <PlayToEarnContainer />
            <SponsorsContainer />
            <FooterContainer />
          </>
        )}
      </div>
    </>
  );
};
