import { gql } from "graphql-tag";

export const GQL_SYNCER_INSTANCES_SELECT = gql`
  query GqlSyncerInstancesSelect($filter: ISyncerInstancesFilter!) {
    syncer_instances(filter: $filter) {
      id
    }
  }
`;
