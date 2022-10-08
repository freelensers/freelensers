import { ethers } from "ethers";
import { useEffect } from "react";

useEffect(() => {
  if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    // other stuff using provider here
  }
}, []);

export const signMessage = async (message: string) => {
  const signature = await signer.signMessage(message);
  return signature;
};