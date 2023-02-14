import { Server, Iloadproto, Istart, IaddService, Ihandlers, Iclient } from "../protocols/index";
export interface IhttpManager {
    _server: Server;
    _client: any;
    loadproto: Iloadproto;
    addService: IaddService;
    handlers: Ihandlers;
    start: Istart;
    client: Iclient;
}
//# sourceMappingURL=http-manager-protocol.d.ts.map