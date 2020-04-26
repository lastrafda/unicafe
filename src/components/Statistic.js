import React from 'react'


const Statistic = ({text, value, percentage}) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value} {percentage ? '%':''}</td>
		</tr>
	)
}

export default Statistic