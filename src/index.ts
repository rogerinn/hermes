import { hermes } from './presentation/controller-server'

const Hermes = {
    addService: hermes.addService,
    loadProto: hermes.loadProto,
    start: hermes.start,
    client: hermes.client,
}

export { Hermes};

