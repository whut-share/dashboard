import { gql } from "graphql-tag";

export const GQL_PROJECT_GROUPS_SELECT = gql`
  query GqlProjectGroupsSelect {
    project_groups {
      id
      name
      projects
      user
      created_at
      updated_at
    }
  }
`;
