import { gql } from '@apollo/client';

export const COUNT_COMMENTS = gql`
  query {
    commentsConnection {
      aggregate {
        count
      }
    }
  }
`;

export const FETCH_COMMENTS_WITH_PAGINATION = gql`
  query ($limit: Int!, $offset: Int!) {
    comments(limit: $limit, start: $offset) {
      id
      name
      email
      body
    }
  }
`;
