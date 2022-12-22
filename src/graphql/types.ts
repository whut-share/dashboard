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
// GraphQL mutation operation: GqlMinterCheckoutSessionsAttachStripePaymentIntent
// ====================================================

export interface GqlMinterCheckoutSessionsAttachStripePaymentIntent_minterCheckoutSessionAttachStripePaymentIntent_price_estimation {
  __typename: "MinterCheckoutSessionPriceEstimate";
  price: number;
  total_eth: number;
  eth_price: number;
  gas_price: number;
  gas: number;
  slippage: number;
}

export interface GqlMinterCheckoutSessionsAttachStripePaymentIntent_minterCheckoutSessionAttachStripePaymentIntent_asset_info {
  __typename: "MinterNftAssetInfo";
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
}

export interface GqlMinterCheckoutSessionsAttachStripePaymentIntent_minterCheckoutSessionAttachStripePaymentIntent {
  __typename: "MinterCheckoutSession";
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
  price_estimation: GqlMinterCheckoutSessionsAttachStripePaymentIntent_minterCheckoutSessionAttachStripePaymentIntent_price_estimation | null;
  asset_info: GqlMinterCheckoutSessionsAttachStripePaymentIntent_minterCheckoutSessionAttachStripePaymentIntent_asset_info;
}

export interface GqlMinterCheckoutSessionsAttachStripePaymentIntent {
  minterCheckoutSessionAttachStripePaymentIntent: GqlMinterCheckoutSessionsAttachStripePaymentIntent_minterCheckoutSessionAttachStripePaymentIntent;
}

export interface GqlMinterCheckoutSessionsAttachStripePaymentIntentVariables {
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GqlMinterCheckoutSessionsCreateOne
// ====================================================

export interface GqlMinterCheckoutSessionsCreateOne_minterCheckoutSessionCreate {
  __typename: "MinterCheckoutSession";
  id: string;
}

export interface GqlMinterCheckoutSessionsCreateOne {
  minterCheckoutSessionCreate: GqlMinterCheckoutSessionsCreateOne_minterCheckoutSessionCreate;
}

export interface GqlMinterCheckoutSessionsCreateOneVariables {
  data: IMinterCheckoutSessionCreate;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GqlMinterCheckoutSessionsGet
// ====================================================

export interface GqlMinterCheckoutSessionsGet_minter_checkout_session_price_estimation {
  __typename: "MinterCheckoutSessionPriceEstimate";
  price: number;
  total_eth: number;
  eth_price: number;
  gas_price: number;
  gas: number;
  slippage: number;
}

export interface GqlMinterCheckoutSessionsGet_minter_checkout_session_asset_info {
  __typename: "MinterNftAssetInfo";
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
}

export interface GqlMinterCheckoutSessionsGet_minter_checkout_session {
  __typename: "MinterCheckoutSession";
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
  price_estimation: GqlMinterCheckoutSessionsGet_minter_checkout_session_price_estimation | null;
  asset_info: GqlMinterCheckoutSessionsGet_minter_checkout_session_asset_info;
}

export interface GqlMinterCheckoutSessionsGet {
  minter_checkout_session: GqlMinterCheckoutSessionsGet_minter_checkout_session;
}

export interface GqlMinterCheckoutSessionsGetVariables {
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GqlMinterCheckoutSessionsUpdateOne
// ====================================================

export interface GqlMinterCheckoutSessionsUpdateOne_minterCheckoutSessionUpdate_price_estimation {
  __typename: "MinterCheckoutSessionPriceEstimate";
  price: number;
  total_eth: number;
  eth_price: number;
  gas_price: number;
  gas: number;
  slippage: number;
}

export interface GqlMinterCheckoutSessionsUpdateOne_minterCheckoutSessionUpdate_asset_info {
  __typename: "MinterNftAssetInfo";
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
}

export interface GqlMinterCheckoutSessionsUpdateOne_minterCheckoutSessionUpdate {
  __typename: "MinterCheckoutSession";
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
  price_estimation: GqlMinterCheckoutSessionsUpdateOne_minterCheckoutSessionUpdate_price_estimation | null;
  asset_info: GqlMinterCheckoutSessionsUpdateOne_minterCheckoutSessionUpdate_asset_info;
}

export interface GqlMinterCheckoutSessionsUpdateOne {
  minterCheckoutSessionUpdate: GqlMinterCheckoutSessionsUpdateOne_minterCheckoutSessionUpdate;
}

export interface GqlMinterCheckoutSessionsUpdateOneVariables {
  id: any;
  data: IMinterCheckoutSessionUpdate;
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

export interface GqlProjectsCreateOne_projectCreate_minter_syncer_instance {
  __typename: "SyncerInstance";
  id: any;
}

export interface GqlProjectsCreateOne_projectCreate_minter_settings {
  __typename: "ProjectMinterSettings";
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
  minter_syncer_instance: GqlProjectsCreateOne_projectCreate_minter_syncer_instance;
  minter_settings: GqlProjectsCreateOne_projectCreate_minter_settings;
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

export interface GqlProjectsGet_project_minter_syncer_instance {
  __typename: "SyncerInstance";
  id: any;
}

export interface GqlProjectsGet_project_minter_settings {
  __typename: "ProjectMinterSettings";
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
  minter_syncer_instance: GqlProjectsGet_project_minter_syncer_instance;
  minter_settings: GqlProjectsGet_project_minter_settings;
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

export interface GqlProjectsSelect_projects_minter_syncer_instance {
  __typename: "SyncerInstance";
  id: any;
}

export interface GqlProjectsSelect_projects_minter_settings {
  __typename: "ProjectMinterSettings";
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
  minter_syncer_instance: GqlProjectsSelect_projects_minter_syncer_instance;
  minter_settings: GqlProjectsSelect_projects_minter_settings;
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

export interface GqlProjectsUpdateOne_projectUpdate_minter_syncer_instance {
  __typename: "SyncerInstance";
  id: any;
}

export interface GqlProjectsUpdateOne_projectUpdate_minter_settings {
  __typename: "ProjectMinterSettings";
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
  minter_syncer_instance: GqlProjectsUpdateOne_projectUpdate_minter_syncer_instance;
  minter_settings: GqlProjectsUpdateOne_projectUpdate_minter_settings;
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

export interface IMinterCheckoutSessionCreate {
  project: any;
  asset_info: IMinterCheckoutSessionCreateAssetInfo;
}

export interface IMinterCheckoutSessionCreateAssetInfo {
  id: string;
  name: string;
  description?: string | null;
  image_url?: string | null;
}

export interface IMinterCheckoutSessionUpdate {
  address?: any | null;
  network?: any | null;
}

export interface IProjectCreate {
  name: string;
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

export interface IProjectMinterSettingsUpdate {
  include_networks?: any[] | null;
  token_base_url?: string | null;
  webhook_events_url?: string | null;
}

export interface IProjectUpdate {
  name?: string | null;
  minter_settings?: IProjectMinterSettingsUpdate | null;
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
