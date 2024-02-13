import styled from 'styled-components'
import { Button, Space, Typography } from 'antd'
import { themeConfig } from 'styles/themes/theme'

const {
	token: { colorTextBase },
} = themeConfig

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

export const Title = styled(Typography.Title)`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${colorTextBase};
	padding: 0 1rem;
	&.default {
		color: colorTextBase;
	}
	&.success {
		color: #3f8600;
	}
	&.error {
		color: #cf1322;
	}
`

export const Compact = styled(Space.Compact)`
	width: 100%;
	min-width: 350px;
`

export const InputButton = styled(Button)`
	&.default {
		background: colorPrimary;
	}
	&.success {
		background: #3f8600;
	}
	&.error {
		background: #cf1322;
	}
`
