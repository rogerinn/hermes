import { Server, Iloadproto, Istart, IaddService, Ihandlers  } from "../protocols/index";

export interface IhttpManager {
    _server: Server
    loadproto: Iloadproto
    addService: IaddService
    handlers: Ihandlers
    start: Istart
}
