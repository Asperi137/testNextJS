import classes from './Header.module.css';
import Nav from '../nav/Nav';

export default function Header() {
	return (
		<header className={classes.Header}>
			<div
				className='container'
				style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
			>
				<h1 style={{ margin: 0 }}>Jerome</h1>
				<Nav />
			</div>
		</header>
	);
}
