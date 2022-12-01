import { gql } from "graphql-tag";

export const GQL_PROJECT_GROUPS_GET = gql`
  query GqlProjectGroupsGet($id: ObjectId!) {
    project_group(id: $id) {
      id
      name
      projects
    }
  }
`;
