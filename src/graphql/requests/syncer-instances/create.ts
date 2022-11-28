import { gql } from "graphql-tag";

export const GQL_SYNCER_INSTANCES_CREATE_ONE = gql`
  mutation GqlSyncerInstancesCreateOne($data: ISyncerInstanceCreate!) {
    syncerInstanceCreate(data: $data) {
      id
    }
  }
`;
