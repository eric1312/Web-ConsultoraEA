# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetUserData*](#getuserdata)
  - [*ListPublicData*](#listpublicdata)
- [**Mutations**](#mutations)
  - [*CreateAllData*](#createalldata)
  - [*UpdateAllData*](#updatealldata)
  - [*DeleteAllData*](#deletealldata)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetUserData
You can execute the `GetUserData` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserData(options?: ExecuteQueryOptions): QueryPromise<GetUserDataData, undefined>;

interface GetUserDataRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserDataData, undefined>;
}
export const getUserDataRef: GetUserDataRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserData(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetUserDataData, undefined>;

interface GetUserDataRef {
  ...
  (dc: DataConnect): QueryRef<GetUserDataData, undefined>;
}
export const getUserDataRef: GetUserDataRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserDataRef:
```typescript
const name = getUserDataRef.operationName;
console.log(name);
```

### Variables
The `GetUserData` query has no variables.
### Return Type
Recall that executing the `GetUserData` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserDataData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetUserData`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserData } from '@dataconnect/generated';


// Call the `getUserData()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserData();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserData(dataConnect);

console.log(data.profile);

// Or, you can use the `Promise` API.
getUserData().then((response) => {
  const data = response.data;
  console.log(data.profile);
});
```

### Using `GetUserData`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserDataRef } from '@dataconnect/generated';


// Call the `getUserDataRef()` function to get a reference to the query.
const ref = getUserDataRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserDataRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.profile);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.profile);
});
```

## ListPublicData
You can execute the `ListPublicData` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listPublicData(options?: ExecuteQueryOptions): QueryPromise<ListPublicDataData, undefined>;

interface ListPublicDataRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPublicDataData, undefined>;
}
export const listPublicDataRef: ListPublicDataRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPublicData(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListPublicDataData, undefined>;

interface ListPublicDataRef {
  ...
  (dc: DataConnect): QueryRef<ListPublicDataData, undefined>;
}
export const listPublicDataRef: ListPublicDataRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPublicDataRef:
```typescript
const name = listPublicDataRef.operationName;
console.log(name);
```

### Variables
The `ListPublicData` query has no variables.
### Return Type
Recall that executing the `ListPublicData` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPublicDataData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListPublicData`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPublicData } from '@dataconnect/generated';


// Call the `listPublicData()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPublicData();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPublicData(dataConnect);

console.log(data.projects);
console.log(data.categories);
console.log(data.services);

// Or, you can use the `Promise` API.
listPublicData().then((response) => {
  const data = response.data;
  console.log(data.projects);
  console.log(data.categories);
  console.log(data.services);
});
```

### Using `ListPublicData`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPublicDataRef } from '@dataconnect/generated';


// Call the `listPublicDataRef()` function to get a reference to the query.
const ref = listPublicDataRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPublicDataRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.projects);
console.log(data.categories);
console.log(data.services);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.projects);
  console.log(data.categories);
  console.log(data.services);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateAllData
You can execute the `CreateAllData` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createAllData(): MutationPromise<CreateAllDataData, undefined>;

interface CreateAllDataRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateAllDataData, undefined>;
}
export const createAllDataRef: CreateAllDataRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createAllData(dc: DataConnect): MutationPromise<CreateAllDataData, undefined>;

interface CreateAllDataRef {
  ...
  (dc: DataConnect): MutationRef<CreateAllDataData, undefined>;
}
export const createAllDataRef: CreateAllDataRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createAllDataRef:
```typescript
const name = createAllDataRef.operationName;
console.log(name);
```

### Variables
The `CreateAllData` mutation has no variables.
### Return Type
Recall that executing the `CreateAllData` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateAllDataData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateAllDataData {
  profile_insert: Profile_Key;
  project_insert: Project_Key;
  service_insert: Service_Key;
  category_insert: Category_Key;
  lead_insert: Lead_Key;
}
```
### Using `CreateAllData`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createAllData } from '@dataconnect/generated';


// Call the `createAllData()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createAllData();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createAllData(dataConnect);

console.log(data.profile_insert);
console.log(data.project_insert);
console.log(data.service_insert);
console.log(data.category_insert);
console.log(data.lead_insert);

// Or, you can use the `Promise` API.
createAllData().then((response) => {
  const data = response.data;
  console.log(data.profile_insert);
  console.log(data.project_insert);
  console.log(data.service_insert);
  console.log(data.category_insert);
  console.log(data.lead_insert);
});
```

### Using `CreateAllData`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createAllDataRef } from '@dataconnect/generated';


// Call the `createAllDataRef()` function to get a reference to the mutation.
const ref = createAllDataRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createAllDataRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.profile_insert);
console.log(data.project_insert);
console.log(data.service_insert);
console.log(data.category_insert);
console.log(data.lead_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.profile_insert);
  console.log(data.project_insert);
  console.log(data.service_insert);
  console.log(data.category_insert);
  console.log(data.lead_insert);
});
```

## UpdateAllData
You can execute the `UpdateAllData` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateAllData(vars: UpdateAllDataVariables): MutationPromise<UpdateAllDataData, UpdateAllDataVariables>;

interface UpdateAllDataRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateAllDataVariables): MutationRef<UpdateAllDataData, UpdateAllDataVariables>;
}
export const updateAllDataRef: UpdateAllDataRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateAllData(dc: DataConnect, vars: UpdateAllDataVariables): MutationPromise<UpdateAllDataData, UpdateAllDataVariables>;

interface UpdateAllDataRef {
  ...
  (dc: DataConnect, vars: UpdateAllDataVariables): MutationRef<UpdateAllDataData, UpdateAllDataVariables>;
}
export const updateAllDataRef: UpdateAllDataRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateAllDataRef:
```typescript
const name = updateAllDataRef.operationName;
console.log(name);
```

### Variables
The `UpdateAllData` mutation requires an argument of type `UpdateAllDataVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateAllDataVariables {
  projectId: UUIDString;
  leadId: UUIDString;
  serviceId: UUIDString;
}
```
### Return Type
Recall that executing the `UpdateAllData` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateAllDataData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateAllDataData {
  project_update?: Project_Key | null;
  lead_update?: Lead_Key | null;
  service_update?: Service_Key | null;
}
```
### Using `UpdateAllData`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateAllData, UpdateAllDataVariables } from '@dataconnect/generated';

// The `UpdateAllData` mutation requires an argument of type `UpdateAllDataVariables`:
const updateAllDataVars: UpdateAllDataVariables = {
  projectId: ..., 
  leadId: ..., 
  serviceId: ..., 
};

// Call the `updateAllData()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateAllData(updateAllDataVars);
// Variables can be defined inline as well.
const { data } = await updateAllData({ projectId: ..., leadId: ..., serviceId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateAllData(dataConnect, updateAllDataVars);

console.log(data.project_update);
console.log(data.lead_update);
console.log(data.service_update);

// Or, you can use the `Promise` API.
updateAllData(updateAllDataVars).then((response) => {
  const data = response.data;
  console.log(data.project_update);
  console.log(data.lead_update);
  console.log(data.service_update);
});
```

### Using `UpdateAllData`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateAllDataRef, UpdateAllDataVariables } from '@dataconnect/generated';

// The `UpdateAllData` mutation requires an argument of type `UpdateAllDataVariables`:
const updateAllDataVars: UpdateAllDataVariables = {
  projectId: ..., 
  leadId: ..., 
  serviceId: ..., 
};

// Call the `updateAllDataRef()` function to get a reference to the mutation.
const ref = updateAllDataRef(updateAllDataVars);
// Variables can be defined inline as well.
const ref = updateAllDataRef({ projectId: ..., leadId: ..., serviceId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateAllDataRef(dataConnect, updateAllDataVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.project_update);
console.log(data.lead_update);
console.log(data.service_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.project_update);
  console.log(data.lead_update);
  console.log(data.service_update);
});
```

## DeleteAllData
You can execute the `DeleteAllData` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteAllData(vars: DeleteAllDataVariables): MutationPromise<DeleteAllDataData, DeleteAllDataVariables>;

interface DeleteAllDataRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteAllDataVariables): MutationRef<DeleteAllDataData, DeleteAllDataVariables>;
}
export const deleteAllDataRef: DeleteAllDataRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteAllData(dc: DataConnect, vars: DeleteAllDataVariables): MutationPromise<DeleteAllDataData, DeleteAllDataVariables>;

interface DeleteAllDataRef {
  ...
  (dc: DataConnect, vars: DeleteAllDataVariables): MutationRef<DeleteAllDataData, DeleteAllDataVariables>;
}
export const deleteAllDataRef: DeleteAllDataRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteAllDataRef:
```typescript
const name = deleteAllDataRef.operationName;
console.log(name);
```

### Variables
The `DeleteAllData` mutation requires an argument of type `DeleteAllDataVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteAllDataVariables {
  projectId: UUIDString;
  leadId: UUIDString;
  serviceId: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteAllData` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteAllDataData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteAllDataData {
  project_delete?: Project_Key | null;
  lead_delete?: Lead_Key | null;
  service_delete?: Service_Key | null;
}
```
### Using `DeleteAllData`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteAllData, DeleteAllDataVariables } from '@dataconnect/generated';

// The `DeleteAllData` mutation requires an argument of type `DeleteAllDataVariables`:
const deleteAllDataVars: DeleteAllDataVariables = {
  projectId: ..., 
  leadId: ..., 
  serviceId: ..., 
};

// Call the `deleteAllData()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteAllData(deleteAllDataVars);
// Variables can be defined inline as well.
const { data } = await deleteAllData({ projectId: ..., leadId: ..., serviceId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteAllData(dataConnect, deleteAllDataVars);

console.log(data.project_delete);
console.log(data.lead_delete);
console.log(data.service_delete);

// Or, you can use the `Promise` API.
deleteAllData(deleteAllDataVars).then((response) => {
  const data = response.data;
  console.log(data.project_delete);
  console.log(data.lead_delete);
  console.log(data.service_delete);
});
```

### Using `DeleteAllData`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteAllDataRef, DeleteAllDataVariables } from '@dataconnect/generated';

// The `DeleteAllData` mutation requires an argument of type `DeleteAllDataVariables`:
const deleteAllDataVars: DeleteAllDataVariables = {
  projectId: ..., 
  leadId: ..., 
  serviceId: ..., 
};

// Call the `deleteAllDataRef()` function to get a reference to the mutation.
const ref = deleteAllDataRef(deleteAllDataVars);
// Variables can be defined inline as well.
const ref = deleteAllDataRef({ projectId: ..., leadId: ..., serviceId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteAllDataRef(dataConnect, deleteAllDataVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.project_delete);
console.log(data.lead_delete);
console.log(data.service_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.project_delete);
  console.log(data.lead_delete);
  console.log(data.service_delete);
});
```

