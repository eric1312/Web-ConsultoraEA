import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Category_Key {
  id: UUIDString;
  __typename?: 'Category_Key';
}

export interface CreateAllDataData {
  profile_insert: Profile_Key;
  project_insert: Project_Key;
  service_insert: Service_Key;
  category_insert: Category_Key;
  lead_insert: Lead_Key;
}

export interface DeleteAllDataData {
  project_delete?: Project_Key | null;
  lead_delete?: Lead_Key | null;
  service_delete?: Service_Key | null;
}

export interface DeleteAllDataVariables {
  projectId: UUIDString;
  leadId: UUIDString;
  serviceId: UUIDString;
}

export interface GetUserDataData {
  profile?: {
    fullName: string;
    email: string;
    projects_on_profile: ({
      title: string;
      status: string;
    })[];
    services_on_profile: ({
      name: string;
      priceRange: string;
    })[];
  };
}

export interface Lead_Key {
  id: UUIDString;
  __typename?: 'Lead_Key';
}

export interface ListPublicDataData {
  projects: ({
    title: string;
    description: string;
    imageUrl: string;
  })[];
  categories: ({
    name: string;
  })[];
  services: ({
    name: string;
    description: string;
    priceRange: string;
  })[];
}

export interface Profile_Key {
  id: UUIDString;
  __typename?: 'Profile_Key';
}

export interface ProjectCategory_Key {
  projectId: UUIDString;
  categoryId: UUIDString;
  __typename?: 'ProjectCategory_Key';
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface Service_Key {
  id: UUIDString;
  __typename?: 'Service_Key';
}

export interface UpdateAllDataData {
  project_update?: Project_Key | null;
  lead_update?: Lead_Key | null;
  service_update?: Service_Key | null;
}

export interface UpdateAllDataVariables {
  projectId: UUIDString;
  leadId: UUIDString;
  serviceId: UUIDString;
}

interface CreateAllDataRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateAllDataData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateAllDataData, undefined>;
  operationName: string;
}
export const createAllDataRef: CreateAllDataRef;

export function createAllData(): MutationPromise<CreateAllDataData, undefined>;
export function createAllData(dc: DataConnect): MutationPromise<CreateAllDataData, undefined>;

interface UpdateAllDataRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateAllDataVariables): MutationRef<UpdateAllDataData, UpdateAllDataVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateAllDataVariables): MutationRef<UpdateAllDataData, UpdateAllDataVariables>;
  operationName: string;
}
export const updateAllDataRef: UpdateAllDataRef;

export function updateAllData(vars: UpdateAllDataVariables): MutationPromise<UpdateAllDataData, UpdateAllDataVariables>;
export function updateAllData(dc: DataConnect, vars: UpdateAllDataVariables): MutationPromise<UpdateAllDataData, UpdateAllDataVariables>;

interface DeleteAllDataRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteAllDataVariables): MutationRef<DeleteAllDataData, DeleteAllDataVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteAllDataVariables): MutationRef<DeleteAllDataData, DeleteAllDataVariables>;
  operationName: string;
}
export const deleteAllDataRef: DeleteAllDataRef;

export function deleteAllData(vars: DeleteAllDataVariables): MutationPromise<DeleteAllDataData, DeleteAllDataVariables>;
export function deleteAllData(dc: DataConnect, vars: DeleteAllDataVariables): MutationPromise<DeleteAllDataData, DeleteAllDataVariables>;

interface GetUserDataRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserDataData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserDataData, undefined>;
  operationName: string;
}
export const getUserDataRef: GetUserDataRef;

export function getUserData(options?: ExecuteQueryOptions): QueryPromise<GetUserDataData, undefined>;
export function getUserData(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetUserDataData, undefined>;

interface ListPublicDataRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPublicDataData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListPublicDataData, undefined>;
  operationName: string;
}
export const listPublicDataRef: ListPublicDataRef;

export function listPublicData(options?: ExecuteQueryOptions): QueryPromise<ListPublicDataData, undefined>;
export function listPublicData(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListPublicDataData, undefined>;

