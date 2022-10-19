import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '/Contexts/UserContext';

export default function Nav() {
	const { user, setUser } = useContext(UserContext);

	const quitter = (e) => {
		setUser(null);
	};
	return (
		<nav>
			<ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0, gap: '1.5em' }}>
				<li>
					<Link href='/'>Acceuil</Link>
				</li>
				<li>
					<Link href='/blog'>Blog</Link>
				</li>
				<li>
					<Link href='/apropos'>A Propos</Link>
				</li>
				{user && (
					<li>
						<Link href='/dashboard'>Dashboard</Link>
					</li>
				)}
				{!user && (
					<li>
						<Link href='/user/auth'>Connection</Link>
					</li>
				)}
				{user && (
					<>
						{' '}
						<>
							Bonjours <strong>{user}</strong>
						</>
						<button onClick={quitter}> Déconnection</button>
					</>
				)}
			</ul>
		</nav>
	);
}
