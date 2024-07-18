import styled from 'styled-components';
import { Index } from './components';
import { useEffect } from 'react';
import { useTonAddress, useTonConnectUI, useTonWallet, TonConnectUiOptions, THEME } from '@tonconnect/ui-react';
import { defaultStateMiner, useMinersInfo, useProtocolInfo } from './store/useProtocol';

const Main = styled.div`
	max-width: 100%;
	height: var(--tg-viewport-stable-height);
`

const api_url = 'https://b-api-theta.vercel.app/api/api/v1'

function App() {
	const userFriendlyAddress = useTonAddress();
	const wallet = useTonWallet();
	const [ miner_info, setMinerInfo ] = useMinersInfo();
	const [ protocol_info, setProtocolInfo ] = useProtocolInfo();
	const [ tonConnectUI, setOptions] = useTonConnectUI();
	setOptions({
		actionsConfiguration: {
			notifications: [],
			
		},
		uiPreferences: {
			theme: THEME.LIGHT
		}

	})

	useEffect(() => {
		async function main() {
			let result = await fetch(api_url + `/miners?address=${userFriendlyAddress}`)
			let result_json = await result.json()

			let result_nft = await fetch(api_url + `/nft?address=${userFriendlyAddress}`)
			let result_nft_json = await result_nft.json()

			if (result_json.ok == "true") {
				setMinerInfo({
					miner_address: userFriendlyAddress,
					miners_amount: result_json.result.miners_amount,
					battery_amount: result_json.result.battery_amount,
					bytecoins_amount: result_json.result.bytecoins_amount,
					balance: result_json.result.balance,
					nfts: result_nft_json.result.items
				})
			} else if (result_json.ok == "false" && result_nft_json.ok == "true") {
				setMinerInfo({
					miner_address: userFriendlyAddress,
					miners_amount: 0,
					battery_amount: 0,
					bytecoins_amount: 0,
					balance: 0,
					nfts: result_nft_json.result.items
				})
			} else if (result_json.ok == "false" && result_nft_json.ok == "false") {
				setMinerInfo(defaultStateMiner)
			}

			let result_miners_nft_count = await fetch(api_url + `/protocol/miners_nft_count`)
			let result_miners_nft_count_json = await result_miners_nft_count.json()

			let result_epoch = await fetch(api_url + `/protocol/epoch`)
			let result_epoch_json = await result_epoch.json()
			if (result_epoch_json.ok == "true" && result_miners_nft_count_json.ok == "true") {
				setProtocolInfo({
					epoch: Number(result_epoch_json.result.epoch),
					miners_nft_count: Number(result_miners_nft_count_json.result.miners_nft_count),
				})
			}
		}
		main()
	}, [wallet])

	return (
		<Main>
			<Index />
		</Main>
	);
}

export default App;
