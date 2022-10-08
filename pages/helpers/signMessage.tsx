import { ethers } from "ethers";

const signMessage = async (message: string, signer: ethers.Signer) => {
  const messageBytes = ethers.utils.toUtf8Bytes(message);
  const messageDigest = ethers.utils.keccak256(messageBytes);
  const signature = await signer.signMessage(messageDigest);
  return signature;
}

  