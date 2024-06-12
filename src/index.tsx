import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const manifestUrl =
	"https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";

root.render(
	<TonConnectUIProvider manifestUrl={manifestUrl}>
		<App />
	</TonConnectUIProvider>
);
