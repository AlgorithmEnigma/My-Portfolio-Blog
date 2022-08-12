export async function GET({ params }: { params: { post: string } }) {
	const posts = import.meta.glob('/src/posts/*.md');

	for (const path in posts) {
		console.log(posts[path]());
	}

	// marked.parse();

	return {
		status: 200,
		body: { title: params.post }
	};
}
