export interface IProjectDassetsSettings {
  include_networks: string[];
  token_base_url: string | null;
  webhook_events_url: string | null;
}

export interface IProject {
  id: string;
  name: string;
  dassets_settings: IProjectDassetsSettings;

  dassets_syncer_instance: {
    id: string;
  };
}
