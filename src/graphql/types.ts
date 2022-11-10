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
  address: string | null;
  mint_tx: string | null;
  mint_request_id: string | null;
  mint_token_id: number | null;
  payment_id: string | null;
  network: string | null;
  contract_type: string;
  is_succeeded: boolean;
  is_minted: boolean;
  is_payed: boolean;
  is_expired: boolean;
  expires_at: any;
  url: string;
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
  address: string | null;
  mint_tx: string | null;
  mint_request_id: string | null;
  mint_token_id: number | null;
  payment_id: string | null;
  network: string | null;
  contract_type: string;
  is_succeeded: boolean;
  is_minted: boolean;
  is_payed: boolean;
  is_expired: boolean;
  expires_at: any;
  url: string;
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
// GraphQL mutation operation: GqlProjectsCreateOne
// ====================================================

export interface GqlProjectsCreateOne_projectCreate_dassets_settings {
  __typename: "ProjectDassetsSettings";
  include_networks: string[];
  token_base_url: string | null;
  webhook_events_url: string | null;
}

export interface GqlProjectsCreateOne_projectCreate {
  __typename: "Project";
  id: string;
  name: string;
  dassets_settings: GqlProjectsCreateOne_projectCreate_dassets_settings;
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

export interface GqlProjectsGet_project_dassets_settings {
  __typename: "ProjectDassetsSettings";
  include_networks: string[];
  token_base_url: string | null;
  webhook_events_url: string | null;
}

export interface GqlProjectsGet_project {
  __typename: "Project";
  id: string;
  name: string;
  dassets_settings: GqlProjectsGet_project_dassets_settings;
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

export interface GqlProjectsSelect_projects_dassets_settings {
  __typename: "ProjectDassetsSettings";
  include_networks: string[];
  token_base_url: string | null;
  webhook_events_url: string | null;
}

export interface GqlProjectsSelect_projects {
  __typename: "Project";
  id: string;
  name: string;
  dassets_settings: GqlProjectsSelect_projects_dassets_settings;
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

export interface GqlProjectsUpdateOne_projectUpdate_dassets_settings {
  __typename: "ProjectDassetsSettings";
  include_networks: string[];
  token_base_url: string | null;
  webhook_events_url: string | null;
}

export interface GqlProjectsUpdateOne_projectUpdate {
  __typename: "Project";
  id: string;
  name: string;
  dassets_settings: GqlProjectsUpdateOne_projectUpdate_dassets_settings;
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
// GraphQL query operation: GqlUsersGetMe
// ====================================================

export interface GqlUsersGetMe_me {
  __typename: "User";
  id: any;
  email: string;
  created_at: any;
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

// ====================================================
// GraphQL mutation operation: GqlWebhookEndpointsCreateOne
// ====================================================

export interface GqlWebhookEndpointsCreateOne_webhookEndpointCreate {
  __typename: "WebhookEndpoint";
  id: string;
  url: string;
  project: string;
  key: string;
}

export interface GqlWebhookEndpointsCreateOne {
  webhookEndpointCreate: GqlWebhookEndpointsCreateOne_webhookEndpointCreate;
}

export interface GqlWebhookEndpointsCreateOneVariables {
  data: IWebhookEndpointCreate;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GqlWebhookEndpointsGet
// ====================================================

export interface GqlWebhookEndpointsGet_webhook_endpoint {
  __typename: "WebhookEndpoint";
  id: string;
  url: string;
  project: string;
  key: string;
}

export interface GqlWebhookEndpointsGet {
  webhook_endpoint: GqlWebhookEndpointsGet_webhook_endpoint;
}

export interface GqlWebhookEndpointsGetVariables {
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GqlWebhookEndpointsSelect
// ====================================================

export interface GqlWebhookEndpointsSelect_webhook_endpoints {
  __typename: "WebhookEndpoint";
  id: string;
  url: string;
  project: string;
  key: string;
}

export interface GqlWebhookEndpointsSelect {
  webhook_endpoints: GqlWebhookEndpointsSelect_webhook_endpoints[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GqlWebhookEndpointsUpdateOne
// ====================================================

export interface GqlWebhookEndpointsUpdateOne_webhookEndpointUpdate {
  __typename: "WebhookEndpoint";
  id: string;
  url: string;
  project: string;
  key: string;
}

export interface GqlWebhookEndpointsUpdateOne {
  webhookEndpointUpdate: GqlWebhookEndpointsUpdateOne_webhookEndpointUpdate;
}

export interface GqlWebhookEndpointsUpdateOneVariables {
  id: any;
  data: IWebhookEndpointUpdate;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface IDassetsCheckoutSessionCreate {
  project: string;
  asset_info: IDassetsCheckoutSessionCreateAssetInfo;
}

export interface IDassetsCheckoutSessionCreateAssetInfo {
  id: string;
  name: string;
  description?: string | null;
  image_url?: string | null;
}

export interface IDassetsCheckoutSessionUpdate {
  address?: string | null;
  network?: string | null;
}

export interface IProjectCreate {
  name: string;
}

export interface IProjectDassetsSettingsUpdate {
  include_networks?: string[] | null;
  token_base_url?: string | null;
  webhook_events_url?: string | null;
}

export interface IProjectUpdate {
  name?: string | null;
  dassets_settings?: IProjectDassetsSettingsUpdate | null;
}

export interface IUserSignUp {
  email: string;
  password: string;
}

export interface IWebhookEndpointCreate {
  project: any;
  url?: string | null;
  key?: string | null;
}

export interface IWebhookEndpointUpdate {
  url?: string | null;
  key?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
