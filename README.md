## Overview
This repository contains a JavaScript script that utilizes Alchemy's SDK to fetch all NFTs owned by a specified address. The script provides a demonstration of how to retrieve and print specific fields of the NFTs.

For each NFT, the following fields are printed:
- Name
- Contract Address
- Token ID
- Token Type


## Steps to Run

Before running the script, ensure that you have Node.js, npm, and yarn installed on your system. 

Follow these steps to run the script:

1. Clone this repository to your local machine:
`git clone https://github.com/jrp2212/getNftsForOwners.git`


2. Navigate to the project folder: `cd getNftsForOwners`


3. Open the `sample.env` file and update the values for the API Key and Wallet Address to your own values and rename file to `.env`.


4. Initialize the project by running the following command: `yarn init --yes`


5. Install the Alchemy SDK and the `dotenv` package running the following command: `yarn add alchemy-sdk dotenv`


6. Run the script in the terminal: `node getNftsForOwner_script.js`


## Frequently Used Options and Best Practices
To explore additional fields and their values, you can refer to the [Alchemy API reference](https://docs.alchemy.com/reference/getnfts) which provides a comprehensive list of available NFT fields. When working with the Alchemy SDK, there are several options and best practices that you can consider:

### Pagination
By default, the request for NFTs has a page size of 100. If you have a large number of NFTs and want to retrieve all of them, you can implement pagination. Alchemy's API supports pagination using the `page` and `size` parameters. You can adjust the `size` parameter to specify the number of NFTs to retrieve per page and use the `page` parameter to iterate through the pages of results.

### Filtering and Excluding NFTs
The Alchemy API allows you to apply filters to your NFT requests. For example, you can exclude certain NFTs based on specific criteria. The exact filtering options depend on the available fields and operators supported by Alchemy's API. You can refer to the [Alchemy API reference](https://docs.alchemy.com/reference/getnfts) for more information on how to apply filters to your requests.
