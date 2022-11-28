export interface IEventEmitterInstance {
  id: string;
  is_webhook_emitter: boolean;
  webhook_endpoint?: string | null;
  syncer_instance: string;
}
