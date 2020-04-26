import React from 'react'
import Table from 'react-bootstrap/Table'
import Statistic from './Statistic'


const Statistics = ({bad,neutral,good}) => {
	const total = bad + neutral + good
	const avg = (good + (bad * -1)) / total
	const positivity = good / total * 100

	if (total === 0) {
		return <div className='mt-2'><h2>No Feedback given</h2></div>
	} 
	return (
		<div className='mt-2'>
			<h2>Statistics</h2>
			<Table striped bordered hover className='mx-auto'>
				<tbody>
					<Statistic text='Bad' value={bad} />
					<Statistic text='Neutral' value={neutral} />
					<Statistic text='Good' value={good} />
					<Statistic text='Total' value={total} />
					<Statistic text='Average' value={avg.toFixed(2)} />
					<Statistic text='Positivity' value={positivity.toFixed(2)}  percentage={true}/>
				</tbody>
			</Table>
		</div>
	)
}

export default Statistics