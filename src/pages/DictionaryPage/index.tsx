import { useState } from 'react'
import { Button, Flex, Input, Table, Tag } from 'antd'

import { useWordsStore } from 'data/store/useWordsStore'
import ModalComponent from 'components/dictionaryModal'

import { flexStyle, searchStyle, tableStyle } from './index.styles'

const DictionaryPage: React.FC<DictionaryPagePops> = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [selectedWordKeys, setSelectedWordKeys] = useState<React.Key[]>([])
	const [searchText, setSearchText] = useState<string>('')

	const { words, removeWord } = useWordsStore()

	const columns: any[] = [
		{
			title: 'Word',
			dataIndex: 'foreign',
			render: (text: string) => <a>{text}</a>,
		},
		{
			title: 'Translate',
			dataIndex: 'native',
		},
		{
			title: 'Transcription',
			dataIndex: 'transcription',
		},
		{
			title: 'Tag',
			dataIndex: 'tag',
			render: (tag: string) => <Tag>{tag}</Tag>,
			filters: Array.from(new Set(words.map((word) => word.tag))).map(
				(tag) => ({ text: tag, value: tag })
			),
			onFilter: (value: string, record: Word) => record.tag === value,
		},
	]

	const handleDeleteSelected = () => {
		selectedWordKeys.forEach((key) => {
			removeWord(key as Word['id'])
		})
		setSelectedWordKeys([])
	}

	const filteredWords = words.filter(
		(word) =>
			word.foreign.toLowerCase().includes(searchText.toLowerCase()) ||
			word.native.toLowerCase().includes(searchText.toLowerCase())
	)

	return (
		<>
			<Flex style={flexStyle} justify='end' align='center' gap='middle'>
				<Input.Search
					style={searchStyle}
					placeholder='Search...'
					onSearch={(value) => {
						{
							setSearchText(value)
						}
					}}
				/>

				<Button
					type='primary'
					onClick={() => {
						setIsModalOpen(true)
					}}
				>
					Add Word
				</Button>
			</Flex>

			<Table
				style={tableStyle}
				columns={columns}
				rowKey='id'
				dataSource={filteredWords}
				rowSelection={{
					type: 'checkbox',
					onChange: (selectedWordKeys) => {
						setSelectedWordKeys(selectedWordKeys)
					},
				}}
				scroll={{ y: 400 }}
				pagination={false}
				footer={() =>
					selectedWordKeys.length > 0 && (
						<Button danger onClick={handleDeleteSelected}>
							Delete Selected
						</Button>
					)
				}
			/>

			<ModalComponent
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
			/>
		</>
	)
}

export default DictionaryPage
