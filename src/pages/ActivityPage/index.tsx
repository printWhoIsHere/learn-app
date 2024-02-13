import { Link } from 'react-router-dom'
import QuizCard from 'components/quizCard'

import { Wrapper } from './index.styles'

const ActivityPage: React.FC<ActivityPageProps> = ({ data }) => {
	console.log(data)
	return (
		<Wrapper>
			{data.length === 0 ? (
				<p>
					You have no words. Please,{' '}
					<Link to='/dictionary'>go to dictionary</Link>
				</p>
			) : (
				<QuizCard data={data} />
			)}
		</Wrapper>
	)
}

export default ActivityPage
