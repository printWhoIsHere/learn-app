import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Layout, Menu, Switch } from 'antd'
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	FireFilled,
	SunOutlined,
	MoonOutlined,
	HomeOutlined,
	BarsOutlined,
	BookOutlined,
	AreaChartOutlined,
	SettingOutlined,
} from '@ant-design/icons'

import {
	Wrapper,
	siderStyle,
	SidebarContent,
	LogoContainer,
	LogoIcon,
	WrapperThemeSwitcher,
	menuStyle,
	switchStyle,
	logoStyle,
	CollapsedButton,
} from './AppSider.styles'

const getItem: GetMenuItem = (label, link, key, icon, children) => {
	return {
		label: children ? label : <Link to={link ? `${link}` : '#'}>{label}</Link>,
		link,
		key,
		icon,
		children,
	}
}

const items: MenuItem[] = [
	getItem('Home', '/', 'home', <HomeOutlined />),
	getItem('Activity', null, 'activity', <BarsOutlined />, [
		getItem('Alphabet', '/alphabet', 'alphabet'),
		getItem('Words', '/words', 'words'),
	]),
	getItem('Dictionary', '/dictionary', 'dictionary', <BookOutlined />),
	getItem('Progress', '/progress', 'progress', <AreaChartOutlined />),
	getItem('Settings', '/settings', 'settings', <SettingOutlined />),
]

const AppSider: React.FC<AppSiderProps> = () => {
	const location = useLocation()
	const [collapsed, setCollapsed] = useState<boolean>(false)
	const [isMobile, setIsMobile] = useState<boolean>(false)
	const [selectedKey, setSelectedKey] = useState<string>('')

	useEffect(() => {
		const path =
			location.pathname.slice(1) === '' ? 'home' : location.pathname.slice(1)
		setSelectedKey(path)
	}, [location.pathname])

	return (
		<Wrapper>
			<Layout.Sider
				style={{
					...siderStyle,
					position: !isMobile ? 'relative' : 'absolute',
					zIndex: !isMobile ? 0 : 1,
				}}
				breakpoint='lg'
				collapsedWidth={isMobile ? 0 : 80}
				onBreakpoint={(broken) => {
					broken && setIsMobile(!isMobile)
				}}
				collapsed={collapsed}
				collapsible
				trigger={null}
			>
				<SidebarContent>
					<LogoContainer>
						<LogoIcon>
							<FireFilled style={logoStyle} />
						</LogoIcon>
					</LogoContainer>

					<Menu
						style={menuStyle}
						mode='inline'
						selectedKeys={[selectedKey]}
						items={items}
					/>
					<WrapperThemeSwitcher>
						{!collapsed && (
							<>
								<SunOutlined />
								<Switch
									style={switchStyle}
									defaultChecked
									// onChange={(checked: boolean) => {}}
								/>
								<MoonOutlined />
							</>
						)}
					</WrapperThemeSwitcher>
				</SidebarContent>
			</Layout.Sider>
			<CollapsedButton
				style={{
					left: !isMobile ? (collapsed ? 100 : 220) : collapsed ? 0 : 220,
				}}
				type='text'
				onClick={() => setCollapsed(!collapsed)}
				icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			/>
		</Wrapper>
	)
}

export default AppSider
