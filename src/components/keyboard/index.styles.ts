import styled from 'styled-components'
import { Button } from 'antd'

export const Wrapper = styled.div``

export const KeyboardCard = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 5px;
`

export const Row = styled.div`
	display: flex;
	justify-content: center;
	gap: 5px;
	@media (max-width: 992px) {
		gap: 0;
	}
`

export const Key = styled(Button)`
	width: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 992px) {
		width: 1rem;
	}
`
