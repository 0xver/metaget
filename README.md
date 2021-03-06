# MetaGet

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/0xver/metaget/blob/master/LICENSE.md)

## Get NFT metadata using the contract address and token ID

MetaGet is a NFT metadata lookup providing the name, symbol, tokenURI, and owner. Enter the NFT contract address and token ID to fetch its metadata. Install MetaGet to use the interface locally.

# Installation
Clone metaget
```
gh repo clone 0xver/metaget
```
Install packages
```
npm install
```

# Local Operation
### Getting Started
Open the project directory
```
cd metaget && open .
```

### Build Interface
Build the MetaGet interface
```
npm run build
```

### Launch Local Server
Start the local server
```
npm run start
```

### Launch dApp Locally
Enter the local address in the address bar
```
http://localhost:3000
```

### Using dApp
Install a web3 browser or web3 extension and go to the local host address. Enter the NFT contract address and the token ID to fetch its metadata. Click on the terminal boxes to copy the information to the clipboard. Fetch NFT metadata on other EVM compatible blockchains by changing the selected provider network.