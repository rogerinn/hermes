import { hermes } from '../presentation'
import { ProtoGrpcType } from '../../proto/notes'
import { NoteListResponse } from '../../proto/teste/NoteListResponse'
import { NoteFindResponse } from '../../proto/teste/NoteFindResponse'
import { sendUnaryData } from '@grpc/grpc-js'

let notes = [ { id: 1, title: `1`, description: `a`}]

const handlers = ({
    List: (_: any, callback: sendUnaryData<NoteListResponse> ) => {
        return callback(null, { notes })
     },  
     Find: (call: any, callback: sendUnaryData<NoteFindResponse>) => {
         const _news: NoteFindResponse = { note: { id: call.request.id, title: 'teste', description: 'teste' }}
         return callback(null, _news)
     }
})

let proto = hermes.loadProto<ProtoGrpcType>(`${__dirname}../../../proto/notes.proto`)
hermes.addService(proto.teste.Notes.service, handlers) 
hermes.start()

