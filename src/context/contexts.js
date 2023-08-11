import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

// Create a context
const ConnectContext = createContext();

// Create a provider component
function ConnectProvider({ children }) {
    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount] = useState('');

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                // Request access to accounts
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                    setIsConnected(true);
                    toast.success("Success Connected")
                }
            } catch (error) {
                toast.error("Error connecting to wallet")
                console.error("Error connecting to wallet:", error);
            }
        }
    };

    const disconnectWallet = () => {
        // if (window.ethereum) {
        //     window.ethereum
        //         .request({ method: 'eth_logout' })
        //         .then(() => {
        //             setAccount('');
        //             setIsConnected(false);
        //             toast.success("Success Connected")
        //         })
        //         .catch(error => {
        //             toast.error("Error disconnecting to wallet" )
        //             console.log("Error disconnecting wallet:", error);
        //         });
        // }
        setAccount('');
                    setIsConnected(false);
                    toast.success("Success disConnected")
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