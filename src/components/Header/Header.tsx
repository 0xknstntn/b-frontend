import styled from "styled-components";
import Logo from '../../assets/UserLogoExmp.jpg'
import { TonConnectButton } from "@tonconnect/ui-react";
import { useEffect, useState } from "react";

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
    //const logo = window.Telegram.WebApp.initDataUnsafe.user?.id

    const [logo, setLogo] = useState("")

    useEffect(() => {
        async function main() {
            let response = await fetch('https://api.telegram.org/bot6607875459:AAF8sNqCYCcoNjMzj6jVBxY_D7Wupjg23dQ/getUserProfilePhotos', {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({user_id: window.Telegram.WebApp.initDataUnsafe.user?.id})
            })
            const content = await response.json();

            let file_id = content.result.photos[0][2].file_id

            let response2 = await fetch(`https://api.telegram.org/bot6607875459:AAF8sNqCYCcoNjMzj6jVBxY_D7Wupjg23dQ/getFile?file_id=${file_id}`)
            const content2 = await response2.json();

            let file_path = content2.result.file_path

            setLogo(`https://api.telegram.org/file/bot6607875459:AAF8sNqCYCcoNjMzj6jVBxY_D7Wupjg23dQ/${file_path}`)
        }
        main()
    }, [])
    return(
        <HeaderBlock>
            <UserLogo src={logo}/>
            <TonConnectButton />
        </HeaderBlock>
    )
}