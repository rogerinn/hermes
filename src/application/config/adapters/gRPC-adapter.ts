import { IhttpManager, loadSync, loadPackageDefinition, Server, ServerCredentials, UntypedServiceImplementation } from "../protocols"

export const httpManager: IhttpManager = { 
    _server: new Server(),

    loadproto: <Type>(path: string, args: any): Type => {
        const PROTO_PATH = `${path}`; 
        const packageDefinition = loadSync(PROTO_PATH);
        const proto = (loadPackageDefinition(packageDefinition) as unknown as typeof args);
        return proto
    },

    handlers: <UntypedServiceImplementation>(handler: UntypedServiceImplementation): any => {
        handler
    },

    addService: (proto: any, handlers: UntypedServiceImplementation): void => {
        httpManager._server.addService(proto, handlers)
    },

    start: (port?: number): void => {
        httpManager._server.bind(`127.0.0.1:${port || 50051}`, ServerCredentials.createInsecure()),
        httpManager._server.start(),
        console.log('Running server')
    }
}

