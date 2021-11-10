// Original file: src/proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';

export interface UserServiceClient extends grpc.Client {
  CreateUser(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  CreateUser(argument: _user_User, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  CreateUser(argument: _user_User, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  CreateUser(argument: _user_User, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _user_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _user_User, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _user_User, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  createUser(argument: _user_User, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateUser: grpc.handleUnaryCall<_user_User__Output, _google_protobuf_Empty>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  CreateUser: MethodDefinition<_user_User, _google_protobuf_Empty, _user_User__Output, _google_protobuf_Empty__Output>
}
