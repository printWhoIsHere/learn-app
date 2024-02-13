import { Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'

import { themeConfig } from 'styles/themes/theme'

import HomePage from 'pages/HomePage/index.tsx'
import WordsPage from 'pages/WordsPage'
import DictionaryPage from 'pages/DictionaryPage'
import NotFoundPage from 'pages/NotFoundPage'

import AppLayout from 'components/layout/AppLayout'
import AlphabetPage from 'pages/AlphabetPage'

const App: React.FC = () => {
	return (
		<ConfigProvider theme={themeConfig}>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route path='/' element={<HomePage />} />
					<Route path='/alphabet' element={<AlphabetPage />} />
					<Route path='/words' element={<WordsPage />} />
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
