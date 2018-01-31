import React from 'react';

//passing in forecast which IS weatherData from app.js as argument to CurrentForecast here

const CurrentForecast = ({forecast: {temperature}}) => <div>

		<div style={{ border: 'solid 1px blue', padding: '20px', margin: '20px' }}>
		<h2> current temperature: { Math.round(temperature) }&#176;F </h2>
		</div>

	</div>

export default CurrentForecast