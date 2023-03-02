import { ProtoGrpcType } from '../application/config/proto/notes'
import { httpManager } from '../application/config/adapters/gRPC-adapter'

const proto = httpManager.loadproto<ProtoGrpcType>(`${ __dirname }../../../proto/notes.proto`)
const client = httpManager.client('127.0.0.1', 50051, proto.teste.Notes)

const result = async () => console.log(await client.ListAsync({}))

result()