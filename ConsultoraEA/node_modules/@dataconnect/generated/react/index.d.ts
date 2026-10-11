import { CreateAllDataData, UpdateAllDataData, UpdateAllDataVariables, DeleteAllDataData, DeleteAllDataVariables, GetUserDataData, ListPublicDataData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateAllData(options?: useDataConnectMutationOptions<CreateAllDataData, FirebaseError, void>): UseDataConnectMutationResult<CreateAllDataData, undefined>;
export function useCreateAllData(dc: DataConnect, options?: useDataConnectMutationOptions<CreateAllDataData, FirebaseError, void>): UseDataConnectMutationResult<CreateAllDataData, undefined>;

export function useUpdateAllData(options?: useDataConnectMutationOptions<UpdateAllDataData, FirebaseError, UpdateAllDataVariables>): UseDataConnectMutationResult<UpdateAllDataData, UpdateAllDataVariables>;
export function useUpdateAllData(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateAllDataData, FirebaseError, UpdateAllDataVariables>): UseDataConnectMutationResult<UpdateAllDataData, UpdateAllDataVariables>;

export function useDeleteAllData(options?: useDataConnectMutationOptions<DeleteAllDataData, FirebaseError, DeleteAllDataVariables>): UseDataConnectMutationResult<DeleteAllDataData, DeleteAllDataVariables>;
export function useDeleteAllData(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteAllDataData, FirebaseError, DeleteAllDataVariables>): UseDataConnectMutationResult<DeleteAllDataData, DeleteAllDataVariables>;

export function useGetUserData(options?: useDataConnectQueryOptions<GetUserDataData>): UseDataConnectQueryResult<GetUserDataData, undefined>;
export function useGetUserData(dc: DataConnect, options?: useDataConnectQueryOptions<GetUserDataData>): UseDataConnectQueryResult<GetUserDataData, undefined>;

export function useListPublicData(options?: useDataConnectQueryOptions<ListPublicDataData>): UseDataConnectQueryResult<ListPublicDataData, undefined>;
export function useListPublicData(dc: DataConnect, options?: useDataConnectQueryOptions<ListPublicDataData>): UseDataConnectQueryResult<ListPublicDataData, undefined>;
