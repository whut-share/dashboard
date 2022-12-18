import { gql } from "graphql-tag";

export const GQL_PROJECT_GROUPS_UPDATE_ONE = gql`
  mutation GqlProjectGroupsUpdateOne(
    $id: ObjectId!
    $data: IProjectGroupUpdate!
  ) {
    projectGroupUpdate(data: $data, id: $id) {
      id
      name
      projects
      user
      created_at
      updated_at
    }
  }
`;
