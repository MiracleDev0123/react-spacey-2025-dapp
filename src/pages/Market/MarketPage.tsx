import styled from "styled-components";
import BreadCrumb from "../../components/BreadCrumb";
import MarketItem, { MarketItemProps } from "../../components/MarketCard";
import Item1 from "../../images/market/blue (1).png";
import Item2 from "../../images/market/blue (2).png";
import Item3 from "../../images/market/blue (3).png";
import Item4 from "../../images/market/blue (4).png";
import Item5 from "../../images/market/blue (5).png";
import Item6 from "../../images/market/blue (6).png";
import Item7 from "../../images/market/Select (1).png";
import Item8 from "../../images/market/Select (2).png";
import Item9 from "../../images/market/Select (3).png";
import Item10 from "../../images/market/Select (4).png";
import Item11 from "../../images/market/Select (5).png";
import { ItemType } from "../Account/Properties";
import MarketTabBG from "../../images/market/market_active_tab.png";
import { useMemo, useState } from "react";
import ReactSelect, { OptionType } from "../../components/Select";
import SearchIcon from "../../images/market/search.png";
import NextIcon from "../../images/market/next.png";
import PrevIcon from "../../images/market/prev.png";
import Component1 from "../../images/market/Barrel_Legendary.png";
import Component2 from "../../images/market/Enhancer_Legendary.png";
import Component3 from "../../images/market/Controller_Legendary.png";
import Component4 from "../../images/market/Base_Legendary.png";

const MarketTab = styled.div`
  margin-right: -2rem;
  cursor: pointer;

  &:first-child {
    margin-left: -0.5rem;
    @media (max-width: 768px) {
      margin-left: 0;
    }
  }

  &.active {
    background: url(${MarketTabBG});
    background-size: 100% 100%;
  }
`;

const Search = styled.input.attrs({ type: "text" })`
  border: 1px solid;
  border-image-source: linear-gradient(90deg, #493e8f 0%, #b22376 100%);
  border-image-slice: 1;
  outline: none;
  height: 36px;
  background: #0303036b url(${SearchIcon}) no-repeat center left;
  background-position: 10px;
`;

