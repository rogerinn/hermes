import { IhttpManager, loadSync, loadPackageDefinition, 
        Server, ServerCredentials, UntypedServiceImplementation, promisify } from "../protocols"

export const httpManager: IhttpManager = { 
    _server: new Server(),
    _client: null,
    _bindAsync: () => promisify(httpManager._server.bindAsync).bind(httpManager._server),

    loadproto: <Type>(path: string): Type => (loadPackageDefinition(loadSync(`${path}`)) as unknown as Type),

    handlers: <UntypedServiceImplementation>(handler: UntypedServiceImplementation): any => {
        handler
    },

    addService: (proto: any, handlers: UntypedServiceImplementation): void => {
        httpManager._server.addService(proto, handlers)
    },

    start: async (port?: number): Promise<void> => {
        await httpManager._bindAsync()(`127.0.0.1:${port || 50051}`, ServerCredentials.createInsecure())
        httpManager._server.start(),
        console.log('Running server')
    }, 

    client: (ip: string, port: string, proto: any): any => {
        const client = new proto(`${ip}:${port}`)
        client.ChannelCredentials.createInsecure()
        httpManager._client = client;
    }
}

