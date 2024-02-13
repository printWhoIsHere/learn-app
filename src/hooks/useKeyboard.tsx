import { useState } from 'react'

export const useKeyboard = () => {
	const [text, setText] = useState<string>('')

	const handleKeyPress = (key: string) => {
		setText((prevText) => prevText + key)
	}

	return { text, setText, handleKeyPress }
}
