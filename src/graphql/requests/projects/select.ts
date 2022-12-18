import { gql } from "graphql-tag";

export const GQL_PROJECTS_SELECT = gql`
  query GqlProjectsSelect {
    projects {
      id
      name
      dassets_syncer_instance {
        id
      }
      dassets_settings {
        include_networks
        token_base_url
        webhook_events_url
      }
      syncer_settings {
        include_networks
        contracts_base_url
      }
      user
      created_at
      updated_at
    }
  }
`;
