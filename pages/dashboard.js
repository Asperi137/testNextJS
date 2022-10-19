import { UserContext } from '/Contexts/UserContext';
import { useContext } from 'react';

export default function Dashboard() {
	const { user } = useContext(UserContext);
	return (
		<>
			{user && <h1> Dashboard</h1>}
			{!user && <h1> veuiller vous connecter</h1>}
		</>
	);
}
