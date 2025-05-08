import React, { useEffect } from "react";
import { useAppDispatch } from "./hooks/hooks";
import CryptoTable from "./components/CryptoTable";
import { updatePrices } from "./redux/crypto/cryptoSlice";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-neutral-50 text-gray-800">
      <NavBar />
      <div className="px-6 py-4">
        <div className="max-w-3xl mx-auto my-4">
          <h1 className="text-2xl md:text-5xl font-semibold text-center mb-6 text-neutral-800 mt-10 tracking-tight">
            Track Live Market Data for Top Cryptocurrencies
          </h1>
          <p className="text-neutral-600 text-xs md:text-sm max-w-lg mx-auto text-center">
          Monitor top coins like Bitcoin, Ethereum, and Tether with dynamic updates. View market cap, price changes, trading volume, and more.
          </p>
        </div>
        <CryptoTable />
      </div>
      <Footer />
    </div>
  );
};

export default App;
