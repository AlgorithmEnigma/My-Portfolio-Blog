import filteredPosts from '$lib/stores/posts';

export async function GET({ params }: { params: { slug: string } }) {
	const imports = import.meta.glob('/src/posts/*.md', { eager: true });

	const posts = [];

	for (const path in imports) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const post: any = imports[path];
		const slug = post.metadata.slug;
		const postObject = { post, slug };
		posts.push(postObject);
	}

	const post = posts.find((post) => post.slug === params.slug);
	// console.log(post);
	if (!post) {
		console.error(`Post not found: ${params.slug}`);
		return {
			status: 404,
			headers: {}
		};
	}

	return {
		status: 200,
		headers: {},
		body: { page: post.post.default }
	};
}
