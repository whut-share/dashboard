export interface IUser {
  created_at: string | Date;
  updated_at: string | Date;
  id: string;
  email: string;
}
export interface IEventEmitterInstance {
  created_at: string | Date;
  updated_at: string | Date;
  id: string;
  name: string;
  is_webhook_emitter: boolean;
  webhook_endpoint?: string;
  syncer_instance: string;
  is_stopped: boolean;
}
export interface IChainNetwork {
  default_rpc: string;
  archive_rpc: string;
  key: string;
  type: string;
  block_time: number;
  native_curr_symbol: string;
  icon_url?: string;
}
export interface ISyncerInstanceContract {
  created_at: string | Date;
  updated_at: string | Date;
  network: string;
  address: string;
  deploy_tx: string;
  contract_name: string;
  events: string[];
  abi: any;
}
export interface ISyncerInstance {
  created_at: string | Date;
  updated_at: string | Date;
  id: string;
  contracts: ISyncerInstanceContract[];
  project: string;
  preset: string;
}
export interface IProjectSyncerSettings {
  include_networks: string[];
  contracts_base_url?: string;
}
export interface IProjectDassetsSettings {
  include_networks: string[];
  token_base_url?: string;
  webhook_events_url?: string;
}
export interface IProject {
  created_at: string | Date;
  updated_at: string | Date;
  id: string;
  user: string;
  name: string;
  pic?: string;
  dassets_settings: IProjectDassetsSettings;
  syncer_settings: IProjectSyncerSettings;
  dassets_syncer_instance: ISyncerInstance;
}
export interface IDassetsNft {
  created_at: string | Date;
  updated_at: string | Date;
  project: string;
  owner: string;
  mint_tx: string;
  mint_block: number;
  network: string;
  token_id: number;
  asset_id: string;
  owner_synced_at: number;
}
export interface ISyncerEvent {
  created_at: string | Date;
  updated_at: string | Date;
  id: string;
  internal_id: string;
  name: string;
  payload?: any;
  args?: any;
  event_emitter_instance: string;
  metadata: any;
  is_processed: boolean;
}
export interface IDassetsNftAssetInfo {
  id: string;
  name: string;
  description?: string;
  image_url?: string;
}
export interface IDassetsCheckoutSessionPriceEstimate {
  price: number;
  total_eth: number;
  eth_price: number;
  gas_price: number;
  gas: number;
  slippage: number;
}
export interface IDassetsCheckoutSession {
  created_at: string | Date;
  updated_at: string | Date;
  id: string;
  project: string;
  address?: string;
  mint_tx?: string;
  mint_token_id?: number;
  mint_request_id?: string;
  payment_id?: string;
  payment_expires_at?: string | Date;
  network?: string;
  contract_type: string;
  is_succeeded: boolean;
  expires_at: string | Date;
  asset_info: IDassetsNftAssetInfo;
  is_payed: boolean;
  url: string;
  is_minted: boolean;
  is_expired: boolean;
  price_estimation?: IDassetsCheckoutSessionPriceEstimate;
  stripe_pi_client_secret?: string;
}
export interface IProjectGroup {
  created_at: string | Date;
  updated_at: string | Date;
  id: string;
  user: string;
  name: string;
  pic?: string;
  projects: string[];
}
export interface IKeyBunch {
  created_at: string | Date;
  updated_at: string | Date;
  id: string;
  user: string;
  project: string;
  name: string;
  description: string;
  public_key: string;
  secret_key?: string;
}
