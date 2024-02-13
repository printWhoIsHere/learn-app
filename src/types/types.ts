// data
type DataType = AlphabetItem[] | Word[]

interface Word {
	id: string
	foreign: string
	native: string
	transcription?: string
	tag?: string
}

interface WordsStore {
	words: Word[]
	createWord: (
		foreign: string,
		native: string,
		transcription?: string,
		tag?: string
	) => void
	removeWord: (id: string) => void
}

interface AlphabetItem {
	foreign: string
	native: string
}

interface KeyboardTypes {
	[key: string]: string[][]
}

// hooks
interface useKeyboard {
	text: string
	setText: React.Dispatch<React.SetStateAction<string>>
	handleKeyPress: (key: string) => void
}

// sider
interface MenuItem {
	label: React.ReactNode
	link: string | null
	key: React.Key
	icon?: React.ReactNode
	children?: MenuItem[]
}

type GetMenuItem = (
	label: React.ReactNode,
	link: string | null,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
) => MenuItem

// layout
type SetIsDarkTheme = React.Dispatch<React.SetStateAction<boolean>>

interface AppLayoutProps {
	setIsDarkTheme: SetIsDarkTheme
}

interface AppSiderProps {
	setIsDarkTheme: SetIsDarkTheme
}

// components
interface KeyboardProps {
	keyboardType: string[][]
	handleKeyPress: (key: string) => void
}
interface QuizCardProps {
	data: DataType
}

// pages
interface DictionaryPagePops {}

interface ModalComponent {
	isModalOpen: boolean
	setIsModalOpen: (isModalOpen: boolean) => void
}

interface HomePageProps {}

interface ActivityPageProps {
	data: DataType
}

interface NotFoundPage {
	text?: boolean
}

// utils
type GenerateId = () => string

type RandomContent = (data: DataType) => [string, string]
