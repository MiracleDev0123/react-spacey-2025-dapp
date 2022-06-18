// import { useState } from "react";
import { useHistory } from "react-router-dom";
import { locations } from "../../locations";
// import { userService } from "../../services";

import mortar_common from "../../images/mortar_common.png";
import missile_launcher_uncommon from "../../images/missile_launcher_uncommon.png";
import mortar_epic from "../../images/mortar_epic.png";
import sentry_legendary from "../../images/sentry_legendary.png";
// import { Asset_type } from "../InventoryPage"
interface CardProps {
  item: Asset_type;
}
interface Asset_type {
  type: ItemType;
  name: string;
  network: string;
  is_nft: boolean;
  value: number;
  image: string;
}
export enum ItemType {
  LEGENDARY = "LEGENDARY",
  UNCOMMON = "UNCOMMON",
  EPIC = "EPIC",
  COMMON = "COMMON",
  RARE = "RARE",
}
export const colors = {
  [ItemType.LEGENDARY]: "#FF8C00",
  [ItemType.UNCOMMON]: "#00AF38",
  [ItemType.EPIC]: "#CB35FF",
  [ItemType.COMMON]: "#AFAFAF",
  [ItemType.RARE]: "#00A9CF",
};
export const Properties = () => {
  // const { data } = props;
  // const [assets, setAssets] = useState<Asset_type[]>([]);
  const assets = [
    {
      type: ItemType.LEGENDARY,
      name: "sentry",
      network: "Binance Smart Chain",
      is_nft: false,
      value: 0,
      image: sentry_legendary,
    },
    {
      type: ItemType.UNCOMMON,
      name: "missile launcher",
      network: "Binance Smart Chain",
      is_nft: true,
      value: 50,
      image: missile_launcher_uncommon,
    },
    {
      type: ItemType.EPIC,
      name: "mortar",
      network: "Ethereum",
      is_nft: true,
      value: 0,
      image: mortar_epic,
    },
    {
      type: ItemType.COMMON,
      name: "mortar",
      network: "Binance Smart Chain",
      is_nft: true,
      value: 0,
      image: mortar_common,
    },
    {
      type: ItemType.UNCOMMON,
      name: "missile launcher",
      network: "Binance Smart Chain",
      is_nft: true,
      value: 50,
      image: missile_launcher_uncommon,
    },
    {
      type: ItemType.EPIC,
      name: "mortar",
      network: "Ethereum",
      is_nft: true,
      value: 0,
      image: mortar_epic,
    },
    {
      type: ItemType.COMMON,
      name: "mortar",
      network: "Binance Smart Chain",
      is_nft: true,
      value: 0,
      image: mortar_common,
    },
    {
      type: ItemType.EPIC,
      name: "mortar",
      network: "Ethereum",
      is_nft: true,
      value: 0,
      image: mortar_epic,
    },
  ];
  // const [searchText, setSearchText] = useState<string>('');
  // const [filteredAssets, setFilteredAssets] = useState<Asset_type[]>([]);
  // const [selectedCategory, setSelectedCategory] = useState<string>('all');
  // useEffect(() => {
  //     const fetchAsset = async () => {
  //         const { getAssets } = userService;
  //         let user_assets: any = await getAssets();
  //         if(user_assets && user_assets.code === 0 && user_assets.data) {
  //             setAssets(user_assets.data.assets);
  //             setFilteredAssets(user_assets.data.assets)
  //         }
  //         else {
  //             setAssets([]);
  //             setFilteredAssets([]);
  //         }
  //         console.log(user_assets);
  //     }
  //     fetchAsset();
  // },[])
  const AssetCard = ({ item }: CardProps) => {
    const { image, name } = item;
    const history = useHistory();
    const handleOnClick = (event: any) => {
      event.preventDefault();
      history.push({
        pathname: locations.item(),
        state: item,
      });
    };
    return (
      <div
        className="border-panel-item overflow-hidden flex flex-col itemCard"
        onClick={handleOnClick}
      >
        <div
          className="rounded-tl-md rounded-br-md px-2 text-xs self-start"
          style={{ margin: "5px 0 0 6px", backgroundColor: colors[item.type] }}
        >
          {item.type}
        </div>
        <div className="pl-6 pr-8 w-full flex flex-col justify-center items-center">
          <div className="w-full">
            <img className="w-64 h-48" src={image} alt="" />
          </div>
          <div className="w-full text-left text-xl h-26 pb-2">{name}</div>
          <div className="divider w-full flex flex-col gap-2">
            <p className="text-gray-400 w-full text-left text-xs">
              {item.network}
            </p>
            <p className="w-full text-left text-sm">
              {item.is_nft ? "NFT" : "INGAME"}
            </p>
          </div>
          <button
            className={`self-end mb-8 w-26 mt-2 rounded text-sm ${
              item.is_nft && item.value > 0
                ? "btn-gradient-blue"
                : "btn-gradient-pink"
            } px-3 py-1`}
          >
            {!item.is_nft
              ? "Mint"
              : item.value
              ? "Off Market"
              : "List For Sale"}
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
      <p className="text-2xl">Properties</p>
      <div className="flex gap-8">category</div>
      <div className="flex flex-wrap max-w-5xl gap-4">
        {assets.map((item, index) => (
          <div key={index}>
            <AssetCard item={item} />
          </div>
        ))}
      </div>
    </>
  );
};
