import styled from "styled-components"
import React from "react"

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Icon = styled.img`
    width: 40px;
`

const Logo = styled.h1`
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    padding: 15px;
    color: #fff;
`

export default function Header() {
    return (
        <Div>
            <Icon src="/icon.svg" />
            <Logo>
                MetaGet
            </Logo>
        </Div>
    )
}
