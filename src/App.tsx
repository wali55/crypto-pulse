import React, { useEffect } from 'react';
import { useAppDispatch } from './hooks/hooks'; 
import CryptoTable from './components/CryptoTable';
import { updatePrices } from './redux/crypto/cryptoSlice';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-neutral-50 text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-neutral-950">Crypto Tracker</h1>
      <CryptoTable />
    </div>
  );
};

export default App;

