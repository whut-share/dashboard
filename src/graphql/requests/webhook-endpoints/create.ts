import { gql } from "graphql-tag";

export const GQL_WEBHOOK_ENDPOINTS_CREATE_ONE = gql`
  mutation GqlWebhookEndpointsCreateOne($data: IWebhookEndpointCreate!) {
    webhookEndpointCreate(data: $data) {
      id
      url
      project
      key
    }
  }
`;
