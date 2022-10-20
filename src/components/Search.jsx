import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {FormStyle} from './Styled/Styled';
import {useNavigate} from 'react-router-dom';

export default function Search() {
	const [input, setInput] = useState('');
	const navigate = useNavigate();

	const submitHandler = e => {
		e.preventDefault();
		navigate(`/react-recipes/searched/${input}`);
	};

	return (
		<FormStyle onSubmit={submitHandler}>
			<FaSearch />
			<input
				type='text'
				value={input}
				onChange={e => setInput(e.target.value)}
			/>
		</FormStyle>
	);
}
