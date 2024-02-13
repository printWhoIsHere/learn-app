import styled from 'styled-components'
import { themeConfig } from 'styles/themes/theme'

const {
	token: { colorTextBase },
} = themeConfig

export const Letter = styled.p`
	color: ${colorTextBase};
	border-bottom: 1px solid ${colorTextBase};
	padding-bottom: 8px;
`
