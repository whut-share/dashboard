export interface IUser {
  created_at?: string | Date;
  updated_at?: string | Date;
  id: string;
  email?: string;
}
export interface IEventEmitterInstance {
  created_at?: string | Date;
  updated_at?: string | Date;
  id: string;
  name?: string;
  is_webhook_emitter?: boolean;
  webhook_endpoint?: string | null | undefined;
  syncer_instance?: string;
  is_stopped?: boolean;
}
export interface IChainNetwork {
  default_rpc?: string;
  archive_rpc?: string;
  key?: string;
  type?: string;
  block_time?: number;
  native_curr_symbol?: string;
  icon_url?: string | null | undefined;
}
export interface ISyncerInstanceContract {
  created_at?: string | Date;
  updated_at?: string | Date;
  network?: string;
  address?: string;
  deploy_tx?: string;
  contract_name?: string;
  events?: string[];
  abi?: any;
}
export interface ISyncerInstance {
  created_at?: string | Date;
  updated_at?: string | Date;
  id: string;
  contracts?: ISyncerInstanceContract[];
  project?: string;
  preset?: string;
}
export interface IProjectSyncerSettings {
  include_networks?: string[];
  contracts_base_url?: string | null | undefined;
}
export interface IProjectDassetsSettings {
  include_networks?: string[];
  token_base_url?: string | null | undefined;
  webhook_events_url?: string | null | undefined;
}
export interface IProject {
  created_at?: string | Date;
  updated_at?: string | Date;
  id: string;
  user?: string;
  name?: string;
  pic?: string | null | undefined;
  dassets_settings?: IProjectDassetsSettings;
  syncer_settings?: IProjectSyncerSettings;
  dassets_syncer_instance?: ISyncerInstance;
}
export interface IDassetsNft {
  created_at?: string | Date;
  updated_at?: string | Date;
  project?: string;
  owner?: string;
  mint_tx?: string;
  mint_block?: number;
  network?: string;
  token_id?: number;
  asset_id?: string;
  owner_synced_at?: number;
}
export interface ISyncerEvent {
  created_at?: string | Date;
  updated_at?: string | Date;
  id: string;
  internal_id?: string;
  name?: string;
  payload?: any | null | undefined;
  args?: any | null | undefined;
  event_emitter_instance?: string;
  metadata?: any;
  is_processed?: boolean;
}
export interface IDassetsNftAssetInfo {
  id: string;
  name?: string;
  description?: string | null | undefined;
  image_url?: string | null | undefined;
}
export interface IDassetsCheckoutSessionPriceEstimate {
  price?: number;
  total_eth?: number;
  eth_price?: number;
  gas_price?: number;
  gas?: number;
  slippage?: number;
}
export interface IDassetsCheckoutSession {
  created_at?: string | Date;
  updated_at?: string | Date;
  id: string;
  project?: string;
  address?: string | null | undefined;
  mint_tx?: string | null | undefined;
  mint_token_id?: number | null | undefined;
  mint_request_id?: string | null | undefined;
  payment_id?: string | null | undefined;
  payment_expires_at?: string | Date | null | undefined;
  network?: string | null | undefined;
  contract_type?: string;
  is_succeeded?: boolean;
  expires_at?: string | Date;
  asset_info?: IDassetsNftAssetInfo;
  is_payed?: boolean;
  url?: string;
  is_minted?: boolean;
  is_expired?: boolean;
  price_estimation?: IDassetsCheckoutSessionPriceEstimate | null | undefined;
  stripe_pi_client_secret?: string | null | undefined;
}
export interface IProjectGroup {
  created_at?: string | Date;
  updated_at?: string | Date;
  id: string;
  user?: string;
  name?: string;
  pic?: string | null | undefined;
  projects?: string[];
}
export interface IKeyBunch {
  created_at?: string | Date;
  updated_at?: string | Date;
  id: string;
  user?: string;
  project?: string;
  name?: string;
  description?: string;
  public_key?: string;
  secret_key?: string | null | undefined;
}
