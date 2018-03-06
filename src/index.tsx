import React from 'react'
import ReactDOM from 'react-dom'

import Card from './Card/Card'

const App = () => {
	return (
		<div>
			<p>Hello World!</p>
			<Card></Card>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
