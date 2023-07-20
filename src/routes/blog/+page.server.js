import { GraphQLClient, gql } from 'graphql-request';

export async function load() {
	// See for securing hygraph: https://hygraph.com/blog/securing-api-access-to-your-hygraph-project
  const hygraph = new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clajji1v52wt701t67t8g8i7q/master');

	// See for gql style queries: https://www.npmjs.com/package/graphql-request#graphql-mutations
	const query = gql`
  query Posts {
    posts {
      createdAt
      createdBy {
        createdAt
      }
      title
      intro
      slug
    }
  }
  `;

	const data = await hygraph.request(query);
	return data;
}