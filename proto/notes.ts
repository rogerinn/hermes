import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { NotesClient as _teste_NotesClient, NotesDefinition as _teste_NotesDefinition } from './teste/Notes';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  teste: {
    Empty: MessageTypeDefinition
    Note: MessageTypeDefinition
    NoteFindRequest: MessageTypeDefinition
    NoteFindResponse: MessageTypeDefinition
    NoteListResponse: MessageTypeDefinition
    Notes: SubtypeConstructor<typeof grpc.Client, _teste_NotesClient> & { service: _teste_NotesDefinition }
  }
}

