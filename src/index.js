import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Statistics from './components/Statistics'

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
			<Navbar bg='dark' variant='dark' sticky='top'>
				<Navbar.Brand href="#home">José Lastra</Navbar.Brand>
			</Navbar>
			<Container className='h-100'>
				<Row className='text-center h-100 d-flex align-items-center'>
					<Col>
						<h1>Give Feedback</h1>
						<Button onClick={handleClick('Bad')} variant='dark' className='mx-2'>Bad</Button>
						<Button onClick={handleClick('Neutral')} variant='secondary' className='mx-2'>Neutral</Button>
						<Button onClick={handleClick('Good')} variant='primary' className='mx-2'>Good</Button>
						<Statistics bad={bad} neutral={neutral} good={good}/>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

ReactDOM.render(<App />,
	document.getElementById('root'))