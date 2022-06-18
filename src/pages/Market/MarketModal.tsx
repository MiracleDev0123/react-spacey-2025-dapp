import { useContext, useEffect, useState } from "react";
import Modal from "../../components/Dialog";
import { Button, MarketItemProps } from "../../components/MarketCard";
import { ellipseAddress } from "../../lib/utils";
import WalletInitialize1 from "../../images/market/wallet_initialize1.png";
import WalletInitialize2 from "../../images/market/wallet_initialize2.png";
import Initialized from "../../images/market/checked.png";
import styled from "styled-components";
import { Web3ModalContext } from "../../contexts/Web3ModalProvider";
import { Price } from "./MarketItemDetail";
import CheckBox from "../../images/market/check.png";
import useBalance from "../../_api/useBalance";
import usePriceData from "../../_api/usePriceData";

interface MarketModalProps {
  item: MarketItemProps;
  count: number;
}

enum Steps {
  INITIAL = "INITIAL",
  APPROVE = "APPROVE",
  CHECKOUT = "CHECKOUT",
  COMPLETE = "COMPLETE",
}

const TxButton = styled.button<{ primary?: boolean }>`
  padding: 3px 10px;
  border-radius: 3px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  ${({ primary = false }) => ({
    background: primary
      ? "linear-gradient(270deg, #D02280 0%, #493E8F 100%)"
      : "#4D4A61",
  })};
`;

const Item = ({ item }: { item: MarketItemProps }) => (
  <div className="flex items-center ">
    <img className="w-24" src={item.img_url} alt="item logo" />
    <div className="md:ml-4 text-sm">
      <p className="opacity-70">Game: SpaceY2025</p>
      <p className="mt-3">Owner: {ellipseAddress(item.owner)}</p>
    </div>
  </div>
);

const MarketModal: React.FC<MarketModalProps> = ({ item, count }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [step, setStep] = useState<Steps>(Steps.INITIAL);
  const { connect, account, chainId } = useContext(Web3ModalContext);
  const balance = useBalance(chainId || 1);
  const priceData = usePriceData();

  useEffect(() => {
    if (!account && open) connect();
    if (account) setStep(Steps.APPROVE);
  }, [account, connect, open]);

  return (
    <>
      <Button className="text-sm rounded" onClick={() => setOpen(true)}>
        Buy Now
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={
          step === Steps.INITIAL || step === Steps.APPROVE ? (
            <Item item={item} />
          ) : step === Steps.CHECKOUT ? (
            <p className="text-center text-2xl">Complete checkout</p>
          ) : null
        }
        content={
          step === Steps.INITIAL || step === Steps.APPROVE ? (
            <div className="text-center">
              <p className="text-2xl">Initialize your wallet</p>
              <img
                className="w-60 m-auto mt-6"
                src={
                  step === Steps.INITIAL ? WalletInitialize1 : WalletInitialize2
                }
                alt="wallet initialize"
              />
              {step === Steps.APPROVE && (
                <img
                  src={Initialized}
                  className="m-auto w-10 mt-10"
                  alt="wallet checked"
                />
              )}
            </div>
          ) : step === Steps.CHECKOUT ? (
            <div className="md:px-8">
              <div className="md:flex justify-between items-start">
                <div>
                  <p className="mb-4 md:mb-10">Item</p>
                  <Item item={item} />
                </div>
                <div className="mt-4 md:mt-0">
                  <p className="mb-4 md:mb-10">Total</p>
                  <div className="flex flex-col md:items-end">
                    <Price price={Number(item.price) * count} />
                    <p className="text-sm mt-3">
                      ${" "}
                      {(
                        count *
                        Number(item.price) *
                        (priceData ? priceData["spacey-2025"].usd : 0)
                      ).toFixed(2)}{" "}
                      USD
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center mt-10">
                <img src={CheckBox} alt="check" />
                <p className="text-xs opacity-70 ml-1">
                  By checking this box, I agree to MetaspaceY’s Term of Service
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <p className="text-2xl">Checkout successfully!</p>
              <img src={item.img_url} className="w-40 m-auto mt-5" alt="item" />
            </div>
          )
        }
        footer={
          step === Steps.INITIAL || step === Steps.APPROVE ? (
            <TxButton
              disabled={step === Steps.INITIAL ? true : false}
              primary={step === Steps.INITIAL ? false : true}
              onClick={() =>
                step === Steps.APPROVE ? setStep(Steps.CHECKOUT) : null
              }
            >
              Approve this item for checkout
            </TxButton>
          ) : step === Steps.CHECKOUT ? (
            balance.isZero() ? (
              <div className="flex justify-center">
                <div className="balance-warning">
                  <TxButton disabled>Confirm checkout</TxButton>
                  <div className="warning-box text-sm">
                    Not enough SPAY to complete purchase
                  </div>
                </div>
                <TxButton className="ml-4" primary>
                  Add funds
                </TxButton>
              </div>
            ) : (
              <TxButton primary onClick={() => setStep(Steps.COMPLETE)}>
                Confirm checkout
              </TxButton>
            )
          ) : (
            <div className="flex justify-center">
              <TxButton className="w-32" onClick={() => setOpen(false)}>
                Close
              </TxButton>
              <TxButton className="ml-4 w-32">View Item</TxButton>
            </div>
          )
        }
      />
    </>
  );
};

export default MarketModal;
