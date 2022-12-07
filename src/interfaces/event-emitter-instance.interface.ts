export interface IEventEmitterInstance {
  id: string;
  is_webhook_emitter: boolean;
  webhook_endpoint?: string | null;
  syncer_instance: string;
  is_stopped: boolean;
  name: string;
  created_at: string | Date;
  updated_at: string | Date;
}
