import React, { useState } from 'react';
import ReactDOM from 'react-dom'

const Button = props => (
	<button onClick={props.handleClick}>{props.text}</button>
)

const Statistic = ({text, value, percentage}) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value} {percentage ? '%':''}</td>
		</tr>
	)
}

const Statistics = ({bad,neutral,good}) => {
	const total = bad + neutral + good
	const avg = (good + (bad * -1)) / total
	const positivity = good / total * 100

	if (total === 0) {
		return <div><p>No Feedback given</p></div>
	} 
	return (
		<div>
			<h2>statistics</h2>
			<table>
				<tbody>
					<Statistic text='Bad' value={bad} />
					<Statistic text='Neutral' value={neutral} />
					<Statistic text='Good' value={good} />
					<Statistic text='Total' value={total} />
					<Statistic text='Average' value={avg.toFixed(2)} />
					<Statistic text='Positivity' value={positivity.toFixed(2)}  percentage={true}/>
				</tbody>
			</table>
		</div>
	)
}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const stateHooks = {
		setGood() {
			setGood(good + 1)
		},
		setNeutral() {
			setNeutral(neutral + 1)
		},
		setBad() {
			setBad(bad + 1)
		}
	};
	const handleClick = type => {
		return () => {
			stateHooks['set' + type]()
		}
	}

	return (
		<div>
			<h1>Give Feedback</h1>
			<Button handleClick={handleClick('Bad')} text='Bad' />
			<Button handleClick={handleClick('Neutral')} text='Neutral' />
			<Button handleClick={handleClick('Good')} text='Good' />
			<Statistics bad={bad} neutral={neutral} good={good}/>
		</div>
	)
}

ReactDOM.render(<App />,
	document.getElementById('root'))