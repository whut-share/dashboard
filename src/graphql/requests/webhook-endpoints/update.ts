import { gql } from "graphql-tag";

export const GQL_WEBHOOK_ENDPOINTS_UPDATE_ONE = gql`
  mutation GqlWebhookEndpointsUpdateOne(
    $id: ObjectId!
    $data: IWebhookEndpointUpdate!
  ) {
    webhookEndpointUpdate(data: $data, id: $id) {
      id
      url
      project
      key
    }
  }
`;
