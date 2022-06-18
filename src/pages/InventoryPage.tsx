import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { locations } from "../locations";

// import { NotificationManager } from 'react-notifications';

import { userService } from "../services";

import "./inventoryPage.css";

export type Asset_type = {
  is_nft: boolean;
  contract_address: string;
  description: string;
  image: string;
  name: string;
  token_id: number;
  category: string | null;
  category_id: number;
  rarity_id: number;
  mint_signature: string | null;
};

type Props = {
  item: Asset_type;
};

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const AssetCard = ({ item }: Props) => {
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
      className="bg-group1091-image px-6 py-6 overflow-hidden bg-no-repeat flex flex-col justify-center items-center itemCard"
      onClick={handleOnClick}
    >
      <div className="w-28 h-28">
        <img src={image} alt="" />
      </div>
      <div className="text-center mt-6 text-xs h-26 pb-3">{name}</div>
      {item.is_nft && "NFT"}
    </div>
  );
};

const categoryArray = [
  { category: "all", categoryName: "All Assets" },
  { category: "Lootbox", categoryName: "Loot Box" },
  { category: "Land", categoryName: "Land" },
  { category: "Boardingpass", categoryName: "Boardingpass" },
  { category: "Building", categoryName: "Building" },
  { category: "Tower", categoryName: "Tower" },
  { category: "Trap", categoryName: "Trap" },
];

interface CategoryMenuProps {
  selectedCategory: string;
  handleSelectCategory: (value: string) => void;
}

const CategorySidebar = ({
  selectedCategory,
  handleSelectCategory,
}: CategoryMenuProps) => {
  return (
    <div className="NFTSidebar">
      <div className="sidebar sub-header">Categories</div>
      <ul className="Menu NFTSections">
        {categoryArray.map((category, i) => {
          return (
            <li
              key={`categoryMenu-${i}`}
              className={`MenuItem hover:active ${
                category.category === selectedCategory ? "active" : ""
              }`}
              onClick={() => handleSelectCategory(category.category)}
            >
              <div className="content">{category.categoryName}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const InventoryPage = () => {
  const [assets, setAssets] = useState<Asset_type[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredAssets, setFilteredAssets] = useState<Asset_type[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const fetchAsset = async () => {
      const { getAssets } = userService;
      let user_assets: any = await getAssets();
      if (user_assets && user_assets.code === 0 && user_assets.data) {
        setAssets(user_assets.data.assets);
        setFilteredAssets(user_assets.data.assets);
      } else {
        setAssets([]);
        setFilteredAssets([]);
      }
      console.log(user_assets);
    };
    fetchAsset();
  }, []);

  const filterAsset = (filterText: string, selCategory: string): void => {
    if (filterText || selCategory !== "all")
      setFilteredAssets(
        assets.filter(
          (asset: Asset_type) =>
            (filterText &&
              selCategory !== "all" &&
              asset.name.toLowerCase().includes(filterText.toLowerCase()) &&
              asset.category === selCategory) ||
            (filterText &&
              selCategory === "all" &&
              asset.name.toLowerCase().includes(filterText.toLowerCase())) ||
            (!filterText &&
              selCategory !== "all" &&
              asset.category === selCategory)
        )
      );
    else setFilteredAssets(assets);
  };

  const handleSelectCategory = (v: string): void => {
    filterAsset(searchText, v);
    setSelectedCategory(v);
  };

  const handleOnChange = (e: InputEvent): void => {
    filterAsset(e.target.value, selectedCategory);
    setSearchText(e.target.value);
  };

  return (
    <>
      {/* <NavBar/> */}
      <div className="inventory">
        <div className="header">
          <div className="container mx-auto h-full py-4">My Inventory</div>
        </div>
        <div className="sub-title">
          <div className="container mx-auto py-4 flex justify-end">
            <span>SpaceY 2025</span>
          </div>
        </div>
        <div className="header-divider"></div>
        <div className="container mx-auto mt-5 NFTBrowse">
          <div className="Row">
            <div className="Column left sidebar hidden md:block">
              <CategorySidebar
                selectedCategory={selectedCategory}
                handleSelectCategory={handleSelectCategory}
              />
            </div>
            <div className="Column right grow">
              <div className="NFTFilters">
                <div className="topbar">
                  <div className="TextFilter Filter">
                    <div className="text-input">
                      <input
                        placeholder={`Search ${filteredAssets.length} results...`}
                        value={searchText}
                        onInput={handleOnChange}
                      />
                    </div>
                  </div>
                  {/* <div className="topbar-filter">
                                        <div role="listbox" aria-expanded="false" className="ui dropdown">
                                            <div className="text" role="alert" aria-live="polite" aria-atomic="true">Recently listed</div>
                                            <i aria-hidden="true" className="dropdown icon"></i>
                                            <div className="left menu transition">
                                                <div role="option" aria-checked="false" aria-selected="false" className="item">
                                                    <span className="text">Cheapest</span>
                                                </div>
                                                <div role="option" aria-checked="true" aria-selected="true" className="active selected item">
                                                    <span className="text">Recently listed</span>
                                                </div>
                                                <div role="option" aria-checked="false" aria-selected="false" className="item">
                                                    <span className="text">Newest</span>
                                                </div>
                                                <div role="option" aria-checked="false" aria-selected="false" className="item">
                                                    <span className="text">Name</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                </div>
              </div>
              <div className="ui cards flex flex-row justify-around mt-5">
                {filteredAssets.map((asset, i) => {
                  return (
                    <AssetCard key={`${asset.token_id}-${i}`} item={asset} />
                  );
                })}
              </div>
              {!filteredAssets.length ? (
                <div className="empty">No results</div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
