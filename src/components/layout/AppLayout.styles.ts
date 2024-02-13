import { CSSProperties } from 'styled-components'
import { themeConfig } from 'styles/themes/theme'

const {
	token: { colorBgBase },
} = themeConfig

export const contentStyle: CSSProperties = {
	height: '100vh',
	position: 'relative',
	margin: '5rem 1rem 1rem 1rem',
	borderRadius: 5,
	background: colorBgBase,
}
