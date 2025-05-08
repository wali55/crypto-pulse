import React from 'react';
import { useAppSelector } from '../hooks/hooks'; 
import type { RootState } from '../redux/store';

const CryptoTable: React.FC = () => {
  const crypto = useAppSelector((state: RootState) => state.crypto);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white text-sm text-left rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <thead className="text-xs font-bold text-neutral-500 uppercase">
          <tr>
            <th className="px-3 py-3">#</th>
            <th className="px-3 py-3">Logo</th>
            <th className="px-3 py-3">Name</th>
            <th className="px-3 py-3">Symbol</th>
            <th className="px-3 py-3">Price</th>
            <th className="px-3 py-3">1h %</th>
            <th className="px-3 py-3">24h %</th>
            <th className="px-3 py-3">7d %</th>
            <th className="px-3 py-3">Market Cap</th>
            <th className="px-3 py-3">24h Volume</th>
            <th className="px-3 py-3">Circulating</th>
            <th className="px-3 py-3">Max</th>
            <th className="px-3 py-3">7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {crypto.map((c, i) => (
            <tr key={c.symbol} className="border-t-2 border-neutral-100 hover:bg-violet-50 text-sm font-semibold text-neutral-600">
              <td className="px-3 py-2">{i + 1}</td>
              <td className="px-3 py-2">
                <img src={c.logo} alt={c.name} className="w-6 h-6" />
              </td>
              <td className="px-3 py-2 text-neutral-900">{c.name}</td>
              <td className="px-3 py-2 font-normal">{c.symbol}</td>
              <td className="px-3 py-2">${c.price}</td>
              <td className={`px-3 py-2 ${c.percentChange1h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {c.percentChange1h}%
              </td>
              <td className={`px-3 py-2 ${c.percentChange24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {c.percentChange24h}%
              </td>
              <td className={`px-3 py-2 ${c.percentChange7d >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {c.percentChange7d}%
              </td>
              <td className="px-3 py-2">{c.marketCap}</td>
              <td className="px-3 py-2">{c.volume24h}</td>
              <td className="px-3 py-2">{c.circulatingSupply}</td>
              <td className="px-3 py-2">{c.maxSupply}</td>
              <td className="px-3 py-2">
                <img src={c.chart} alt="7d chart" className="w-[6rem]" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
