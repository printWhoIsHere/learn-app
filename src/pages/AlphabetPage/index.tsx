import { useState } from 'react'

import { alphabet } from 'data/alphabetData'
import QuizCard from 'components/quizCard'

import { Wrapper, ButtonInfo } from './index.styles'
import AlphabetModal from 'components/activityModal'

const AlphabetPage = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	return (
		<Wrapper>
			<ButtonInfo
				onClick={() => {
					setIsModalOpen(true)
				}}
			>
				?
			</ButtonInfo>
			<QuizCard data={alphabet} />
			<AlphabetModal
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				alphabet={alphabet}
			/>
		</Wrapper>
	)
}

export default AlphabetPage
