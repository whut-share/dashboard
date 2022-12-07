import { gql } from "graphql-tag";

export const GQL_EVENT_EMITTER_INSTANCES_SELECT = gql`
  query GqlEventEmitterInstancesSelect($filter: IEventEmitterInstancesFilter!) {
    event_emitter_instances(filter: $filter) {
      id
      is_webhook_emitter
      webhook_endpoint
      syncer_instance
      is_stopped
      name
      created_at
      updated_at
    }
  }
`;
