import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ethers } from 'ethers';
import { initWeb3Onboard } from '../utils/services';
import { useConnectWallet, useSetChain } from '@web3-onboard/react';

let provider;

// Create a context
const ConnectContext = createContext();

// Create a provider component
function ConnectProvider({ children }) {

    const [{ wallet }, connect, disconnect] = useConnectWallet();

    const [web3Onboard, setWeb3Onboard] = useState(null);

    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount] = useState('');
    const [{ chains, connectedChain, settingChain }, setChain] = useSetChain();    
    const develop = true;


    useEffect(() => {
        setWeb3Onboard(initWeb3Onboard)
    }, []);

    useEffect(() => {
        if (!wallet?.provider) {
            provider = null
        } else {
            provider = new ethers.providers.Web3Provider(wallet.provider, 'any');

            console.log("he-------------", wallet)

        }

        if(!wallet) {
            setIsConnected(false);
        } else {
            setAccount(wallet?.accounts[0]?.address)
            setIsConnected(true);
        }
    }, [wallet]);      

    const connectWallet = async () => {
        const walletsConnected = await connect();
        setAccount(walletsConnected[0].accounts[0].address);
        setIsConnected(true);
        window.localStorage.setItem("connectedWallets", walletsConnected[0].label)
        toast.success("Success Connected!");
        console.log('connected wallets: ', walletsConnected);
        if(develop == true) {
            setChain({ chainId: "0x5" })
        } else {
            setChain({ chainId: "0x1" })
        }
    };

    const disconnectWallet = async () => {
        await disconnect(wallet);
        setAccount("");
        setIsConnected(false);
        toast.success("Success disconnected!");
        window.localStorage.removeItem('connectedWallets');
    };

    return (
        <ConnectContext.Provider value={{ account, isConnected, connectWallet, disconnectWallet }}>
            {children}
        </ConnectContext.Provider>
    );
}

// Custom hook to consume the context
function useConnect() {
    return useContext(ConnectContext);
}

export { ConnectProvider, useConnect };