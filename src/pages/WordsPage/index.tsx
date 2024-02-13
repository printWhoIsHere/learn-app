import { Link } from 'react-router-dom'
import { useWordsStore } from 'data/store/useWordsStore'
import QuizCard from 'components/quizCard'

import { Wrapper, ButtonInfo } from './index.styles'
import { useState } from 'react'
import { Tag } from 'antd'

const WordsPage = () => {
	const { words } = useWordsStore()
	const [showTranscription, setShowTranscription] = useState<boolean>(false)
	const [currentIndex, setCurrentIndex] = useState<number>(0)

	console.log(words)
	return (
		<Wrapper>
			<>
				<ButtonInfo
					type='primary'
					onClick={() => {
						setShowTranscription(!showTranscription)
					}}
				>
					{!showTranscription ? 'Show Transcription' : 'Hide Transcription'}
				</ButtonInfo>
				<Tag>
					{!showTranscription ? '' : `${words[currentIndex].transcription}`}
				</Tag>
			</>

			{words.length === 0 ? (
				<p>
					You have no words. Please,{' '}
					<Link to='/dictionary'>go to dictionary</Link>
				</p>
			) : (
				<QuizCard
					data={words}
					currentIndex={currentIndex}
					setCurrentIndex={setCurrentIndex}
				/>
			)}
		</Wrapper>
	)
}

export default WordsPage
