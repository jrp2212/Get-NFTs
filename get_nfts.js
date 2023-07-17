// Import necessary modules
const { Alchemy, Network } = require("alchemy-sdk");
require('dotenv').config();

// Configure Alchemy SDK with API key and network
const config = {
  apiKey: process.env.API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);


/**
 * Main function to fetch and print NFTs for a specific owner.
 */
const main = async () => {
  // Provided below is a sample address
  // Configure accordingly
  const address = "vitalik.eth";
  const nfts = await alchemy.nft.getNftsForOwner(address);

  // Print NFT details
  // Refer to https://docs.alchemy.com/reference/getnfts to print more fields
  nfts.ownedNfts.forEach((nft) => {
    console.log("Title:", nft.title);
    console.log("Contract Address:", nft.contract.address);
    console.log("Token ID:", nft.tokenId);
    console.log("Token Type:", nft.tokenType);
    console.log("----------------------------------");
  });
};


/**
 * Function to run the main function and handle any errors.
 * Executes the main function, exits the process with a success code if successful,
 * logs the error to the console and exits with an error code if an error occurs.
 */
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error;
    process.exit(1);
  }
};

runMain(); // Run the main function
