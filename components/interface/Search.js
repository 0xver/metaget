import styled from "styled-components"
import React, { useContext, useState } from "react"
import { ethers } from "ethers"
import IERC165 from "../abi/IERC165.json"
import IERC721 from "../abi/IERC721.json"
import IERC721Metadata from "../abi/IERC721Metadata.json"
import IERC1155MetadataURI from "../abi/IERC1155MetadataURI.json"

const Mobile = styled.div`
    @media (max-width: 570px) {
        margin-left: 10px;
        margin-right: 10px;
    }
`

const Container = styled.div`
    background: #202020;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: center;
    padding: 10px;
    border: 1px solid #676767;
    border-radius: 10px;
    max-width: 550px;
    margin: 20px auto;

    @media (max-width: 570px) {
        max-width: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        position: center;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 187px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
    }
`

const Orient = styled.div`
    justify-content: space-between;
    align-items: left;
    position: left;

    @media (max-width: 570px) {
        align-items: center;
        position: center;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 570px) {
        width: 100%;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 570px) {
        flex-direction: column;
    }
`

const Header = styled.h1`
    font-family: "Roboto", sans-serif;
    font-weight: 200;
    font-size: 18px;
    color: #fff;
    margin-block-start 0px;
    margin-left: 8px;
`

const Text = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 200;
    font-size: 12px;
    color: #fff;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 0px;
    margin-bottom: 5px;
`

const TextDrop = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 200;
    font-size: 12px;
    color: #fff;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 0px;
    margin-bottom: 5px;

    @media (max-width: 570px) {
        margin-top: 20px;
    }
`

const Contract = styled.input`
    font-family: monospace;
    font-weight: 200;
    font-size: 14px;
    text-align: center;
    border: 1px solid #676767;
    border-radius: 10px;
    background: #323232;
    color: #fff;
    width: 100%;
    padding: 30px 30px;

    &:focus {
        outline: none;
    }
`

const Id = styled.input`
    font-family: monospace;
    font-weight: 200;
    font-size: 24px;
    text-align: center;
    border: 1px solid #676767;
    border-radius: 10px;
    background: #323232;
    color: #fff;
    padding: 30px 30px;
    width: 27%;
    margin-left: 10px;

    &:focus {
        outline: none;
    }

    @media (max-width: 495px) {
        width: 50%;
    }
`

const Line = styled.hr`
    color: color;
    backgroundColor: color;
    height: size;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: -10px;
    margin-right: -11px;
    width: 100%;

    @media (max-width: 570px) {
        margin-left: -10px;
        margin-right: -11px;
    }
`

const Search = styled.button`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 13px;
    color: #fff;
    background-color: #B800FF;
    border-radius: 100px;
    border-width: 0px;
    border-color: #B800FF;
    padding: 9px 15px;
    width: 100%;
    margin-top: 20px;

    &:hover {
        color: #f1f1f1;
        background-color: #7600A4;
        border-color: #7600A4;
        cursor: pointer;
    }
`

const Metadata = styled.div`
    font-family: monospace;
    font-weight: 200;
    font-size: 12px;
    text-align: left;
    border: 1px solid #676767;
    border-radius: 10px;
    background: #000;
    color: #00ff00;
    padding: 15px;
    width: 259px;
    overflow-wrap: break-word;
    cursor: pointer;

    &:hover {
        background: #121212;
    }

    @media (max-width: 570px) {
        width: 100%;
        display: inline-block;
        word-break: break-word;
    }
`

const Preview = styled.img`
    border: 1px solid #676767;
    border-radius: 10px;
    width: 259px;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 570px) {
        width: 100%;
        border-radius: 18px;
    }
`

const Overflow = styled.div`
    overflow-wrap: break-word;
    width: 259px;

    @media (max-width: 570px) {
        width: 100%;
    }
`

const MarginText = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 200;
    font-size: 12px;
    color: #fff;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 15px;
    margin-bottom: 5px;
    text-align: left;

    @media (max-width: 570px) {
        margin-top: 20px;
    }
`

const Console = styled.div`
    font-family: monospace;
    font-weight: 200;
    font-size: 12px;
    text-align: left;
    border: 1px solid #676767;
    border-radius: 10px;
    background: #000;
    color: #00ff00;
    padding: 15px;
    width: 259px;
    overflow-wrap: break-word;
    cursor: pointer;

    &:hover {
        background: #121212;
    }

    @media (max-width: 570px) {
        width: 100%;
        display: inline-block;
        word-break: break-word;
    }
`

const MiniConsole = styled.div`
    font-family: monospace;
    font-weight: 200;
    font-size: 12px;
    text-align: left;
    border: 1px solid #676767;
    border-radius: 10px;
    background: #000;
    color: #00ff00;
    padding: 15px;
    width: 125px;
    overflow-wrap: break-word;
    cursor: pointer;

    &:hover {
        background: #121212;
    }

    @media (max-width: 570px) {
        width: 100%;
        display: inline-block;
        word-break: break-word;
    }
`

const FullScreenName = styled.div`
    @media (max-width: 570px) {
        width: 100%;
    }
`

const FullScreenSymbol = styled.div`
    @media (max-width: 570px) {
        width: 100%;
        margin-left: 10px;
    }
