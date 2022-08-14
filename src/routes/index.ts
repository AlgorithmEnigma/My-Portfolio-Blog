import client from '$lib/utils/sanityClient';

export async function GET() {
	const posts = await client.fetch('*[_type == "post"]');
	const projects = await client.fetch('*[_type == "project"]');
	// console.log(data);

	if (posts && projects) {
		return {
			status: 200,
			headers: {
				'access-control-allow-origin': '*'
			},
			body: { posts, projects }
		};
	}
	return {
		status: 500,
		body: new Error('Failed to get data')
	};
}
