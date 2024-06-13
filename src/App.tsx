import styled from 'styled-components';
import { Index } from './components';
import { useEffect } from 'react';

const Main = styled.div`
	max-width: 100%;
	height: 100vh;
`

function App() {

	return (
		<Main>
			<Index />
		</Main>
	);
}

export default App;
