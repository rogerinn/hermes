import { Iloadproto, Ihandlers, IaddService, Istart } from '../../application/config/protocols/index'

export interface Hermes {
    loadProto: Iloadproto
    handlers: Ihandlers
    addService: IaddService
    start: Istart
}

