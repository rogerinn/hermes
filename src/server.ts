import { loadPackageDefinition, Server, ServerCredentials, sendUnaryData } from 'grpc';
import { loadSync } from '@grpc/proto-loader'
import { ProtoGrpcType } from '../proto/notes'
import { NoteListResponse } from '../proto/teste/NoteListResponse'
import { NoteFindResponse } from '../proto/teste/NoteFindResponse'
import { NotesHandlers } from '../proto/teste/Notes';

const PROTO_PATH = `${__dirname}/../proto/notes.proto`;;
const packageDefinition = loadSync(PROTO_PATH);
const proto = (loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType);

const server = new Server();

let notes = [ { id: 1, title: `1`, description: `a`}]

const handlers: NotesHandlers = ({
    List: (_: any, callback: sendUnaryData<NoteListResponse>) =>  {
        return callback(null, { notes })
     },  
     Find: (call: any, callback: sendUnaryData<NoteFindResponse>) => {
         const _news: NoteFindResponse = { note: { id: call.request.id, title: 'teste', description: 'teste' }}
         callback(null, _news)
     }
})

const routers = { Find: handlers.Find, List: handlers.List }

server.addService(proto.teste.Notes.service, routers)

server.bind(`127.0.0.1:50051`, ServerCredentials.createInsecure())

server.start();

console.log('Running server')