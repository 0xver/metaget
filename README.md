# MetaGet

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![build](https://github.com/ntkme/github-buttons/workflows/build/badge.svg)

## Get NFT metadata using the contract address and token ID

MetaSearch is a NFT metadata lookup providing the name, symbol, tokenURI, and owner (ERC721 only). Enter the NFT contract address and token ID to fetch its metadata (MetaMask required). Install MetaGet to use the interface locally.

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
Install MetaMask and connect to the local host. Enter the NFT contract address and the token ID to fetch its metadata. Clicking on the terminal boxes will copy the information to the clipboard. Use MetaGet to search for NFTs on other EVM based blockchains with the correct network selected in MetaMask.