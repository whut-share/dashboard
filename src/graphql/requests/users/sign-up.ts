import { gql } from "graphql-tag";

export const GQL_USERS_SIGN_UP = gql`
  mutation GqlUsersSignUp($data: IUserSignUp!) {
    userSignUp(data: $data) {
      id
      email
      updated_at
    }
  }
`;
