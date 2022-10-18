import Link from 'next/link';

export default function index({ posts, date }) {
	return (
		<main>
			<h1>{date}</h1>
			<ul>
				{posts.map((post) => (
					<Link key={post.id} href={`/blog/${post.id}`}>
						<a>
							<li>
								{post.id} - {post.title}
							</li>
						</a>
					</Link>
				))}
			</ul>
		</main>
	);
}

export async function getServerSideProps() {
	const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4').then((r) => r.json());
	return {
		props: {
			posts,
			date: new Date().toString(),
		},
	};
}
