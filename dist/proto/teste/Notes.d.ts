import type * as grpc from 'grpc';
import type { MethodDefinition } from '@grpc/proto-loader';
import type { Empty as _teste_Empty, Empty__Output as _teste_Empty__Output } from '../teste/Empty';
import type { NoteFindRequest as _teste_NoteFindRequest, NoteFindRequest__Output as _teste_NoteFindRequest__Output } from '../teste/NoteFindRequest';
import type { NoteFindResponse as _teste_NoteFindResponse, NoteFindResponse__Output as _teste_NoteFindResponse__Output } from '../teste/NoteFindResponse';
import type { NoteListResponse as _teste_NoteListResponse, NoteListResponse__Output as _teste_NoteListResponse__Output } from '../teste/NoteListResponse';
export interface NotesClient extends grpc.Client {
    Find(argument: _teste_NoteFindRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_teste_NoteFindResponse__Output>): grpc.ClientUnaryCall;
    Find(argument: _teste_NoteFindRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_teste_NoteFindResponse__Output>): grpc.ClientUnaryCall;
    Find(argument: _teste_NoteFindRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_teste_NoteFindResponse__Output>): grpc.ClientUnaryCall;
    Find(argument: _teste_NoteFindRequest, callback: grpc.requestCallback<_teste_NoteFindResponse__Output>): grpc.ClientUnaryCall;
    find(argument: _teste_NoteFindRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_teste_NoteFindResponse__Output>): grpc.ClientUnaryCall;
    find(argument: _teste_NoteFindRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_teste_NoteFindResponse__Output>): grpc.ClientUnaryCall;
    find(argument: _teste_NoteFindRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_teste_NoteFindResponse__Output>): grpc.ClientUnaryCall;
    find(argument: _teste_NoteFindRequest, callback: grpc.requestCallback<_teste_NoteFindResponse__Output>): grpc.ClientUnaryCall;
    List(argument: _teste_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_teste_NoteListResponse__Output>): grpc.ClientUnaryCall;
    List(argument: _teste_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_teste_NoteListResponse__Output>): grpc.ClientUnaryCall;
    List(argument: _teste_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_teste_NoteListResponse__Output>): grpc.ClientUnaryCall;
    List(argument: _teste_Empty, callback: grpc.requestCallback<_teste_NoteListResponse__Output>): grpc.ClientUnaryCall;
    list(argument: _teste_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_teste_NoteListResponse__Output>): grpc.ClientUnaryCall;
    list(argument: _teste_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_teste_NoteListResponse__Output>): grpc.ClientUnaryCall;
    list(argument: _teste_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_teste_NoteListResponse__Output>): grpc.ClientUnaryCall;
    list(argument: _teste_Empty, callback: grpc.requestCallback<_teste_NoteListResponse__Output>): grpc.ClientUnaryCall;
}
export interface NotesHandlers extends grpc.UntypedServiceImplementation {
    Find: grpc.handleUnaryCall<_teste_NoteFindRequest__Output, _teste_NoteFindResponse>;
    List: grpc.handleUnaryCall<_teste_Empty__Output, _teste_NoteListResponse>;
}
export interface NotesDefinition extends grpc.ServiceDefinition {
    Find: MethodDefinition<_teste_NoteFindRequest, _teste_NoteFindResponse, _teste_NoteFindRequest__Output, _teste_NoteFindResponse__Output>;
    List: MethodDefinition<_teste_Empty, _teste_NoteListResponse, _teste_Empty__Output, _teste_NoteListResponse__Output>;
}
//# sourceMappingURL=Notes.d.ts.map