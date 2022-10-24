import { gql } from "graphql-tag";

export const GQL_PROJECTS_CREATE = gql`
  mutation GqlProjectsCreate($data: IProjectsCreate!) {
    projectsCreate(data: $data) {
      id
      name
      dassets {
        include_networks
        token_base_url
        webhook_events_url
      }
    }
  }
`;
