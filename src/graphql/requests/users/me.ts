import { gql } from "graphql-tag";

export const GQL_USERS_GET_ME = gql`
  query GqlUsersGetMe {
    me {
      id
      email
      created_at
      updated_at
    }
  }
`;
