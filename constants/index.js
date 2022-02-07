//require("dotenv").config();
import NFT_CONTRACT from "./nft_contract.json"
import TOKEN_CONTRACT from "./token_contract.json"

export const NFT_CONTRACT_ABI = NFT_CONTRACT.abi;
export const NFT_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS
export const TOKEN_CONTRACT_ABI = TOKEN_CONTRACT.abi
export const TOKEN_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS;
