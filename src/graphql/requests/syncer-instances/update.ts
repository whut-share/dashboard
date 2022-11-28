import { gql } from "graphql-tag";

export const GQL_SYNCER_INSTANCES_UPDATE_ONE = gql`
  mutation GqlSyncerInstancesUpdateOne(
    $id: ObjectId!
    $data: ISyncerInstanceUpdate!
  ) {
    syncerInstanceUpdate(data: $data, id: $id) {
      id
    }
  }
`;
