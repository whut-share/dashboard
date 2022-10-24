export interface IProjectDassetsData {
  include_networks: string[];
  token_base_url: string;
  webhook_events_url: string;
}

export interface IProject {
  id: string;
  name: string;
  dassets: IProjectDassetsData;
}
