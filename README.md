## Overview
This repository contains a JavaScript script that utilizes Alchemy's SDK to fetch all NFTs owned by a specified address. For each NFT, the fields below are printed, however, to see all fields refer to the [Alchemy API reference](https://docs.alchemy.com/reference/getnfts):

- Name
- Contract Address
- Token ID
- Token Type


## Steps to Run

Before running the script, ensure that you have [Node.js, npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) installed on your system. 

Follow these steps to run the script:

1. Clone this repository to your local machine:
`git clone https://github.com/jrp2212/Get-NFTs-by-Address.git`


2. Navigate to the project folder: `cd Get-NFTs-by-Address`


3. Open the `sample.env` file and update the value for the API Key to your own value and rename file to `.env`.

4. Open `get_nfts_for_owner.js` and update the value of the Wallet Address found within the main function to reflect the wallet that you will be querying. 


5. Initialize the project by running the following command: `yarn init --yes`


6. Install the Alchemy SDK and the `dotenv` package running the following commands: `yarn add alchemy-sdk dotenv`


7. Run the script in the terminal: `node get_nfts.js`


By following these steps, the script will execute and fetch the NFTs owned by the specified address, printing out the desired fields to the console.


## Frequently Used Options and Best Practices
When working with the Alchemy SDK, there are several options and best practices that you can consider:

### Pagination
By default, the request for NFTs has a page size of 100. If you have a large number of NFTs and want to retrieve all of them, you can implement pagination. Alchemy's API supports pagination using the `page` and `size` parameters. You can adjust the `size` parameter to specify the number of NFTs to retrieve per page and use the `page` parameter to iterate through the pages of results.

### Filtering and Excluding NFTs
The Alchemy API allows you to apply filters to your NFT requests. For example, you can exclude certain NFTs based on specific criteria. The exact filtering options depend on the available fields and operators supported by Alchemy's API. Please refer to the linked API reference doc above for more information on how to apply filters to your requests.
