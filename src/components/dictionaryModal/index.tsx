import { Button, Form, Input, Modal } from 'antd'
import { useWordsStore } from '../../data/store/useWordsStore'
import { buttonFormStyle, formStyle } from './index.styles'

const ModalComponent: React.FC<ModalComponent> = ({
	isModalOpen,
	setIsModalOpen,
}) => {
	const [form] = Form.useForm()
	const { createWord } = useWordsStore()

	return (
		<Modal
			title='Add Word'
			open={isModalOpen}
			onOk={() => {
				setIsModalOpen(false)
			}}
			onCancel={() => {
				setIsModalOpen(false)
			}}
			footer={null}
		>
			<Form
				style={formStyle}
				form={form}
				onFinish={(values) => {
					createWord(
						values.word.toLowerCase(),
						values.translation.toLowerCase(),
						values.transcription,
						values.tag
					)
					form.resetFields()
					setIsModalOpen(false)
				}}
			>
				<Form.Item
					name='word'
					rules={[{ required: true, message: 'Please enter the word' }]}
				>
					<Input placeholder='Enter new word' />
				</Form.Item>
				<Form.Item
					name='translation'
					rules={[{ required: true, message: 'Please enter the translation' }]}
				>
					<Input placeholder='Enter translation' />
				</Form.Item>
				<Form.Item name='transcription'>
					<Input placeholder='Enter transcription' />
				</Form.Item>
				<Form.Item name='tag'>
					<Input placeholder='Enter tag' />
				</Form.Item>
				<Button type='primary' htmlType='submit' style={buttonFormStyle}>
					Add
				</Button>
			</Form>
		</Modal>
	)
}

export default ModalComponent
