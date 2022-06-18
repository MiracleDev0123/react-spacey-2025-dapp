import { useHistory } from "react-router-dom";
import styled from "styled-components";
import MarketItemBG from "../images/market/market_item.png";
import Spacey from "../images/market/spacey.png";
import { locations } from "../locations";
import { colors, ItemType } from "../pages/Account/Properties";
import { ComponentType } from "../pages/Market/MarketItemDetail";
import { PropertyType } from "../pages/Market/MarketPage";

export interface MarketItemProps {
  img_url: any;
  content?: string;
  type: ItemType;
  name: string;
  price: string;
  chain: string;
  head?: string;
  propertyType?: PropertyType;
  owner?: string;
  buyFrom?: string;
  components?: ComponentType[];
  attributes?: Attribute[];
  expireDate?: string;
}

interface Attribute {
  label: string;
  value?: string;
  color?: string;
}

export interface DetailProps {
  props: MarketItemProps;
  buyFrom: string;
}

const MarketItemContent = styled.div`
  display: inline-block;
  width: 100%;
  position: relative;
  box-shadow: 4px 5px 9px rgba(0, 0, 0, 0.8),
    inset 5px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      180deg,
      rgba(4, 0, 22, 0.29) 0%,
      rgba(99, 0, 0, 0.42) 100%
    );
  }

  &:hover:before {
    padding: 3px !important;
  }

  &:after {
    content: "";
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, #ca2381 0%, #4d3e8f 100%);
    padding: 1px;
    border-radius: 6px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const MarketItemImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
`;

export const Button = styled.button`
  background: linear-gradient(270deg, #d02280 0%, #493e8f 100%);
  padding: 3px 30px;
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.8);
`;

const MarketItem: React.FC<DetailProps> = ({ props, buyFrom }) => {
  const history = useHistory();

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 2xl:w-1/6 p-4">
      <MarketItemContent
        onClick={() => {
          history.push({
            pathname: locations.marketDetail(),
            state: { item: { ...props, buyFrom } },
          });
        }}
      >
        <MarketItemImg src={MarketItemBG} />
        <div className="flex">
          <div
            className="rounded-tl-md rounded-br-md px-1 text-xs self-start shadow-md w-20"
            style={{ background: colors[props.type], margin: "1px" }}
          >
            {props.type}
          </div>
        </div>
        <div className="h-76 sm:h-48 text-center">
          <img
            src={props.img_url}
            alt="market item"
            className="w-full h-full px-4 py-2 m-auto"
          />
        </div>
        <div className="p-4 pt-2">
          <div className="flex justify-between">
            <p className="text-lg">{props.name}</p>
          </div>
          <div className="text-xs opacity-50">{props.chain}</div>
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center">
              <div>
                <img src={Spacey} alt="spacey" className="flex" />
              </div>
              <span className="text-lg ml-2">{props.price}</span>
            </div>
            <Button className="text-xs rounded">Buy</Button>
          </div>
        </div>
      </MarketItemContent>
    </div>
  );
};

export default MarketItem;
