import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { ProtoGrpcType } from './proto/pb/user';

const packageDefinition = protoLoader.loadSync(path.resolve(__dirname, 'proto', 'user.proto'));
const proto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;
const client = new proto.user.UserService('localhost:50051', grpc.credentials.createInsecure());

client.CreateUser({
  name: 'any name',
  email: 'any email',
  password: 'any password',
}, (err, res,) => {
  console.log('Error:', err);
  console.log('Response:', res);
});
