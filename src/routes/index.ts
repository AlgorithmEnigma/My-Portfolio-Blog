import client from '$lib/utils/sanityClient';
// import posts from '$lib/stores/posts';

export async function GET() {
	const data = await client.fetch('*[_type == "post"]');
	// console.log(data);

	if (data) {
		return {
			status: 200,
			headers: {
				'access-control-allow-origin': '*'
			},
			body: { posts: data }
		};
	}
	return {
		status: 500,
		body: new Error('Failed to get data')
	};
}
