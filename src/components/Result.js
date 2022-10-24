import React from 'react';
import '../App.css';
const Result = props => {
	const { error, date, city, temp, sunrise, sunset, pressure, wind } = props.weather;
	const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
	const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
	return (
		<div className='result'>
			{error ? (
				<p className='err'>Coś poszło nie tak. Spróbuj ponownie</p>
			) : (
				<div>
					<p>
						Pogoda w mieście: <span className='city'>{city}</span>
					</p>
					<p>
						Data i godzina: <span>{date}</span>
					</p>
					<p>
						Temperatura: <span>{temp}</span>
					</p>
					<p>
						Ciśnienie: <span>{pressure}</span>
					</p>
					<p>
						Wiatr: <span>{wind}</span>
					</p>
					<p>
						Wschód słońca: <span>{sunriseTime}</span>
					</p>
					<p>
						Zachód słońca: <span>{sunsetTime}</span>
					</p>
				</div>
			)}
		</div>
	);
};

export default Result;
