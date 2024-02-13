import { Wrapper, Image, Text } from './index.styles'

const HomePage: React.FC<HomePageProps> = () => {
	return (
		<Wrapper>
			<Image src='/image.jpg' alt='Image' />
			<Text>Your Text Here</Text>
		</Wrapper>
	)
}

export default HomePage
