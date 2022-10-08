import { apolloClient } from './client/ApolloClient';
import { gql } from '@apollo/client'

const query = `query($request: ChallengeRequest!) {
  challenge(request: $request) {
        text
    }
  }
`

export const queryExample = async () => {
   const response = await apolloClient.query({
    query: gql(query),
    variables: {
      request: {
         address: "0xdfd7D26fd33473F475b57556118F8251464a24eb"
      },
    },
  })
  console.log('Lens example data: ', response)
}
