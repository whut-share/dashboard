import { gql } from "graphql-tag";

export const GQL_PROJECTS_GET = gql`
  query GqlProjectsGet($id: ObjectId!) {
    project(id: $id) {
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
