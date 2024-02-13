import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import AppSider from './sider/AppSider'

import { contentStyle } from './AppLayout.styles'

const AppLayout: React.FC<AppLayoutProps> = () => {
	return (
		<Layout>
			<AppSider />
			<Layout>
				<Layout.Content style={contentStyle}>
					<Outlet />
				</Layout.Content>
			</Layout>
		</Layout>
	)
}

export default AppLayout
