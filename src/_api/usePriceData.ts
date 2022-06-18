import { useEffect, useState } from "react";

export interface IAssetPrices {
  [key: string]: {
    usd: number;
    eth: number;
  };
}

const usePriceData = () => {
  const [priceData, setPriceData] = useState<IAssetPrices>();

  useEffect(() => {
    const getPrices = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=spacey-2025&vs_currencies=usd,eth"
      );

      if (response && response.status === 200) {
        const price = await response.json();
        setPriceData(price);
      }
    };

    getPrices();
  }, []);

  return priceData;
};

export default usePriceData;
