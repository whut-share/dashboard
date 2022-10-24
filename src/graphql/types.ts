/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GqlProjectsCreate
// ====================================================

export interface GqlProjectsCreate_projectsCreate_dassets {
  __typename: "ProjectDassetsData";
  include_networks: string[];
  token_base_url: string | null;
  webhook_events_url: string | null;
}

export interface GqlProjectsCreate_projectsCreate {
  __typename: "Project";
  id: string;
  name: string;
  dassets: GqlProjectsCreate_projectsCreate_dassets;
}

export interface GqlProjectsCreate {
  projectsCreate: GqlProjectsCreate_projectsCreate;
}

export interface GqlProjectsCreateVariables {
  data: IProjectsCreate;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GqlProjectsGet
// ====================================================

export interface GqlProjectsGet_project_dassets {
  __typename: "ProjectDassetsData";
  include_networks: string[];
  token_base_url: string | null;
  webhook_events_url: string | null;
}

export interface GqlProjectsGet_project {
  __typename: "Project";
  id: string;
  name: string;
  dassets: GqlProjectsGet_project_dassets;
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

export interface GqlProjectsSelect_projects_dassets {
  __typename: "ProjectDassetsData";
  include_networks: string[];
  token_base_url: string | null;
  webhook_events_url: string | null;
}

export interface GqlProjectsSelect_projects {
  __typename: "Project";
  id: string;
  name: string;
  dassets: GqlProjectsSelect_projects_dassets;
}

export interface GqlProjectsSelect {
  projects: GqlProjectsSelect_projects[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GqlProjectsUpdate
// ====================================================

export interface GqlProjectsUpdate_projectsUpdate_dassets {
  __typename: "ProjectDassetsData";
  include_networks: string[];
  token_base_url: string | null;
  webhook_events_url: string | null;
}

export interface GqlProjectsUpdate_projectsUpdate {
  __typename: "Project";
  id: string;
  name: string;
  dassets: GqlProjectsUpdate_projectsUpdate_dassets;
}

export interface GqlProjectsUpdate {
  projectsUpdate: GqlProjectsUpdate_projectsUpdate;
}

export interface GqlProjectsUpdateVariables {
  id: any;
  data: IProjectsUpdate;
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

export interface GqlUsersSignUp_usersSignUp {
  __typename: "User";
  id: any;
  email: string;
}

export interface GqlUsersSignUp {
  usersSignUp: GqlUsersSignUp_usersSignUp;
}

export interface GqlUsersSignUpVariables {
  data: IUsersSignUp;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface IProjectsCreate {
  name: string;
}

export interface IProjectsDassetsDataUpdate {
  include_networks?: string[] | null;
  token_base_url?: string | null;
  webhook_events_url?: string | null;
}

export interface IProjectsUpdate {
  name?: string | null;
  dassets?: IProjectsDassetsDataUpdate | null;
}

export interface IUsersSignUp {
  email: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
