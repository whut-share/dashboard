import { gql } from "graphql-tag";

export const GQL_EVENT_EMITTER_INSTANCES_CREATE_ONE = gql`
  mutation GqlEventEmitterInstancesCreateOne(
    $data: IEventEmitterInstanceCreate!
  ) {
    eventEmitterInstanceCreate(data: $data) {
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
