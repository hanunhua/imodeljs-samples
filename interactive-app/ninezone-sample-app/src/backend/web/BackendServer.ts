/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 - present Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
// tslint:disable:no-console
import { RpcInterfaceDefinition, BentleyCloudRpcManager } from "@bentley/imodeljs-common";
import { IModelJsExpressServer } from "@bentley/express-server";

/**
 * Initializes Web Server backend
 */
export default async function initialize(rpcs: RpcInterfaceDefinition[]) {
  // tell BentleyCloudRpcManager which RPC interfaces to handle
  const rpcConfig = BentleyCloudRpcManager.initializeImpl({ info: { title: "ninezone-sample-app", version: "v1.0" } }, rpcs);

  // create a basic express web server
  const port = Number(process.env.PORT || 3001);
  const server = new IModelJsExpressServer(rpcConfig.protocol);
  await server.initialize(port);
  console.log("RPC backend for ninezone-sample-app listening on port " + port);
}
