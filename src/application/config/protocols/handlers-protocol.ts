import { UntypedServiceImplementation } from './index'

export interface Ihandlers { 
    <Type>(handlers:[Type]): UntypedServiceImplementation;
}