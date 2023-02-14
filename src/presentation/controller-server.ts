import { httpManager } from '../application/config/adapters/gRPC-adapter'
import { Hermes } from './protocol/controller-protocol'

export const hermes: Hermes = ({ 
    loadProto: httpManager.loadproto,
    handlers: httpManager.handlers,
    addService: httpManager.addService, 
    start: httpManager.start,
    client: httpManager.client
})