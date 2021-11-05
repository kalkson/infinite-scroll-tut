import { ApolloClient, InMemoryCache } from '@apollo/client'; // InMemoryCache zapewnia cache do wybranych query
import { BASE_URL } from './constants'; // importujemy stałą uri

export const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});
