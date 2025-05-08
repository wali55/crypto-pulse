# 🪙 CryptoPulse - Real-Time Crypto Price Tracker

A responsive React + Redux Toolkit application that simulates real-time cryptocurrency price updates using mocked WebSocket behavior. Displays 5 assets (like CoinMarketCap) with a dynamic table UI and state managed entirely via Redux.

---

## 🚀 Demo

![Watch Video Demo](https://your-video-link.com)

---

## 🛠️ Tech Stack

- **React** – UI framework
- **TypeScript** – Static type checking
- **Redux Toolkit** – State management
- **Tailwind CSS** – Styling and responsiveness
- **Mock WebSocket** – Simulated with `setInterval`
- **Vite** – Fast dev server and build tool (optional, if used)

---

## 🧱 Architecture

```text
📁 public/
└── 📁 assets/
    ├── bitcoin.png
    ├── ethereum.png
    ├── tether.png
    ├── binance.png
    └── cardano.png

📁 src/
├── 📁 components/
│   └── CryptoTable.tsx       # Responsive table component
├── 📁 hooks/
│   └── hooks.ts              # useAppSelector & useAppDispatch
├── 📁 redux/
│   ├── store.ts              # Redux store setup
│   └── 📁 crypto/
│       ├── cryptoData.ts     # Initial sample data
│       └── cryptoSlice.ts    # Redux slice for crypto updates
├── App.tsx                   # Main app with real-time logic
└── index.tsx                 # Entry point with Redux Provider
```

---

## ⚙️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/wali55/crypto-pulse.git
   cd crypto-pulse

2. **Install dependencies**
   ```bash
   npm install

3. **Start the app**
   ```bash
   npm run dev

4. **Build for production**
   ```bash
   npm run build

---

## 📸 Features

- Real-time price updates (simulated every 2 seconds)
- Redux-managed global state
- Color-coded % changes (green/red)
- Responsive table layout with 7D chart placeholders
- TypeScript safety

---

## 📃 License

MIT