import styled from "styled-components";
import Logo from '../../assets/UserLogoExmp.jpg'
import { TonConnectButton } from "@tonconnect/ui-react";

const HeaderBlock = styled.div`
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
`

const UserLogo = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50px;
`


export const Header = () => {
    return(
        <HeaderBlock>
            <UserLogo src={Logo}/>
            <TonConnectButton />
        </HeaderBlock>
    )
}