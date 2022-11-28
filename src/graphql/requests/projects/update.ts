import { gql } from "graphql-tag";

export const GQL_PROJECTS_UPDATE_ONE = gql`
  mutation GqlProjectsUpdateOne($id: ObjectId!, $data: IProjectUpdate!) {
    projectUpdate(data: $data, id: $id) {
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
