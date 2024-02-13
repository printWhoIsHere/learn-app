import { Modal, Row, Col } from 'antd'

import { Letter } from './index.styles'

const AlphabetModal: React.FC<AlphabetModalProps> = ({
	isModalOpen,
	setIsModalOpen,
	alphabet,
}) => {
	return (
		<Modal
			title='Alphabet List'
			open={isModalOpen}
			onOk={() => {
				setIsModalOpen(false)
			}}
			onCancel={() => {
				setIsModalOpen(false)
			}}
			footer={null}
		>
			<Row>
				{alphabet.map((item, key) => (
					<Col span={8} key={key}>
						<Letter>
							{item.foreign} - {item.native}
						</Letter>
					</Col>
				))}
			</Row>
		</Modal>
	)
}

export default AlphabetModal
