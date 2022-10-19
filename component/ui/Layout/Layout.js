import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { UserContext } from '/Contexts/UserContext';
import { useState } from 'react';

export default function Layout(props) {
	const [user, setUser] = useState(null);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			<div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
				<Header />
				<div style={{ flexGrow: 1 }}>
					<div className='container'>{props.children}</div>
				</div>
				<Footer />
			</div>
		</UserContext.Provider>
	);
}
