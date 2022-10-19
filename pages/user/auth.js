import { useState, useContext } from 'react';
import { UserContext } from '/Contexts/UserContext';
import { useRouter } from 'next/router';

export default function Auth() {
	const [userName, setUserName] = useState('');
	const { setUser } = useContext(UserContext);
	const router = useRouter();

	const onSubmit = (e) => {
		e.preventDefault();
		if (userName) {
			setUser(userName);
			router.push('/');
		}
	};

	const handleChange = (e) => {
		setUserName(e.target.value);
	};

	return (
		<form className='form' onSubmit={onSubmit}>
			<input type='text' onChange={handleChange} />
			<button type='submit'>Entrer</button>
		</form>
	);
}
