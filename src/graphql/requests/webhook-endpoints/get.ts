import { gql } from "graphql-tag";

export const GQL_WEBHOOK_ENDPOINTS_GET = gql`
  query GqlWebhookEndpointsGet($id: ObjectId!) {
    webhook_endpoint(id: $id) {
      id
      url
      project
      key
    }
  }
`;
