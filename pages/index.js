import Link from 'next/link';

export default function index({ date }) {
	return (
		<main>
			<h1>
				<Link href='/blog'>
					<a> go sur mon blog</a>
				</Link>
			</h1>
			<hr />
			<h2>{date} </h2>
		</main>
	);
}

export async function getServerSideProps() {
	return {
		props: {
			date: new Date().toString(),
		},
	};
}
