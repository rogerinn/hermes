import { Client } from "./index";

export interface Iclient { 
   (ip: string, port: string, proto: any): Client;
}