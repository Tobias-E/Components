import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

// URL's
// const url = 'http://localhost:4000/newsletters';
const postUrl = 'http://localhost:4000/newsletters';

// Functions
async function postData(data) {
	const result = await fetch(postUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: 'email=' + data,
	});
	return result;
}

const Form = () => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) =>
		postData(data.email) && console.log('Subscribed email:', data.email);
	return (
		<FormS onSubmit={handleSubmit(onSubmit)} className='newsletter__form'>
			<input
				name='email'
				className='newsletter__input'
				placeholder='Enter Your Email'
				ref={register({
					required: 'Required',
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						message: 'invalid email address',
					},
				})}
			/>
			{errors.email && <p>{errors.email.message}</p>}
			<input
				type='submit'
				value='SUBSCRIBE'
				className='newsletter__submit'
			/>
		</FormS>
	);
};

const FormS = styled.form`
	height: 75px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export default Form;
