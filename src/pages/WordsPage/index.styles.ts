import styled from 'styled-components'
import { Button } from 'antd'
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

export const ButtonInfo = styled(Button)`
	position: absolute;
	top: 20px;
	right: 20px;
`
