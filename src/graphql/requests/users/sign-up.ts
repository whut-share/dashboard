import { gql } from "graphql-tag";

export const GQL_USERS_SIGN_UP = gql`
  mutation GqlUsersSignUp($data: IUsersSignUp!) {
    usersSignUp(data: $data) {
      id
      email
    }
  }
`;
