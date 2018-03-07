import React from 'react'
import ReactDOM from 'react-dom'

import Card from './Card/Card'
import FlipCard from './Card/FlipCard'

const App = () => {
	return (
		<div>
			<div>
				<Card></Card>
			</div>
			<div>
				<FlipCard>xxxx</FlipCard>
			</div>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
