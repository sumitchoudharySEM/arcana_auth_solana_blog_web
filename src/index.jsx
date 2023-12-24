import ReactDOM from "react-dom"
import { App } from "src/App"
import "./index.css"
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import { Auth } from "@arcana/auth-react";

const provider = new AuthProvider(
  "xar_test_05414260bd4a6780b87e6bd8aabb36c9a070a54d", // App client ID
    { 
      position: 'left',         // default: right
      theme: 'light',           // default: dark
      alwaysVisible: false,     // default: true, wallet always visible
      setWindowProvider: true,  // default: false, window.ethereum not set
      connectOptions: {
        compact: true           // default: false, regular plug-and-play login UI
      },
      chainConfig: {
        chainId: '2',                    // defaults to Ethereum
        rpcUrl: 'https://api.testnet.solana.com', // defaults to 'https://rpc.ankr.com/eth'
      },
  }
);

ReactDOM.render(
    <ProvideAuth provider={provider}>
    <App />
    </ProvideAuth>
    , document.getElementById("root"))
