import { UntypedServiceImplementation } from './index'
export interface IaddService {
    (proto: any, handler: UntypedServiceImplementation): void;
}