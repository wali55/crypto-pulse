import { createSlice } from '@reduxjs/toolkit';
import { initialCryptoData } from './cryptoData';

// Define a type for each crypto asset
export interface CryptoAsset {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  percentChange1h: number;
  percentChange24h: number;
  percentChange7d: number;
  marketCap: string;
  volume24h: string;
  circulatingSupply: string;
  maxSupply: string;
  chart: string;
}

// Define the state type
const initialState: CryptoAsset[] = initialCryptoData;

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrices: (state) => {
      return state.map(asset => {
        const priceChange = (Math.random() - 0.5) * 100;
        const volumeChange = (Math.random() - 0.5) * 5;
        return {
          ...asset,
          price: +(asset.price + priceChange).toFixed(2),
          percentChange1h: +(Math.random() * 2 - 1).toFixed(2),
          percentChange24h: +(Math.random() * 4 - 2).toFixed(2),
          percentChange7d: +(Math.random() * 10 - 5).toFixed(2),
          volume24h: `${(parseFloat(asset.volume24h) + volumeChange).toFixed(2)}B`,
        };
      });
    }
  }
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;
