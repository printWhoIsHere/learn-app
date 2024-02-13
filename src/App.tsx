import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'

import { themeConfig } from 'styles/themes/theme'

import { alphabet } from 'data/alphabetData'
import { useWordsStore } from 'data/store/useWordsStore'

import HomePage from 'pages/HomePage/index.tsx'
import ActivityPage from 'pages/ActivityPage'
import DictionaryPage from 'pages/DictionaryPage'
import NotFoundPage from 'pages/NotFoundPage'

import AppLayout from 'components/layout/AppLayout'

const App: React.FC = () => {
	const { words } = useWordsStore()
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true)
	const theme = themeConfig

	return (
		<ConfigProvider theme={theme}>
			<Routes>
				<Route path='/' element={<AppLayout setIsDarkTheme={setIsDarkTheme} />}>
					<Route path='/' element={<HomePage />} />
					<Route path='/alphabet' element={<ActivityPage data={alphabet} />} />
					<Route path='/words' element={<ActivityPage data={words} />} />
					<Route path='/dictionary' element={<DictionaryPage />} />
					<Route path='/progress' element={<NotFoundPage text={true} />} />
					<Route path='/settings' element={<NotFoundPage text={true} />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</ConfigProvider>
	)
}

export default App
