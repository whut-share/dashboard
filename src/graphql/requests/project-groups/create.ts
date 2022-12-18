import { gql } from "graphql-tag";

export const GQL_PROJECT_GROUPS_CREATE_ONE = gql`
  mutation GqlProjectGroupsCreateOne($data: IProjectGroupCreate!) {
    projectGroupCreate(data: $data) {
      id
      name
      projects
      user
      created_at
      updated_at
    }
  }
`;
