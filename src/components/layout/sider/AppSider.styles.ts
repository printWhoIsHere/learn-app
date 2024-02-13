import styled, { CSSProperties } from 'styled-components'
import { themeConfig } from 'styles/themes/theme'
import { Button } from 'antd'

const {
	token: { colorBgBase, colorTextBase, colorBgBaseSecond },
} = themeConfig

export const Wrapper = styled.div`
	position: relative;
	height: 100%;
`

export const siderStyle: CSSProperties = {
	height: '100vh',
	background: colorBgBase,
}

export const SidebarContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
`

export const LogoIcon = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	border-radius: 50%;
`

export const logoStyle: CSSProperties = {
	color: colorTextBase,
}

export const WrapperThemeSwitcher = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	padding: 0 1rem;
	background: ${colorBgBaseSecond};
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	font-size: 1.2rem;
`

export const menuStyle: CSSProperties = {
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	gap: 15,
	marginTop: '2rem',
	fontSize: '1rem',
}

export const switchStyle: CSSProperties = {
	width: '100%',
	margin: '1rem',
	background: colorBgBase,
}

export const CollapsedButton = styled(Button)`
	position: absolute;
	top: 20px;
	margin-left: 20px;
`
