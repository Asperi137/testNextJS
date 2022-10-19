import '../styles/default.css';

//composant
import Layout from '../component/ui/Layout/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
