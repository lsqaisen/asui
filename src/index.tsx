import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'

import Card from './Card/Card'
import FlipCard from './Card/FlipCard'
import PileCard from './Card/PileCard'

const App = () => {
	return (
		<div>
			<div className='row'>
				<Card></Card>
			</div>
			<div className='row'>
				<div className='col'>
					<FlipCard
						axis='center'
						frontChildren={<p>font1</p>}
						backChildren={<p>back1</p>}
					/>
				</div>
				<div className='col'>
					<FlipCard
						axis='right'
						frontChildren={<p>font2</p>}
						backChildren={<p>back2</p>}
					/>
				</div>
				<div className='col'>
					<FlipCard
						axis='left'
						frontChildren={<p>font3</p>}
						backChildren={<p>back3</p>}
					/>
				</div>
			</div>

			<div className='row'>
				<PileCard list={'asdasdxxxxxxxxxxxxxxxxx'.split('')} />
			</div>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
