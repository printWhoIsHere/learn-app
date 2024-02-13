import { create, State, StateCreator } from 'zustand'
import { generateId } from 'utils/utils'

function isWordsStore(object: any): object is WordsStore {
	return 'words' in object
}

const localStorageUpdate =
	<T extends State>(config: StateCreator<T>): StateCreator<T> =>
	(set, get, api) =>
		config(
			(nextState, ...args) => {
				isWordsStore(nextState) &&
					window.localStorage.setItem('words', JSON.stringify(nextState.words))

				set(nextState, ...args)
			},
			get,
			api
		)

const getCurrentState = () => {
	try {
		const currentState = JSON.parse(
			window.localStorage.getItem('words') || '[]'
		) as Word[]
		return currentState
	} catch (err) {
		console.error('err >>> ', err)
		window.localStorage.setItem('words', '[]')
	}

	return []
}

export const useWordsStore = create(
	localStorageUpdate<WordsStore>((set, get) => ({
		words: getCurrentState(),
		createWord: (
			foreign: string,
			native: string,
			transcription?: string,
			tag?: string
		) => {
			const { words } = get()
			const newWord = {
				id: generateId(),
				foreign,
				native,
				transcription,
				tag,
			}

			set({
				words: [newWord, ...words],
			})
		},
		removeWord: (id: string) => {
			const { words } = get()
			set({
				words: words.filter((word) => word.id !== id),
			})
		},
	}))
)
