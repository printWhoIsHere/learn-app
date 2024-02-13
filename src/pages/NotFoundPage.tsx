import { Link } from 'react-router-dom'

import { themeConfig } from 'styles/themes/theme'

const {
	token: { colorTextBase },
} = themeConfig

const NotFoundPage: React.FC<NotFoundPage> = ({ text }) => (
	<div
		style={{
			width: '100%',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			gap: 5,
			color: colorTextBase,
			fontSize: 25,
		}}
	>
		{text && 'Coming Soon'}
		<p>
			This page does not fount exist. Go <Link to='/'> Home </Link>
		</p>
	</div>
)

export default NotFoundPage
