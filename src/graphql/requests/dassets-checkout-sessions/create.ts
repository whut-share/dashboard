import { gql } from "graphql-tag";

export const GQL_DASSETS_CHECKOUT_SESSIONS_CREATE_ONE = gql`
  mutation GqlDassetsCheckoutSessionsCreateOne(
    $data: IDassetsCheckoutSessionCreate!
  ) {
    dassetsCheckoutSessionCreate(data: $data) {
      id
    }
  }
`;
