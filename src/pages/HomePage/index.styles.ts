import styled from 'styled-components'
import { themeConfig } from 'styles/themes/theme'

const {
	token: { colorTextBase },
} = themeConfig

export const Wrapper = styled.div`
	padding: 2rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;

	@media screen and (max-width: 992px) {
		grid-template-columns: 1fr;
	}
`

export const Image = styled.img`
	border-radius: 20px;
	width: 100%;
	height: auto;
`

export const Text = styled.div`
	color: ${colorTextBase};
	font-size: 2rem;
	text-align: center;
`
