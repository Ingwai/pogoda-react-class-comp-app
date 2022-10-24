import React from 'react';

const Form = props => {
	return (
		<form className='form' onSubmit={props.onSubmit}>
			<input type='text' value={props.value} placeholder='Wpisz jakieś miasto' onChange={props.onChange} />
			{/* <button className='btn'>Wyszukaj</button> */}
		</form>
	);
};

export default Form;
