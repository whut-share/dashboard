import { gql } from "graphql-tag";

export const GQL_SYNCER_INSTANCES_GET = gql`
  query GqlSyncerInstancesGet($id: ObjectId!) {
    syncer_instance(id: $id) {
      id
    }
  }
`;