const PageNumber = styled.input.attrs({ type: "number" })`
  width: 64px;
  border: 2px solid #403258;
  background: transparent;
  outline: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export enum PropertyType {
  LANDS = "LANDS",
  TURRETS = "TURRETS",
  BUILDINGS = "BUILDINGS",
  TRAP = "TRAP",
  BLINDBOX = "BLINDBOX",
}

export enum BuyFromType {
  OFFICIALSTORE = "Official Store",
  COMMUNITYMARKET = "Community Market",
}

const MarketPage = () => {
  const items: MarketItemProps[] = [
    {
      img_url: Item10,
      content:
        "For research and production of electronic components and mechanical parts.",
      type: ItemType.LEGENDARY,
      name: "MorTar",
      price: "500",
      chain: "Binance Smart Chain",
      head: "Martian Institute:",
      propertyType: PropertyType.TURRETS,
      owner: "0x436d8Fa63c672797Fa7E30B0dc19dA42D50ebA51",
      components: [
        { img: Component1, label: "Barrel" },
        { img: Component2, label: "Enhancer" },
        { img: Component3, label: "Controller" },
        { img: Component4, label: "Base" },
      ],
      attributes: [
        { label: "Power", value: "580", color: "#BB4BE2" },
        { label: "Fire Rate", value: "6", color: "#FF7C53" },
        { label: "Range", value: "7.5", color: "#6AE385" },
        { label: "Durability", value: "100", color: "#C4C4C4" },
      ],
    },
    {
      img_url: Item2,
      content: "Used to refine Martian mineral resources.",
      type: ItemType.UNCOMMON,
      name: "Land",
      price: "1500",
      chain: "Binance Smart Chain",
      head: "Smelter Factory:",
      propertyType: PropertyType.LANDS,
    },
    {
      img_url: Item8,
      content: "A teleportation device that helps people explore the Mars",
      type: ItemType.RARE,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      head: "Chronosphere:",
      propertyType: PropertyType.BLINDBOX,
    },
    {
      img_url: Item2,
      content:
        "Generate energy to maintain the normal operation of other buildings and various activities.",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "1500",
      chain: "Binance Smart Chain",
      head: "Reactor:",
      propertyType: PropertyType.LANDS,
    },
    {
      img_url: Item1,
      content:
        "For research and production of electronic components and mechanical parts.",
      type: ItemType.EPIC,
      name: "MorTar",
      price: "500",
      chain: "Binance Smart Chain",
      head: "Martian Institute:",
      propertyType: PropertyType.BUILDINGS,
      owner: "0x436d8Fa63c672797Fa7E30B0dc19dA42D50ebA51",
      components: [
        { img: Component1, label: "Barrel" },
        { img: Component2, label: "Enhancer" },
        { img: Component3, label: "Controller" },
        { img: Component4, label: "Base" },
      ],
      attributes: [
        { label: "Power", value: "580", color: "#BB4BE2" },
        { label: "Fire Rate", value: "6", color: "#FF7C53" },
        { label: "Range", value: "7.5", color: "#6AE385" },
        { label: "Durability", value: "100", color: "#C4C4C4" },
      ],
    },
    {
      img_url: Item9,
      content: "Used to refine Martian mineral resources.",
      type: ItemType.RARE,
      name: "Land",
      price: "1500",
      chain: "Binance Smart Chain",
      head: "Smelter Factory:",
      propertyType: PropertyType.LANDS,
    },
    {
      img_url: Item3,
      content:
        "Used to controls Drones and allocates them to different tasks. ",
      type: ItemType.COMMON,
      name: "Land",
      price: "900",
      chain: "Binance Smart Chain",
      head: "Drone Radar:",
      propertyType: PropertyType.BUILDINGS,
    },
    {
      img_url: Item7,
      content: "A teleportation device that helps people explore the Mars",
      type: ItemType.EPIC,
      name: "Land",
      price: "1000",
      chain: "Binance Smart Chain",
      head: "Chronosphere:",
      propertyType: PropertyType.LANDS,
    },
    {
      img_url: Item4,
      content:
        "Used to controls Drones and allocates them to different tasks. ",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "1800",
      chain: "Binance Smart Chain",
      head: "Drone Radar:",
      propertyType: PropertyType.BUILDINGS,
    },
    {
      img_url: Item5,
      content:
        "Generate energy  production of electronic components and mechanical parts.",
      type: ItemType.RARE,
      name: "Land",
      price: "2500",
      chain: "Binance Smart Chain",
      head: "Martian Institute:",
      propertyType: PropertyType.BLINDBOX,
    },
    {
      img_url: Item6,
      content: "Used to refine Martian mineral resources.",
      type: ItemType.UNCOMMON,
      name: "Land",
      price: "600",
      chain: "Binance Smart Chain",
      head: "Smelter Factory:",
      propertyType: PropertyType.LANDS,
    },
    {
      img_url: Item1,
      content:
        "Used to controls Drones and allocates them to different tasks. ",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      head: "Drone Radar:",
      propertyType: PropertyType.BUILDINGS,
    },
    {
      img_url: Item6,
      content: "A teleportation device that helps people explore the Mars",
      type: ItemType.RARE,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      head: "Chronosphere:",
      propertyType: PropertyType.BLINDBOX,
    },
    {
      img_url: Item8,
      content:
        "Generate energy to maintain the normal operation of other buildings and various activities.",
      type: ItemType.COMMON,
      name: "Land",
      price: "2300",
      chain: "Binance Smart Chain",
      head: "Reactor:",
      propertyType: PropertyType.LANDS,
    },
    {
      img_url: Item3,
      content:
        "Used to controls Drones and allocates them to different tasks. ",
      type: ItemType.COMMON,
      name: "Land",
      price: "900",
      chain: "Binance Smart Chain",
      head: "Drone Radar:",
      propertyType: PropertyType.BLINDBOX,
    },
    {
      img_url: Item9,
      content: "A teleportation device that helps people explore the Mars",
      type: ItemType.EPIC,
      name: "Land",
      price: "1000",
      chain: "Binance Smart Chain",
      head: "Chronosphere:",
      propertyType: PropertyType.LANDS,
    },
    {
      img_url: Item5,
      content:
        "Generate energy  production of electronic components and mechanical parts.",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "2500",
      chain: "Binance Smart Chain",
      head: "Martian Institute:",
      propertyType: PropertyType.LANDS,
    },
    {
      img_url: Item6,
      content: "Used to refine Martian mineral resources.",
      type: ItemType.UNCOMMON,
      name: "Land",
      price: "600",
      chain: "Binance Smart Chain",
      head: "Smelter Factory:",
      propertyType: PropertyType.TRAP,
    },
    {
      img_url: Item10,
      content:
        "Used to controls Drones and allocates them to different tasks. ",
      type: ItemType.RARE,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      head: "Drone Radar:",
      propertyType: PropertyType.LANDS,
    },
    {
      img_url: Item6,
      content: "A teleportation device that helps people explore the Mars",
      type: ItemType.UNCOMMON,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      head: "Chronosphere:",
      propertyType: PropertyType.LANDS,
    },
    {
      img_url: Item5,
      content:
        "Generate energy to maintain the normal operation of other buildings and various activities.",
      type: ItemType.RARE,
      name: "Land",
      price: "2300",
      chain: "Binance Smart Chain",
      head: "Reactor:",
      propertyType: PropertyType.LANDS,
    },
    {
      img_url: Item11,
      content:
        "Used to controls Drones and allocates them to different tasks. ",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "1800",
      chain: "Binance Smart Chain",
      head: "Drone Radar:",
      propertyType: PropertyType.TRAP,
    },
    {
      img_url: Item3,
      content: "A teleportation device that helps people explore the Mars",
      type: ItemType.EPIC,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      head: "Chronosphere:",
      propertyType: PropertyType.LANDS,
    },
    {
      img_url: Item8,
      content:
        "Generate energy to maintain the normal operation of other buildings and various activities.",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "1500",
      chain: "Binance Smart Chain",
      head: "Reactor:",
      propertyType: PropertyType.LANDS,
    },
    {
      img_url: Item1,
      content:
        "For research and production of electronic components and mechanical parts.",
      type: ItemType.LEGENDARY,
      name: "MorTar",
      price: "500",
      chain: "Binance Smart Chain",
      head: "Martian Institute:",
      propertyType: PropertyType.TURRETS,
      owner: "0x436d8Fa63c672797Fa7E30B0dc19dA42D50ebA51",
      components: [
        { img: Component1, label: "Barrel" },
        { img: Component2, label: "Enhancer" },
        { img: Component3, label: "Controller" },
        { img: Component4, label: "Base" },
      ],
      attributes: [
        { label: "Power", value: "580", color: "#BB4BE2" },
        { label: "Fire Rate", value: "6", color: "#FF7C53" },
        { label: "Range", value: "7.5", color: "#6AE385" },
        { label: "Durability", value: "100", color: "#C4C4C4" },
      ],
    },
    {
      img_url: Item2,
      content: "Used to refine Martian mineral resources.",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "1500",
      chain: "Binance Smart Chain",
      head: "Smelter Factory:",
      propertyType: PropertyType.LANDS,
    },
    {
      img_url: Item3,
      content:
        "Used to controls Drones and allocates them to different tasks. ",
      type: ItemType.COMMON,
      name: "Land",
      price: "900",
      chain: "Binance Smart Chain",
      head: "Drone Radar:",
      propertyType: PropertyType.TRAP,
    },
    {
      img_url: Item4,
      content: "A teleportation device that helps people explore the Mars",
      type: ItemType.EPIC,
      name: "Land",
      price: "1000",
      chain: "Binance Smart Chain",
      head: "Chronosphere:",
      propertyType: PropertyType.LANDS,
    },
    {
      img_url: Item11,
      content:
        "Used to controls Drones and allocates them to different tasks. ",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      head: "Drone Radar:",
      propertyType: PropertyType.TRAP,
    },
    {
      img_url: Item6,
      content: "A teleportation device that helps people explore the Mars",
      type: ItemType.RARE,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      head: "Chronosphere:",
      propertyType: PropertyType.TRAP,
    },
    {
      img_url: Item5,
      content:
        "Generate energy to maintain the normal operation of other buildings and various activities.",
      type: ItemType.COMMON,
      name: "Land",
      price: "2300",
      chain: "Binance Smart Chain",
      head: "Reactor:",
      propertyType: PropertyType.LANDS,
    },
    {
      img_url: Item7,
      content:
        "Generate energy  production of electronic components and mechanical parts.",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "2500",
      chain: "Binance Smart Chain",
      head: "Martian Institute:",
      propertyType: PropertyType.LANDS,
    },
  ];

  const Properties: OptionType[] = [
    { label: "All Property", value: "" },
    { label: "Lands", value: PropertyType.LANDS },
    { label: "Turrets", value: PropertyType.TURRETS },
    { label: "Buildings", value: PropertyType.BUILDINGS },
    { label: "Trap", value: PropertyType.TRAP },
    { label: "Blind Box", value: PropertyType.BLINDBOX },
  ];

  const Sorts: OptionType[] = [
    { label: "Rarity", value: "rarity" },
    { label: "Latest", value: "latest" },
    { label: "Price", value: "price" },
  ];

  const Options: OptionType[] = [
    { label: "SpaceY 2025", value: "" },
    { label: "SpaceY 2025", value: "" },
    { label: "SpaceY 2025", value: "" },
  ];

  const [activeTab, setActiveTab] = useState<string>(BuyFromType.OFFICIALSTORE);
  const [property, setProperty] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [searchTxt, setSearchTxt] = useState<string>("");
  const [pageNum, setPageNum] = useState<number>(1);
  const [filteredItems, setItems] = useState<MarketItemProps[]>(items);

  const pageCount = useMemo(() => {
    return Math.ceil(filteredItems.length / 12);
  }, [filteredItems]);

  const pageNumChange = (value: number) => {
    if (value < 1) {
      setPageNum(1);
      return;
    }
    if (value > pageCount - 1) {
      setPageNum(pageCount);
      return;
    }
    setPageNum(value);
  };

  const setFilteredItems = (filter: string, search: string) => {
    if (filter !== "" || search) {
      setItems(
        items.filter(
          (item: MarketItemProps) =>
            (search &&
              filter !== "" &&
              item.name.toLowerCase().includes(search.toLowerCase()) &&
              item.propertyType === filter) ||
            (search &&
              filter === "" &&
              item.name.toLowerCase().includes(search.toLowerCase())) ||
            (!search && filter !== "" && item.propertyType === filter)
        )
      );
    } else setItems(items);
    setPageNum(1);
  };

  return (
    <>
      <BreadCrumb title="Market" />
      <div className="container m-auto md:px-5 py-5">
        <div className="md:flex justify-between items-center md:px-4">
          <div className="flex items-center">
            {(Object.keys(BuyFromType) as (keyof typeof BuyFromType)[]).map(
              (key, index) => (
                <MarketTab
                  key={index}
                  className={`py-4 md:py-6 px-8 md:px-12 text-sm md:text-lg ${
                    activeTab === BuyFromType[key] ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(BuyFromType[key])}
                >
                  {BuyFromType[key]}
                </MarketTab>
              )
            )}
          </div>
          <ReactSelect
            options={Options}
            classNamePrefix="select"
            selectClassName="select-1 w-full md:w-60 mt-4 md:mt-0"
            id="react-select"
            name="react-select"
            defaultOption={""}
            handleChange={(event: { value: string }) => {}}
          />
        </div>
        <div className="md:flex justify-between items-center mt-6 md:px-4">
          <div className="md:flex">
            <div className="w-full md:w-52">
              <ReactSelect
                options={Properties}
                classNamePrefix="select"
                id="react-select"
                name="react-select"
                defaultOption={property}
                handleChange={(event: { value: string }) => {
                  setProperty(event.value);
                  setFilteredItems(event.value, searchTxt);
                }}
              />
            </div>
            <div className="w-full md:w-52 md:ml-8 mt-4 md:mt-0">
              <ReactSelect
                options={Sorts}
                classNamePrefix="select"
                id="react-select"
                name="react-select"
                placeholder="Sort by: "
                defaultOption={sort}
                handleChange={(event: { value: string }) => {
                  setSort(event.value);
                  // setFilteredItems();
                }}
              />
            </div>
          </div>
          <Search
            className="px-8 w-full md:w-1/3 mt-4 md:mt-0"
            placeholder="Search"
            onChange={(e) => {
              setSearchTxt(e.target.value);
              setFilteredItems(property, e.target.value);
            }}
          />
        </div>
        <div className="flex flex-wrap mt-8">
          {filteredItems.length > 0 ? (
            filteredItems.map(
              (item, index) =>
                index >= (pageNum - 1) * 12 &&
                index < pageNum * 12 && (
                  <MarketItem props={item} key={index} buyFrom={activeTab} />
                )
            )
          ) : (
            <div className="flex justify-center w-full items-center h-60 opacity-70">
              No Results
            </div>
          )}
        </div>
        <div className="flex md:px-4 justify-end items-center mt-20">
          <img
            src={PrevIcon}
            alt="pagination control"
            onClick={() => pageNumChange(pageNum - 1)}
            className="cursor-pointer"
          />
          <PageNumber
            className="mx-4 px-2"
            min="1"
            max="500"
            onChange={(e) => pageNumChange(Number(e.target.value))}
            value={pageNum}
          />
          <span className="mr-4">of {pageCount}</span>
          <img
            src={NextIcon}
            alt="pagination control"
            onClick={() => pageNumChange(pageNum + 1)}
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default MarketPage;
