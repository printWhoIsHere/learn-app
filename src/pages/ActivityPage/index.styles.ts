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
