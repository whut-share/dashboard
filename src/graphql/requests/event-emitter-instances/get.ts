import { gql } from "graphql-tag";

export const GQL_EVENT_EMITTER_INSTANCES_GET = gql`
  query GqlEventEmitterInstancesGet($id: ObjectId!) {
    event_emitter_instance(id: $id) {
      id
      is_webhook_emitter
      webhook_endpoint
      syncer_instance
    }
  }
`;
