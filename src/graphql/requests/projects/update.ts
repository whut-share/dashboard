import { gql } from "graphql-tag";

export const GQL_PROJECTS_UPDATE_ONE = gql`
  mutation GqlProjectsUpdateOne($id: ObjectId!, $data: IProjectUpdate!) {
    projectUpdate(data: $data, id: $id) {
      id
      name
      minter_syncer_instance {
        id
      }
      minter_settings {
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
