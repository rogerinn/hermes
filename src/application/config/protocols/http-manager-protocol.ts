import { UntypedServiceImplementation, Server } from "../protocols/index";

export interface IhttpManager {
    _server: Server
    loadproto: Iloadproto
    addService: IaddService
    handlers: Ihandlers
    start: Istart
}

interface Iloadproto {
    <Type>(path: string, arg: any): Type
}

interface Istart { 
    (port?: number): void;
}

interface IaddService {
    (proto: any, handler: UntypedServiceImplementation): void;
}

interface Ihandlers { 
    <Type>(handlers:[Type]): UntypedServiceImplementation;
}