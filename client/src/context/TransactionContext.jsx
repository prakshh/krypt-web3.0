import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

console.log({
    provider,
    signer,
    transactionsContract
});
}

export const TransactionsProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState('initialState');

const checkIfWalletIsConnect = async () => {
    if (!ethereum) return alert("Please install MetaMask.");

    const accounts = await ethereum.request({ method: "eth_accounts" });

    console.log(accounts);
}

const connectWallet = async () => {
  try {
    if (!ethereum) return alert("Please install MetaMask.");

    const accounts = await ethereum.request({ method: "eth_requestAccounts", });

    setCurrentAccount(accounts[0]);
  } catch (error) {
    console.log(error);

    throw new Error("No ethereum object");
  }
};

useEffect(() => {
    checkIfWalletIsConnect();
  }, []);
 
return (
        <TransactionContext.Provider value={{ connectWallet }}>
          {children}
        </TransactionContext.Provider>
      );
}
