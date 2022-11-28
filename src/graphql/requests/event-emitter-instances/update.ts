import { gql } from "graphql-tag";

export const GQL_EVENT_EMITTER_INSTANCES_UPDATE_ONE = gql`
  mutation GqlEventEmitterInstancesUpdateOne(
    $id: ObjectId!
    $data: IEventEmitterInstanceUpdate!
  ) {
    eventEmitterInstanceUpdate(data: $data, id: $id) {
      id
      is_webhook_emitter
      webhook_endpoint
      syncer_instance
    }
  }
`;
