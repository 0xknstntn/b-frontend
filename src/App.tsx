import styled from 'styled-components';
import { Index } from './components';
import { useEffect } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';
import { useMinersInfo, useProtocolInfo } from './store/useProtocol';

const Main = styled.div`
	max-width: 100%;
	height: 100vh;
`

const api_url = 'https://b-api-theta.vercel.app/api/api/v1'

function App() {
	const userFriendlyAddress = useTonAddress();
	console.log("My address: ", userFriendlyAddress)
	const [ miner_info, setMinerInfo ] = useMinersInfo();
	const [ protocol_info, setProtocolInfo ] = useProtocolInfo();

	useEffect(() => {
		async function main() {
			let result = await fetch(api_url + `/miners?address=${userFriendlyAddress}`)
			let result_json = await result.json()
			if (result_json.ok == "true") {
				setMinerInfo({
					miner_address: userFriendlyAddress,
					miners_amount: result_json.result.miners_amount,
					battery_amount: result_json.result.battery_amount,
					bytecoins_amount: result_json.result.bytecoins_amount,
					balance: result_json.result.balance,
					nfts: result_json.result.items
				})
			}

			let result_miners_nft_count = await fetch(api_url + `/protocol/miners_nft_count`)
			let result_miners_nft_count_json = await result_miners_nft_count.json()

			let result_epoch = await fetch(api_url + `/protocol/epoch`)
			let result_epoch_json = await result_epoch.json()
			setProtocolInfo({
				epoch: Number(result_epoch_json.result.epoch),
				miners_nft_count: Number(result_miners_nft_count_json.result.miners_nft_count),
			})
		}
		main()
	}, [userFriendlyAddress])
	console.log(miner_info)
	console.log(protocol_info)

	return (
		<Main>
			<Index />
		</Main>
	);
}

export default App;
