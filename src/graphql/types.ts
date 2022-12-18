/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GqlChainNetworksSelect
// ====================================================

export interface GqlChainNetworksSelect_chain_networks {
  __typename: "ChainNetwork";
  id: string;
  default_rpc: string;
  archive_rpc: string;
  type: string;
  block_time: number;
  native_curr_symbol: string;
  icon_url: string | null;
}

export interface GqlChainNetworksSelect {
  chain_networks: GqlChainNetworksSelect_chain_networks[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GqlDassetsCheckoutSessionsAttachStripePaymentIntent
// ====================================================

export interface GqlDassetsCheckoutSessionsAttachStripePaymentIntent_dassetsCheckoutSessionAttachStripePaymentIntent_price_estimation {
  __typename: "DassetsCheckoutSessionPriceEstimate";
  price: number;
  total_eth: number;
  eth_price: number;
  gas_price: number;
  gas: number;
  slippage: number;
}

export interface GqlDassetsCheckoutSessionsAttachStripePaymentIntent_dassetsCheckoutSessionAttachStripePaymentIntent_asset_info {
  __typename: "DassetsNftAssetInfo";
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
}

export interface GqlDassetsCheckoutSessionsAttachStripePaymentIntent_dassetsCheckoutSessionAttachStripePaymentIntent {
  __typename: "DassetsCheckoutSession";
  id: string;
  created_at: any;
  updated_at: any;
  project: string;
  address: any | null;
  mint_tx: any | null;
  mint_request_id: string | null;
  mint_token_id: number | null;
  payment_id: string | null;
  network: any | null;
  contract_type: string;
  is_succeeded: boolean;
  is_minted: boolean;
  is_payed: boolean;
  is_expired: boolean;
  expires_at: any;
  url: string;
  payment_expires_at: any | null;
  stripe_pi_client_secret: string | null;
  price_estimation: GqlDassetsCheckoutSessionsAttachStripePaymentIntent_dassetsCheckoutSessionAttachStripePaymentIntent_price_estimation | null;
  asset_info: GqlDassetsCheckoutSessionsAttachStripePaymentIntent_dassetsCheckoutSessionAttachStripePaymentIntent_asset_info;
}

export interface GqlDassetsCheckoutSessionsAttachStripePaymentIntent {
  dassetsCheckoutSessionAttachStripePaymentIntent: GqlDassetsCheckoutSessionsAttachStripePaymentIntent_dassetsCheckoutSessionAttachStripePaymentIntent;
}

export interface GqlDassetsCheckoutSessionsAttachStripePaymentIntentVariables {
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GqlDassetsCheckoutSessionsCreateOne
// ====================================================

export interface GqlDassetsCheckoutSessionsCreateOne_dassetsCheckoutSessionCreate {
  __typename: "DassetsCheckoutSession";
  id: string;
}

export interface GqlDassetsCheckoutSessionsCreateOne {
  dassetsCheckoutSessionCreate: GqlDassetsCheckoutSessionsCreateOne_dassetsCheckoutSessionCreate;
}

export interface GqlDassetsCheckoutSessionsCreateOneVariables {
  data: IDassetsCheckoutSessionCreate;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GqlDassetsCheckoutSessionsGet
// ====================================================

export interface GqlDassetsCheckoutSessionsGet_dassets_checkout_session_price_estimation {
  __typename: "DassetsCheckoutSessionPriceEstimate";
  price: number;
  total_eth: number;
  eth_price: number;
  gas_price: number;
  gas: number;
  slippage: number;
}

export interface GqlDassetsCheckoutSessionsGet_dassets_checkout_session_asset_info {
  __typename: "DassetsNftAssetInfo";
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
}

export interface GqlDassetsCheckoutSessionsGet_dassets_checkout_session {
  __typename: "DassetsCheckoutSession";
  id: string;
  created_at: any;
  updated_at: any;
  project: string;
  address: any | null;
  mint_tx: any | null;
  mint_request_id: string | null;
  mint_token_id: number | null;
  payment_id: string | null;
  network: any | null;
  contract_type: string;
  is_succeeded: boolean;
  is_minted: boolean;
  is_payed: boolean;
  is_expired: boolean;
  expires_at: any;
  url: string;
  payment_expires_at: any | null;
  price_estimation: GqlDassetsCheckoutSessionsGet_dassets_checkout_session_price_estimation | null;
  asset_info: GqlDassetsCheckoutSessionsGet_dassets_checkout_session_asset_info;
}

export interface GqlDassetsCheckoutSessionsGet {
  dassets_checkout_session: GqlDassetsCheckoutSessionsGet_dassets_checkout_session;
}

export interface GqlDassetsCheckoutSessionsGetVariables {
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GqlDassetsCheckoutSessionsUpdateOne
// ====================================================

export interface GqlDassetsCheckoutSessionsUpdateOne_dassetsCheckoutSessionUpdate_price_estimation {
  __typename: "DassetsCheckoutSessionPriceEstimate";
  price: number;
  total_eth: number;
  eth_price: number;
  gas_price: number;
  gas: number;
  slippage: number;
}

export interface GqlDassetsCheckoutSessionsUpdateOne_dassetsCheckoutSessionUpdate_asset_info {
  __typename: "DassetsNftAssetInfo";
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
}

export interface GqlDassetsCheckoutSessionsUpdateOne_dassetsCheckoutSessionUpdate {
  __typename: "DassetsCheckoutSession";
  id: string;
  created_at: any;
  updated_at: any;
  project: string;
  address: any | null;
  mint_tx: any | null;
  mint_request_id: string | null;
  mint_token_id: number | null;
  payment_id: string | null;
  network: any | null;
  contract_type: string;
  is_succeeded: boolean;
  is_minted: boolean;
  is_payed: boolean;
  is_expired: boolean;
  expires_at: any;
  url: string;
  payment_expires_at: any | null;
  price_estimation: GqlDassetsCheckoutSessionsUpdateOne_dassetsCheckoutSessionUpdate_price_estimation | null;
  asset_info: GqlDassetsCheckoutSessionsUpdateOne_dassetsCheckoutSessionUpdate_asset_info;
}

export interface GqlDassetsCheckoutSessionsUpdateOne {
  dassetsCheckoutSessionUpdate: GqlDassetsCheckoutSessionsUpdateOne_dassetsCheckoutSessionUpdate;
}

export interface GqlDassetsCheckoutSessionsUpdateOneVariables {
  id: any;
  data: IDassetsCheckoutSessionUpdate;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GqlEventEmitterInstancesCreateOne
// ====================================================

export interface GqlEventEmitterInstancesCreateOne_eventEmitterInstanceCreate {
  __typename: "EventEmitterInstance";
  id: string;
  is_webhook_emitter: boolean;
  webhook_endpoint: string | null;
  syncer_instance: any;
  is_stopped: boolean;
  name: string;
  created_at: any;
  updated_at: any;
}

export interface GqlEventEmitterInstancesCreateOne {
  eventEmitterInstanceCreate: GqlEventEmitterInstancesCreateOne_eventEmitterInstanceCreate;
}

export interface GqlEventEmitterInstancesCreateOneVariables {
  data: IEventEmitterInstanceCreate;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GqlEventEmitterInstancesGet
// ====================================================

export interface GqlEventEmitterInstancesGet_event_emitter_instance {
  __typename: "EventEmitterInstance";
  id: string;
  is_webhook_emitter: boolean;
  webhook_endpoint: string | null;
  syncer_instance: any;
  is_stopped: boolean;
  name: string;
  created_at: any;
  updated_at: any;
}

export interface GqlEventEmitterInstancesGet {
  event_emitter_instance: GqlEventEmitterInstancesGet_event_emitter_instance;
}

export interface GqlEventEmitterInstancesGetVariables {
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GqlEventEmitterInstancesSelect
// ====================================================

export interface GqlEventEmitterInstancesSelect_event_emitter_instances {
  __typename: "EventEmitterInstance";
  id: string;
  is_webhook_emitter: boolean;
  webhook_endpoint: string | null;
  syncer_instance: any;
  is_stopped: boolean;
  name: string;
  created_at: any;
  updated_at: any;
}

export interface GqlEventEmitterInstancesSelect {
  event_emitter_instances: GqlEventEmitterInstancesSelect_event_emitter_instances[];
}

export interface GqlEventEmitterInstancesSelectVariables {
  filter: IEventEmitterInstancesFilter;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GqlEventEmitterInstancesUpdateOne
// ====================================================

export interface GqlEventEmitterInstancesUpdateOne_eventEmitterInstanceUpdate {
  __typename: "EventEmitterInstance";
  id: string;
  is_webhook_emitter: boolean;
  webhook_endpoint: string | null;
  syncer_instance: any;
  is_stopped: boolean;
  name: string;
  created_at: any;
  updated_at: any;
}

export interface GqlEventEmitterInstancesUpdateOne {
  eventEmitterInstanceUpdate: GqlEventEmitterInstancesUpdateOne_eventEmitterInstanceUpdate;
}

export interface GqlEventEmitterInstancesUpdateOneVariables {
  id: any;
  data: IEventEmitterInstanceUpdate;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GqlProjectGroupsCreateOne
// ====================================================

export interface GqlProjectGroupsCreateOne_projectGroupCreate {
  __typename: "ProjectGroup";
  id: string;
  name: string;
  projects: any[];
  user: any;
  created_at: any;
  updated_at: any;
}

export interface GqlProjectGroupsCreateOne {
  projectGroupCreate: GqlProjectGroupsCreateOne_projectGroupCreate;
}

export interface GqlProjectGroupsCreateOneVariables {
  data: IProjectGroupCreate;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GqlProjectGroupsGet
// ====================================================

export interface GqlProjectGroupsGet_project_group {
  __typename: "ProjectGroup";
  id: string;
  name: string;
  projects: any[];
  user: any;
  created_at: any;
  updated_at: any;
}

export interface GqlProjectGroupsGet {
  project_group: GqlProjectGroupsGet_project_group;
}

export interface GqlProjectGroupsGetVariables {
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GqlProjectGroupsSelect
// ====================================================

export interface GqlProjectGroupsSelect_project_groups {
  __typename: "ProjectGroup";
  id: string;
  name: string;
  projects: any[];
  user: any;
  created_at: any;
  updated_at: any;
}

export interface GqlProjectGroupsSelect {
  project_groups: GqlProjectGroupsSelect_project_groups[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GqlProjectGroupsUpdateOne
// ====================================================

export interface GqlProjectGroupsUpdateOne_projectGroupUpdate {
  __typename: "ProjectGroup";
  id: string;
  name: string;
  projects: any[];
  user: any;
  created_at: any;
  updated_at: any;
}

export interface GqlProjectGroupsUpdateOne {
  projectGroupUpdate: GqlProjectGroupsUpdateOne_projectGroupUpdate;
}

export interface GqlProjectGroupsUpdateOneVariables {
  id: any;
  data: IProjectGroupUpdate;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GqlProjectsCreateOne
// ====================================================

export interface GqlProjectsCreateOne_projectCreate_dassets_syncer_instance {
  __typename: "SyncerInstance";
  id: any;
}

export interface GqlProjectsCreateOne_projectCreate_dassets_settings {
  __typename: "ProjectDassetsSettings";
  include_networks: string[];
  token_base_url: string | null;
  webhook_events_url: string | null;
}

export interface GqlProjectsCreateOne_projectCreate_syncer_settings {
  __typename: "ProjectSyncerSettings";
  include_networks: any[];
  contracts_base_url: string | null;
}

export interface GqlProjectsCreateOne_projectCreate {
  __typename: "Project";
  id: string;
  name: string;
  dassets_syncer_instance: GqlProjectsCreateOne_projectCreate_dassets_syncer_instance;
  dassets_settings: GqlProjectsCreateOne_projectCreate_dassets_settings;
  syncer_settings: GqlProjectsCreateOne_projectCreate_syncer_settings;
  user: string;
  created_at: any;
  updated_at: any;
}

export interface GqlProjectsCreateOne {
  projectCreate: GqlProjectsCreateOne_projectCreate;
}

export interface GqlProjectsCreateOneVariables {
  data: IProjectCreate;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GqlProjectsGet
// ====================================================

export interface GqlProjectsGet_project_dassets_syncer_instance {
  __typename: "SyncerInstance";
  id: any;
}

export interface GqlProjectsGet_project_dassets_settings {
  __typename: "ProjectDassetsSettings";
  include_networks: string[];
  token_base_url: string | null;
  webhook_events_url: string | null;
}

export interface GqlProjectsGet_project_syncer_settings {
  __typename: "ProjectSyncerSettings";
  include_networks: any[];
  contracts_base_url: string | null;
}

export interface GqlProjectsGet_project {
  __typename: "Project";
  id: string;
  name: string;
  dassets_syncer_instance: GqlProjectsGet_project_dassets_syncer_instance;
  dassets_settings: GqlProjectsGet_project_dassets_settings;
  syncer_settings: GqlProjectsGet_project_syncer_settings;
  user: string;
  created_at: any;
  updated_at: any;
}

export interface GqlProjectsGet {
  project: GqlProjectsGet_project;
}

export interface GqlProjectsGetVariables {
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GqlProjectsSelect
// ====================================================

export interface GqlProjectsSelect_projects_dassets_syncer_instance {
  __typename: "SyncerInstance";
  id: any;
}

export interface GqlProjectsSelect_projects_dassets_settings {
  __typename: "ProjectDassetsSettings";
  include_networks: string[];
  token_base_url: string | null;
  webhook_events_url: string | null;
}

export interface GqlProjectsSelect_projects_syncer_settings {
  __typename: "ProjectSyncerSettings";
  include_networks: any[];
  contracts_base_url: string | null;
}

export interface GqlProjectsSelect_projects {
  __typename: "Project";
  id: string;
  name: string;
  dassets_syncer_instance: GqlProjectsSelect_projects_dassets_syncer_instance;
  dassets_settings: GqlProjectsSelect_projects_dassets_settings;
  syncer_settings: GqlProjectsSelect_projects_syncer_settings;
  user: string;
  created_at: any;
  updated_at: any;
}

export interface GqlProjectsSelect {
  projects: GqlProjectsSelect_projects[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GqlProjectsUpdateOne
// ====================================================

export interface GqlProjectsUpdateOne_projectUpdate_dassets_syncer_instance {
  __typename: "SyncerInstance";
  id: any;
}

export interface GqlProjectsUpdateOne_projectUpdate_dassets_settings {
  __typename: "ProjectDassetsSettings";
  include_networks: string[];
  token_base_url: string | null;
  webhook_events_url: string | null;
}

export interface GqlProjectsUpdateOne_projectUpdate_syncer_settings {
  __typename: "ProjectSyncerSettings";
  include_networks: any[];
  contracts_base_url: string | null;
}

export interface GqlProjectsUpdateOne_projectUpdate {
  __typename: "Project";
  id: string;
  name: string;
  dassets_syncer_instance: GqlProjectsUpdateOne_projectUpdate_dassets_syncer_instance;
  dassets_settings: GqlProjectsUpdateOne_projectUpdate_dassets_settings;
  syncer_settings: GqlProjectsUpdateOne_projectUpdate_syncer_settings;
  user: string;
  created_at: any;
  updated_at: any;
}

export interface GqlProjectsUpdateOne {
  projectUpdate: GqlProjectsUpdateOne_projectUpdate;
}

export interface GqlProjectsUpdateOneVariables {
  id: any;
  data: IProjectUpdate;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GqlSyncerInstancesCreateOne
// ====================================================

export interface GqlSyncerInstancesCreateOne_syncerInstanceCreate {
  __typename: "SyncerInstance";
  id: any;
}

export interface GqlSyncerInstancesCreateOne {
  syncerInstanceCreate: GqlSyncerInstancesCreateOne_syncerInstanceCreate;
}

export interface GqlSyncerInstancesCreateOneVariables {
  data: ISyncerInstanceCreate;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GqlSyncerInstancesGet
// ====================================================

export interface GqlSyncerInstancesGet_syncer_instance {
  __typename: "SyncerInstance";
  id: any;
}

export interface GqlSyncerInstancesGet {
  syncer_instance: GqlSyncerInstancesGet_syncer_instance;
}

export interface GqlSyncerInstancesGetVariables {
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GqlSyncerInstancesSelect
// ====================================================

export interface GqlSyncerInstancesSelect_syncer_instances {
  __typename: "SyncerInstance";
  id: any;
}

export interface GqlSyncerInstancesSelect {
  syncer_instances: GqlSyncerInstancesSelect_syncer_instances[];
}

export interface GqlSyncerInstancesSelectVariables {
  filter: ISyncerInstancesFilter;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GqlSyncerInstancesUpdateOne
// ====================================================

export interface GqlSyncerInstancesUpdateOne_syncerInstanceUpdate {
  __typename: "SyncerInstance";
  id: any;
}

export interface GqlSyncerInstancesUpdateOne {
  syncerInstanceUpdate: GqlSyncerInstancesUpdateOne_syncerInstanceUpdate;
}

export interface GqlSyncerInstancesUpdateOneVariables {
  id: any;
  data: ISyncerInstanceUpdate;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GqlUsersGetMe
// ====================================================

export interface GqlUsersGetMe_me {
  __typename: "User";
  id: any;
  email: string;
  created_at: any;
  updated_at: any;
}

export interface GqlUsersGetMe {
  me: GqlUsersGetMe_me;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GqlUsersSignUp
// ====================================================

export interface GqlUsersSignUp_userSignUp {
  __typename: "User";
  id: any;
  email: string;
  updated_at: any;
}

export interface GqlUsersSignUp {
  userSignUp: GqlUsersSignUp_userSignUp;
}

export interface GqlUsersSignUpVariables {
  data: IUserSignUp;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface IDassetsCheckoutSessionCreate {
  project: any;
  asset_info: IDassetsCheckoutSessionCreateAssetInfo;
}

export interface IDassetsCheckoutSessionCreateAssetInfo {
  id: string;
  name: string;
  description?: string | null;
  image_url?: string | null;
}

export interface IDassetsCheckoutSessionUpdate {
  address?: any | null;
  network?: any | null;
}

export interface IEventEmitterInstanceCreate {
  is_webhook_emitter: boolean;
  webhook_endpoint?: string | null;
  syncer_instance: any;
}

export interface IEventEmitterInstanceUpdate {
  is_webhook_emitter?: boolean | null;
  webhook_endpoint?: string | null;
}

export interface IEventEmitterInstancesFilter {
  syncer_instance?: any | null;
}

export interface IProjectCreate {
  name: string;
}

export interface IProjectDassetsSettingsUpdate {
  include_networks?: any[] | null;
  token_base_url?: string | null;
  webhook_events_url?: string | null;
}

export interface IProjectGroupCreate {
  name: string;
  pic?: string | null;
  projects?: any[] | null;
}

export interface IProjectGroupUpdate {
  name?: string | null;
  pic?: string | null;
  projects?: any[] | null;
}

export interface IProjectUpdate {
  name?: string | null;
  dassets_settings?: IProjectDassetsSettingsUpdate | null;
}

export interface ISyncerInstanceCreate {
  project: any;
  preset?: string | null;
  contracts?: ISyncerInstanceCreateContracts[] | null;
}

export interface ISyncerInstanceCreateContracts {
  address?: any | null;
  deploy_tx?: any | null;
  contract_name: string;
  events: string[];
  abi: any;
}

export interface ISyncerInstanceUpdate {
  project?: any | null;
  preset?: string | null;
  contracts?: ISyncerInstanceUpdateContracts[] | null;
}

export interface ISyncerInstanceUpdateContracts {
  address?: any | null;
  deploy_tx?: any | null;
  contract_name?: string | null;
  events?: string[] | null;
  abi?: any | null;
}

export interface ISyncerInstancesFilter {
  project: any;
}

export interface IUserSignUp {
  email: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
