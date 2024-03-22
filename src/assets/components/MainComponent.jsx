import Button from "@mui/material/Button";
import { useState,useEffect } from "react";
import { ethers } from 'ethers';

const MainComponent = () => {
    const [address, setAddress] = useState('Connect Wallet');
     useEffect(() => {
        // Function to handle the accountsChanged event
        const handleAccountsChanged = (newAccounts) => {
            setAddress(newAccounts[0] || 'Connect Wallet');
        };

        // Subscribe to the accountsChanged event
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', handleAccountsChanged);
        }

        // Cleanup function to unsubscribe from the event when component unmounts
        return () => {
            if (window.ethereum) {
                window.ethereum.off('accountsChanged', handleAccountsChanged);
            }
        };
    }, []);
    // const [balance, setBalance] = useState(null);

   const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAddress(accounts[0]);
            const balanceValue = await window.ethereum.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'] });
            console.log("Balance value:", balanceValue);
            
            // Convert balanceValue to Ether
            // const balanceInEther = parseFloat(balanceValue) / 1e18;
            // setBalance(balanceInEther.toString());
        } catch (error) {
            console.error(error);
        }
    } else {
        alert('MetaMask is not installed. Please install MetaMask extension to connect your wallet.');
    }
};
    
    const sendTx=async()=>
    {
        await ethereum.request({method:'eth_sendTransaction',
        params:[
            {
                to:"0x42DAce9DF3e5847e39bEdD0cAD4cB982c21998cA",
                from:address,
                value:'0x186A0',
                chainId:'0xAA36A7'
            }
        ]})
    }


    return (
        <div className="w-full pb-12 mt-[120px]">
            <div className="w-80% flex flex-col items-center justify-center mx-auto">
                <div className="text-center text-4xl font-extrabold mb-7">
                    Revolutionizing Farming Insurance Refunds with Cryptocurrency
                </div>
                <div className="text-sm text-center px-5 mb-7">
                    Get refunds for your farming insurance claims using Cryptocurrency.
                    Join us today and experience the future of insurance.
                </div>
                <div className="flex justify-center">
                    <Button variant="outlined" onClick={connectWallet}>{address}</Button>
                    {/* <Button variant="outlined" onClick={connectWallet}>Check Balance</Button> */}
                </div>
                {/* {balance !== null && (
                    <div className="text-center mt-3">Balance: {balance} ETH</div>
                )} */}
            </div>

            <div className="w-80% mt-20 flex flex-col items-center justify-center mx-auto">
                <div className="text-center text-green-500 text-4xl font-extrabold mb-7">
                    Revolutionizing Farming Insurance Refunds with Cryptocurrency
                </div>
                <div className="text-sm text-center px-5 mb-7">
                    At Farming Insurance Company, we are committed to supporting farmers.
                    We provide refunds for successful insurance claims and accept donations
                    in cryptocurrency to further empower the farming community.
                </div>
                <div className="flex justify-center">
                    <Button variant="contained"onClick={sendTx} >Donate</Button>
                </div>
            </div>

            <div className="w-80% mt-20 flex justify-center items-center mx-auto">
                <div className="text-center">
                    <div className="text-4xl font-extrabold mb-6">
                        Start Your Claim Today
                    </div>
                    <div className="text-sm mb-6">
                        Get the refunds you deserve for your farming insurance claims.
                        Donate to support farmers worldwide.
                    </div>
                </div>
                <div className="img p-6">
                    <img className="w-80 rounded-3xl" src="https://i.ibb.co/7KrTPD7/crop1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MainComponent;
