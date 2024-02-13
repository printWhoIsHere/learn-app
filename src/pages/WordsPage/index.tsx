import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Tag } from 'antd'
import { useWordsStore } from 'data/store/useWordsStore'
import QuizCard from 'components/quizCard'

import { Wrapper, ButtonInfoWrapper } from './index.styles'

const WordsPage = () => {
	const { words } = useWordsStore()
	const [showTranscription, setShowTranscription] = useState<boolean>(false)
	const [currentIndex, setCurrentIndex] = useState<number>(0)

	console.log(words)
	return (
		<Wrapper>
			<ButtonInfoWrapper>
				<Button
					onClick={() => {
						setShowTranscription(!showTranscription)
					}}
				>
					{!showTranscription ? 'Show Transcription' : 'Hide Transcription'}
				</Button>

				{!showTranscription ? (
					''
				) : (
					<Tag
						style={{
							width: '100%',
							margin: 0,
							textAlign: 'center',
							fontSize: 15,
							padding: '5px 0',
						}}
					>
						{words[currentIndex].transcription}
					</Tag>
				)}
			</ButtonInfoWrapper>

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
