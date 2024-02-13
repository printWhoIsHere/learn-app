export const generateId: GenerateId = () =>
	Math.random().toString(16).slice(2) + new Date().getTime().toString(36)

export const randomContent: RandomContent = (data) => {
	const randomIndex = Math.floor(Math.random() * data.length)
	const randomElement = data[randomIndex]

	const randomProperty = Math.random() < 0.5 ? 'foreign' : 'native'
	const content = randomElement[randomProperty]

	const oppositeProperty = randomProperty === 'foreign' ? 'native' : 'foreign'
	const oppositeContent = randomElement[oppositeProperty]

	return [content, oppositeContent]
}
