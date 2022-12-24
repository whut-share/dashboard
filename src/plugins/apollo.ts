import { useAuthStore } from "@/store";
import {
  ApolloClient,
  ApolloLink,
  concat,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: process.env["VUE_APP_API_URL"] + "/graphql",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const auth_store = useAuthStore();

  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      authorization: `Bearer ${auth_store.token}`,
      ...headers,
    },
  }));

  return forward(operation);
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
export const apollo_client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      // errorPolicy: 'all',
    },
    mutate: {
      fetchPolicy: "no-cache",
      // errorPolicy: 'all',
    },
    query: {
      fetchPolicy: "no-cache",
      // errorPolicy: 'all',
    },
  },
});

(window as any).$apc = apollo_client;
