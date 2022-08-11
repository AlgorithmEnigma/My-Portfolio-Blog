const imports = import.meta.glob('/src/posts/*.md', { eager: true });
// console.log(imports);

const posts = [];

for (const path in imports) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const post: any = imports[path];
	posts.push({ ...post.metadata, ...post.default.render() });
}

const filteredPosts = posts.filter((post) => !post.hidden).sort((a, b) => b.date - a.date);

export default filteredPosts;
