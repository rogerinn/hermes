import { Server, Iloadproto, Istart, IaddService, Ihandlers, Iclient  } from "../protocols/index";

export interface IhttpManager {
    _server: Server
    _client: any, 
    _bindAsync: any,
    loadproto: Iloadproto
    addService: IaddService
    handlers: Ihandlers
    start: Istart, 
    client: Iclient,
}
