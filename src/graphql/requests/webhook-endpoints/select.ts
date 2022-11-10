import { gql } from "graphql-tag";

export const GQL_WEBHOOK_ENDPOINTS_SELECT = gql`
  query GqlWebhookEndpointsSelect {
    webhook_endpoints {
      id
      url
      project
      key
    }
  }
`;
