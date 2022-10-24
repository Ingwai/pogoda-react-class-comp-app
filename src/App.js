import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Result from './components/Result';
import API_KEY from './apikey';

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_UNITS = '&units=metric';

class App extends Component {
	state = {
		value: '',
		date: '',
		city: '',
		sunrise: '',
		sunset: '',
		temp: '',
		pressure: '',
		wind: '',
		error: false,
	};

	inputChangeHandler = e => {
		this.setState({ value: e.target.value });
	};

	componentDidUpdate(prevProps, prevState) {
		setTimeout(() => {
			//żeby błędy się nie pojawiały po każdej literce to ustawiam opóźnienie 3s na wpisanie miasta
			if (prevState.value !== this.state.value) {
				// submitHandler = e => {
				// 	e.preventDefault();
				const API = `${API_LINK}${this.state.value}${API_KEY}${API_UNITS}`;
				fetch(API)
					.then(response => {
						if (response.ok) {
							return response;
						}
						throw Error('Nie udało się');
					})
					.then(response => response.json())
					.then(data => {
						const time = new Date().toLocaleString();
						this.setState(prevState => ({
							error: false,
							date: time,
							sunrise: data.sys.sunrise,
							sunset: data.sys.sunset,
							temp: data.main.temp,
							pressure: data.main.pressure,
							wind: data.wind.speed,
							city: prevState.value,
						}));
					})
					.catch(error => {
						this.setState(prevState => {
							return { error: true, city: prevState.value };
						});
					});
			}
		}, 2000);
	}

	render() {
		return (
			<div className='App'>
				<Form
					value={this.state.value}
					onChange={this.inputChangeHandler}
					// onSubmit={this.submitHandler}
				/>
				<Result weather={this.state} />
			</div>
		);
	}
}

export default App;
