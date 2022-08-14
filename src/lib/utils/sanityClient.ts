import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: '5ukefhxh',
	dataset: 'production',
	apiVersion: '2022-08-01',
	useCdn: true
});

export default client;