`

export default function SearchInterface() {
    const noImage = "/no-image.svg"
    const loadingImage = "/loading-image.svg"

    const [contractAddress, setContractAddress] = useState("")
    const [tokenId, setTokenId] = useState("")
    const [name, setName] = useState("unknown")
    const [symbol, setSymbol] = useState("unknown")
    const [uri, setUri] = useState("unknown")
    const [owner, setOwner] = useState("unknown")
    const [preview, setPreview] = useState(noImage)
    const [previewLink, setPreviewLink] = useState(noImage)
    const [statusMessage, setStatusMessage] = useState("")

    async function requestAccount() {
        await window.ethereum.request({ method: "eth_requestAccounts"})
    }

    async function getImage() {
        try {
            if (typeof window.ethereum !== "undefined") {
                const provider = new ethers.providers.Web3Provider(window.ethereum)
                const erc165 = new ethers.Contract(contractAddress, IERC165.abi, provider)
                const support = await erc165.supportsInterface(0x80ac58cd)
                const erc721metadata = new ethers.Contract(contractAddress, IERC721Metadata.abi, provider)
                const erc1155metadata = new ethers.Contract(contractAddress, IERC1155MetadataURI.abi, provider)
                var tokenUri
                if (support === true) {
                    tokenUri = await erc721metadata.tokenURI(tokenId)
                } else {
                    tokenUri = await erc1155metadata.uri(tokenId)
                }
                const gateway = "https://ipfs.io/ipfs/"
                /* const proxy = "https://thingproxy.freeboard.io/fetch/http://" */
                var cid
                var url
                if (tokenUri.startsWith("ipfs://")) {
                    cid = tokenUri.substring(7)
                    url = gateway.concat(cid)
                } else if (tokenUri.startsWith("https://api.opensea")) {
                    const trim = tokenUri.slice(0, -6)
                    const connect = trim.concat(tokenId)
                    url = connect
                    setUri(url)
                } else {
                    /* const trim = tokenUri.substring(7)
                    const connect = proxy.concat(trim) */
                    url = tokenUri
                }
                setPreview(loadingImage)
                const response = await fetch(url)
                const json = await response.json()
                const image = json.image
                setPreviewLink(image)
                if (image.startsWith("ipfs://")) {
                    cid = image.substring(7)
                    url = gateway.concat(cid)
                } else {
                    url = image
                }
                setPreview(url)
            } else {
                setStatusMessage("MetaMask is not connected")
            }
        } catch(e) {
            setPreview(noImage)
            console.log(e)
        }
    }

    async function networkTokenSearch() {
        try {
            if (typeof window.ethereum !== "undefined") {
                if (contractAddress !== "") {
                    const provider = new ethers.providers.Web3Provider(window.ethereum)
                    const erc721metadata = new ethers.Contract(contractAddress, IERC721Metadata.abi, provider)
                    const erc721 = new ethers.Contract(contractAddress, IERC721.abi, provider)
                    const erc1155metadata = new ethers.Contract(contractAddress, IERC1155MetadataURI.abi, provider)
                    const erc165 = new ethers.Contract(contractAddress, IERC165.abi, provider)
                    const support = await erc165.supportsInterface(0x80ac58cd)
                    var name
                    var symbol
                    var tokenUri
                    var owner
                    if (support === true) {
                        name = await erc721metadata.name()
                        symbol = await erc721metadata.symbol()
                        tokenUri = await erc721metadata.tokenURI(tokenId)
                        owner = await erc721.ownerOf(tokenId)
                    } else {
                        name = await erc721metadata.name()
                        symbol = await erc721metadata.symbol()
                        tokenUri = await erc1155metadata.uri(tokenId)
                        owner = "ERC1155 unsupported"
                    }
                    setName(name)
                    setSymbol(symbol)
                    setUri(tokenUri)
                    setOwner(owner)
                    await getImage()
                }
            } else {
                setStatusMessage("MetaMask is not connected")
            }
        } catch(e) {
            setPreview(noImage)
            setName("unknown")
            setSymbol("unknown")
            setUri("unknown")
            setOwner("unknown")
            console.log(e)
        }
    }

    return (
        <Mobile>
            <Container>
                <Orient>
                    <Header>
                        Search
                    </Header>
                    <Row>
                        <Contract 
                            value={contractAddress}
                            onChange={e => setContractAddress(e.target.value)}
                            placeholder="0x0000000000000000000000000000000000000000" />
                        <Id
                            value={tokenId}
                            onChange={e => setTokenId(e.target.value)}
                            placeholder="0" />
                    </Row>
                    <Row>
                        <Search onClick={networkTokenSearch}>Search</Search>
                    </Row>
                    <Row>
                        <Line color="#676767" size="1" />
                        <Line color="#676767" size="1" />
                    </Row>
                    <Column>
                        <Overflow>
                            <Text>Preview</Text>
                            <Preview onClick={() => {navigator.clipboard.writeText(previewLink)}} src={preview} />
                        </Overflow>
                        <div>
                            <Row>
                                <FullScreenName>
                                    <TextDrop>Name</TextDrop>
                                    <MiniConsole onClick={() => {navigator.clipboard.writeText(name)}}>{name}</MiniConsole>
                                </FullScreenName>
                                <FullScreenSymbol>
                                    <TextDrop>Symbol</TextDrop>
                                    <MiniConsole onClick={() => {navigator.clipboard.writeText(symbol)}}>{symbol}</MiniConsole>
                                </FullScreenSymbol>
                            </Row>
                            <MarginText>Metadata</MarginText>
                            <Metadata onClick={() => {navigator.clipboard.writeText(uri)}}>{uri}</Metadata>
                            <MarginText>Owner</MarginText>
                            <Console onClick={() => {navigator.clipboard.writeText(owner)}}>{owner}</Console>
                        </div>
                    </Column>
                </Orient>
            </Container>
        </Mobile>
    )
}
