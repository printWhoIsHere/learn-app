import styled from 'styled-components'
import { themeConfig } from 'styles/themes/theme'

const {
	token: { colorTextBase },
} = themeConfig

export const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${colorTextBase};
`

export const ButtonInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	position: absolute;
	top: 20px;
	right: 20px;
`
