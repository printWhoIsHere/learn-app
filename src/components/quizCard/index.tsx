import { useEffect, useState } from 'react'
import { Input, Select } from 'antd'
import clsx from 'clsx'

import { keyboardTypes } from 'data/keyboardTypes'
import { useKeyboard } from 'hooks/useKeyboard'
import { randomContent } from 'utils/utils'

import Keyboard from 'components/keyboard'

import { Wrapper, Title, Compact, InputButton } from './index.styles'

const QuizCard: React.FC<QuizCardProps> = ({ data, setCurrentIndex }) => {
	const { text, setText, handleKeyPress } = useKeyboard()
	const [keyboardType, setKeyboardType] = useState<string>('he')
	const [content, setContent] = useState<string>('')
	const [oppositeContent, setOppositeContent] = useState<string>('')
	const [answer, setAnswer] = useState<undefined | boolean>(undefined)

	useEffect(() => {
		const [content, oppositeContent, index] = randomContent(data)
		setContent(content)
		setOppositeContent(oppositeContent)
		if (setCurrentIndex) {
			setCurrentIndex(index)
		}
	}, [data])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value)
	}

	const handleCheck = () => {
		if (!text || !text.trim()) {
			return
		}
		const isMatch = oppositeContent === text
		setAnswer(isMatch)
	}

	const handleNext = () => {
		const [content, oppositeContent, index] = randomContent(data)
		setContent(content)
		setOppositeContent(oppositeContent)
		if (setCurrentIndex) {
			setCurrentIndex(index)
		}
		setAnswer(undefined)
		setText('')
	}

	const keyboardOptions = Object.keys(keyboardTypes).map((type) => ({
		value: type.toLowerCase(),
	}))
	const selectedKeyboardType = keyboardTypes[keyboardType] || []

	const colorStyle = clsx({
		default: answer === undefined,
		success: answer === true,
		error: answer === false,
	})

	return (
		<Wrapper>
			<Title className={colorStyle}>{content}</Title>
			<Compact>
				<Select
					options={keyboardOptions}
					value={keyboardType}
					onChange={(value) => setKeyboardType(value)}
				/>

				<Input
					placeholder='Enter answer'
					value={text}
					onPressEnter={answer !== undefined ? handleNext : handleCheck}
					onChange={handleChange}
				/>
				<InputButton
					type='default'
					className={colorStyle}
					onClick={answer !== undefined ? handleNext : handleCheck}
				>
					{answer !== undefined ? 'Next' : 'Check'}
				</InputButton>
			</Compact>
			<Keyboard
				keyboardType={selectedKeyboardType}
				handleKeyPress={handleKeyPress}
			/>
		</Wrapper>
	)
}

export default QuizCard
