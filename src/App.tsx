import styled from 'styled-components';
import { Index } from './components';
import { useEffect, useState } from 'react';
import { useTonAddress, useTonConnectUI, useTonWallet, TonConnectUiOptions, THEME, useTonConnectModal } from '@tonconnect/ui-react';
import { useMinersInfo, useProtocolInfo } from './store/useProtocol';
import { LoadingPage } from './components/Page/Loading';
import { BytecoinApiURL } from './utils/const';

const Main = styled.div`
	max-width: 100%;
	height: var(--tg-viewport-stable-height);
`

function App() {
	const userFriendlyAddress = useTonAddress();
	const wallet = useTonWallet();
	const [miner_info, setMinerInfo] = useMinersInfo();
	const [protocol_info, setProtocolInfo] = useProtocolInfo();
	const [tonConnectUI, setOptions] = useTonConnectUI();
	const [isLoading, setIsLoading] = useState(true);

	async function main() {
		if (userFriendlyAddress != "") {
			localStorage.setItem("bytecoin-ton-address", userFriendlyAddress)
		}

		console.log('ITEM: ', localStorage.getItem("bytecoin-ton-address"))

		let users_result = await fetch(BytecoinApiURL + `/users/sync?address=${localStorage.getItem("bytecoin-ton-address")}`)
		let result_json = await users_result.json()

		let result = result_json.result

		if (result_json.ok == "true") {
			setMinerInfo({
				miners_amount: result.miner_info.miners_amount == undefined ? 0 : result.miner_info.miners_amount,
				battery_amount: result.miner_info.battery_amount == undefined ? 0 : result.miner_info.battery_amount,
				bytecoins_amount: result.miner_info.bytecoins_amount == undefined ? 0 : result.miner_info.bytecoins_amount,
				balance: result_json.result.balance == undefined ? 0 : result_json.result.balance,
				nfts: result_json.result.nft_list == undefined ? [] : result_json.result.nft_list
			})
			console.log('Read MinerInfo')
		} else if (result_json.ok == "false") {
			setMinerInfo({
				miners_amount: 0,
				battery_amount: 0,
				bytecoins_amount: 0,
				balance: 0,
				nfts: []
			})
		}

		let protocol_info_result = await fetch(BytecoinApiURL + `/protocol/info`)
		let protocol_info_result_json = await protocol_info_result.json()
		let result_parse = protocol_info_result_json.result

		if (protocol_info_result_json.ok == "true") {
			setProtocolInfo({
				epoch: result_parse.epoch_number,
				miners_nft_count: result_parse.miners_nft_count
			})
			console.log('Read ProtocolInfo')
		}
	}

	setOptions({
		actionsConfiguration: {
			notifications: [],

		},
		uiPreferences: {
			theme: THEME.LIGHT
		}

	})

	useEffect(() => {
		if (tonConnectUI.connected == false) {
			setMinerInfo({
				miners_amount: 0,
				battery_amount: 0,
				bytecoins_amount: 0,
				balance: 0,
				nfts: []
			})
			console.log("DEBUG: CLEAR: LOCALSTORAGE")
			localStorage.removeItem("bytecoin-ton-address")
		}
		main()
	}, [wallet])

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);

	useEffect(() => {
		var t = setInterval(main, 15000);
	}, [])

	return (
		<Main>
			{isLoading ? (
				<LoadingPage />
			) : (
				<Index />
      )}
			
		</Main>
	);
}

export default App;
