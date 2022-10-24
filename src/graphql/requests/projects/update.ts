import { gql } from "graphql-tag";

export const GQL_PROJECTS_UPDATE = gql`
  mutation GqlProjectsUpdate($id: ObjectId!, $data: IProjectsUpdate!) {
    projectsUpdate(data: $data, id: $id) {
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
