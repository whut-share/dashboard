import { gql } from "graphql-tag";

export const GQL_PROJECTS_SELECT = gql`
  query GqlProjectsSelect {
    projects {
      id
      name
      dassets_settings {
        include_networks
        token_base_url
        webhook_events_url
      }
    }
  }
`;
