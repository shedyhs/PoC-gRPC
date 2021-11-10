import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { ProtoGrpcType } from './proto/pb/user';
import { UserServiceHandlers } from './proto/pb/user/UserService';

const userServiceHandler : UserServiceHandlers = {
  CreateUser: async (call, callback) => {
    const user = call.request;
    console.log(user);
    callback(null, {});
  }
}

const packageDefinition = protoLoader.loadSync(path.resolve(__dirname, 'proto', 'user.proto'));
const packageObject = (grpc.loadPackageDefinition(packageDefinition
) as unknown) as ProtoGrpcType;

const server = new grpc.Server();

server.addService(packageObject.user.UserService.service, userServiceHandler);

server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`🚀 Server running on port ${port}`);
  server.start();
});


