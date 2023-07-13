import { GraphQLClient, gql } from 'graphql-request';

export async function load({ params }) {
	const hygraph = new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clajji1v52wt701t67t8g8i7q/master');

	const query = gql`
	query Posts($slug: String!) {
    post(where: { slug: $slug })  {
      title
			content {
				html
			}
    }
  }
	`

	const variables = {
		slug: params.slug,
	}

	const data = await hygraph.request(query, variables)
	return {data: data.post}
}