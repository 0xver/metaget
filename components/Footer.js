import styled from "styled-components"
import React, { useState } from "react"
import { ethers } from "ethers"

const Footer = styled.div`
    height: 80px;
    background: #8C8C8C;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 30px;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 795px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 795px) {
        width: 100%;
        bottom: 0px;
        border-radius: 0px;
    }

    @media (max-width: 772px) {
        height: 90px;
    }

    @media (max-width: 639px) {
        height: 100px;
    }

    @media (max-width: 546px) {
        height: 115px;
    }

    @media (max-width: 516px) {
        height: 130px;
    }

    @media (max-width: 495px) {
        height: 160px;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    @media (max-width: 321px) {
        height: 170px;
        padding-top: 10px;
    }

    @media (max-width: 297px) {
        height: 185px;
        padding-top: 0px;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Mobile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: center;
    height: 130px;
    width: 100%;

    @media (max-width: 495px) {
        flex-direction: column;
    }
`

const Text = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 200;
    font-size: 13px;
    margin-left: 20px;
    margin-right: 20%;

    @media (max-width: 495px) {
        margin-right: 20px;
        margin-top: 0px;
    }
`

const Button = styled.button`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 13px;
    color: #fff;
    width: 150px;
    background-color: #000;
    border-radius: 100px;
    border-width: 2px;
    border-color: #000;
    padding: 9px 15px;
    margin-right: 20px;

    &:hover {
        color: #000;
        background-color: transparent;
        cursor: pointer;
    }

    @media (max-width: 495px) {
        width: 200px;
        margin-right: 0px;
    }

    @media (max-width: 321px) {
        margin-bottom: 10px;
    }
`

export default function Connect() {
    const [ethereum, setProvider] = useState({})

    React.useEffect(() => {
        setProvider(window.ethereum)
    }, []);

    const handleClick = () => {
        window.ethereum.request({ method: "eth_requestAccounts" });
    }

    async function requestAccount() {
        await window.ethereum.request({ method: "eth_requestAccounts"})
    }

    async function donate() {
        try {
            if (typeof window.ethereum !== "undefined") {
                await requestAccount()
                const provider = new ethers.providers.Web3Provider(window.ethereum)
                const signer = provider.getSigner()
                const tx = signer.sendTransaction({
                    to: "0xe9Ff84B0795553F6D82e15Cb8f79956562CDAB96",
                    value: ethers.utils.parseEther("0.01")
                })
            } else {
                setStatusMessage("MetaMask is not connected")
            }
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <Footer>
            <Mobile>
            <div>
                <Text>
                    MetaGet is a NFT metadata lookup providing the name, symbol, tokenURI, and owner (ERC721 only). Enter the NFT contract address and token ID to fetch its metadata from an EVM compatible blockchain. See the&nbsp;
                    <a 
                        style={{
                            textDecoration: "underline",
                            color: "inherit"
                        }}
                        href="https://github.com/0xver/metaget"
                        rel="noopener noreferrer"
                        target="_blank"
                    >source code</a> on GitHub.
                </Text>
            </div>
            <Row>
                {ethereum &&
                    <Button onClick={donate}>
                        DONATE 0.01 ETH
                    </Button>
                }
                {!ethereum &&
                    <a 
                        style={{
                            textDecoration: "none",
                            color: "inherit"
                        }}
                        href="https://metamask.io/download.html"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Button>
                            DISABLED
                        </Button>
                    </a>
                }
            </Row>
            </Mobile>
        </Footer>
    )
}
