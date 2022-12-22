import { gql } from "graphql-tag";

export const GQL_MINTER_CHECKOUT_SESSIONS_CREATE_ONE = gql`
  mutation GqlMinterCheckoutSessionsCreateOne(
    $data: IMinterCheckoutSessionCreate!
  ) {
    minterCheckoutSessionCreate(data: $data) {
      id
    }
  }
`;
