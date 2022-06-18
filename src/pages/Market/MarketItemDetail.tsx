import styled from "styled-components";
import BackToLink from "../../components/BackToLink";
import BreadCrumb from "../../components/BreadCrumb";
import { locations } from "../../locations";
import DetailBG from "../../images/market/market_item_detail.png";
import { MarketItemProps } from "../../components/MarketCard";
import { useLocation } from "react-router-dom";
import { ellipseAddress } from "../../lib/utils";
import Spacey from "../../images/market/spacey.png";
import { useState } from "react";
import { PropertyType } from "./MarketPage";
import Map from "../../images/market/Map.png";
import MarketModal from "./MarketModal";

const MarketDetail = styled.div`
  background: url(${DetailBG}) no-repeat;
  background-size: cover;
  display: inline-block;
  width: 100%;
  position: relative;
  box-shadow: 4px 5px 9px rgba(0, 0, 0, 0.8),
    inset 5px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  overflow: hidden;

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

const Detail = styled.div`
  background: rgba(0, 0, 0, 0.25);
`;

const DetailBox = styled.div`
  border-bottom: 2px solid #231a34;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const Chain = styled.div`
  background: #332263;
  border-radius: 3px;
  padding: 2px 5px;
`;

const CountButton = styled.button`
  background: #493e8f;
  border-radius: 3px;
  outline: none;
`;

const Count = styled.div`
  background: rgba(255, 255, 255, 0.69);
  border: 1px solid #493e8f;
  box-sizing: border-box;
  border-radius: 3px;
  color: black;
`;

export type stateType = {
  item: MarketItemProps;
};

export interface ComponentType {
  img: any;
  label: string;
}

export const Price = ({ price }: { price: number }) => (
  <div className="flex items-center">
    <div>
      <img src={Spacey} alt="spacey" className="flex w-5" />
    </div>
    <span className="text-lg ml-2">{price} SPAY</span>
  </div>
);

const MarketItemDetail = () => {
  const { state } = useLocation<stateType>();
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <BreadCrumb title="Market" />
      <div className="container m-auto md:px-5 mt-4">
        <BackToLink link={locations.market()} />
        <MarketDetail className="mb-20">
          <div className="md:flex justify-between items-center">
            <div className="w-full md:w-1/2 p-4 md:p-8 flex justify-center items-center text-center">
              <div className="w-2/3 md:w-1/2">
                <img
                  src={state && state.item.img_url}
                  alt="item"
                  className="w-full"
                />
                <p className="opacity-60 mt-10 mb-2 text-xl">
                  Game: SpaceY2025
                  <br /> NFT
                </p>
                <Chain className="inline">({state.item.chain})</Chain>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-8">
              <Detail>
                <DetailBox>
                  <p className="text-3xl">{state.item.name}</p>
                  {state.item.content && (
                    <p className="text-sm opacity-60 mt-3">
                      {state.item.content}
                    </p>
                  )}
                </DetailBox>
                <DetailBox>
                  {state.item.propertyType === PropertyType.TURRETS && (
                    <>
                      {state.item.owner && (
                        <div className="flex items-center">
                          Owner:
                          <p className="opacity-60 ml-10">
                            {ellipseAddress(state.item.owner)}
                          </p>
                        </div>
                      )}
                      {state.item.components &&
                        state.item.components.length > 0 && (
                          <div className="mt-10">
                            <div>Components</div>
                            <div className="flex justify-center">
                              <div className="w-full md:w-3/4 flex justify-between pt-8">
                                {state.item.components.map(
                                  (component, index) => (
                                    <div key={index} className="text-center">
                                      <img
                                        src={component.img}
                                        alt="item component"
                                        className="h-10 m-auto"
                                      />
                                      <p className="text-sm opacity-60">
                                        {component.label}
                                      </p>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      {state.item.attributes &&
                        state.item.attributes.length > 0 && (
                          <div className="mt-8">
                            <div>Attributes</div>
                            <div className="flex justify-center">
                              <div className="w-full md:w-3/4 pt-4">
                                {state.item.attributes.map(
                                  (attribute, index) => (
                                    <div
                                      key={index}
                                      className="flex items-center text-sm py-1"
                                    >
                                      <div className="w-24 opacity-60">
                                        {attribute.label}
                                      </div>
                                      <div
                                        className="w-12"
                                        style={{ color: attribute.color }}
                                      >
                                        {attribute.value}
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                    </>
                  )}
                  {state.item.propertyType === PropertyType.BUILDINGS && (
                    <div className="text-sm opacity-70 pb-20">
                      what the loot box will include
                      <br /> Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                    </div>
                  )}
                  {state.item.propertyType === PropertyType.LANDS && (
                    <div className="text-center py-10">
                      <img
                        className="w-2/3 md:w-1/2 m-auto"
                        src={Map}
                        alt="map"
                      />
                    </div>
                  )}
                  {state.item.propertyType === PropertyType.BLINDBOX && (
                    <div className="text-sm opacity-70 pb-20">
                      what the loot box will include
                      <br /> Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                    </div>
                  )}
                  <div className="mt-8">Expire Date</div>
                  <div>{state.item.expireDate}</div>
                </DetailBox>
                <DetailBox style={{ border: "none" }}>
                  <div className="md:flex justify-between items-center">
                    <p>Buy From {state.item.buyFrom}</p>
                    <div className="mt-2 md:mt-0 flex items-center">
                      <CountButton
                        className="text-lg w-7"
                        onClick={() => {
                          if (count === 1) setCount(1);
                          else setCount(count - 1);
                        }}
                      >
                        -
                      </CountButton>
                      <Count className="w-20 text-center mx-1">{count}</Count>
                      <CountButton
                        className="text-lg w-7"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </CountButton>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4 market-buy">
                    <Price price={Number(state.item.price) * count} />
                    <MarketModal item={state.item} count={count} />
                  </div>
                </DetailBox>
              </Detail>
            </div>
          </div>
        </MarketDetail>
      </div>
    </>
  );
};

export default MarketItemDetail;
