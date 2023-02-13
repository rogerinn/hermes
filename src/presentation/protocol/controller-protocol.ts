import { Iloadproto, Ihandlers, IaddService, Istart, Iclient } from '../../application/config/protocols/index'

export interface Hermes {
    loadProto: Iloadproto
    handlers: Ihandlers
    addService: IaddService
    start: Istart
    client: Iclient
}

