import { gql } from "graphql-tag";

export const GQL_PROJECTS_CREATE_ONE = gql`
  mutation GqlProjectsCreateOne($data: IProjectCreate!) {
    projectCreate(data: $data) {
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
    }
  }
`;
