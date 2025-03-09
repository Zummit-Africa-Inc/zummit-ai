import { ApolloClient, InMemoryCache } from "@apollo/client"

export const createClient = () => {
	const client = new ApolloClient({
		uri: "https://gql.hashnode.com",
		cache: new InMemoryCache(),
		headers: {
			Authorization: process.env.NEXT_PUBLIC_HASHNODE_TOKEN as string,
		},
	})

	return client
}
