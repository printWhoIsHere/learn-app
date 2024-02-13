import { Wrapper, KeyboardCard, Row, Key } from './index.styles'

const Keyboard: React.FC<KeyboardProps> = ({
	keyboardType,
	handleKeyPress,
}) => (
	<Wrapper>
		<KeyboardCard>
			{keyboardType.map((row, rowIndex) => (
				<Row key={rowIndex}>
					{row.map((key, keyIndex) => (
						<Key key={keyIndex} onClick={() => handleKeyPress(key)}>
							{key}
						</Key>
					))}
				</Row>
			))}
		</KeyboardCard>
	</Wrapper>
)

export default Keyboard
