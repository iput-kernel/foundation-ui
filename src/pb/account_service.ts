// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.0
//   protoc               v5.28.3
// source: account_service.proto

/* eslint-disable */
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { CreateUserRequest, CreateUserResponse } from "./create_user";
import { LoginRequest, LoginResponse } from "./login";
import { Empty, GetPublicKeyResponse } from "./public_key";
import { RenewAccessTokenRequest, RenewAccessTokenResponse } from "./renew_access_token";
import { VerifyEmailRequest, VerifyEmailResponse } from "./verify_email";

export const protobufPackage = "pb";

export type AccountServiceService = typeof AccountServiceService;
export const AccountServiceService = {
  getPublicKey: {
    path: "/pb.AccountService/GetPublicKey",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: GetPublicKeyResponse) => Buffer.from(GetPublicKeyResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetPublicKeyResponse.decode(value),
  },
  createUser: {
    path: "/pb.AccountService/CreateUser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateUserRequest) => Buffer.from(CreateUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateUserRequest.decode(value),
    responseSerialize: (value: CreateUserResponse) => Buffer.from(CreateUserResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateUserResponse.decode(value),
  },
  verifyEmail: {
    path: "/pb.AccountService/VerifyEmail",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: VerifyEmailRequest) => Buffer.from(VerifyEmailRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => VerifyEmailRequest.decode(value),
    responseSerialize: (value: VerifyEmailResponse) => Buffer.from(VerifyEmailResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => VerifyEmailResponse.decode(value),
  },
  login: {
    path: "/pb.AccountService/Login",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LoginRequest) => Buffer.from(LoginRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LoginRequest.decode(value),
    responseSerialize: (value: LoginResponse) => Buffer.from(LoginResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LoginResponse.decode(value),
  },
  renewAccessToken: {
    path: "/pb.AccountService/RenewAccessToken",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RenewAccessTokenRequest) => Buffer.from(RenewAccessTokenRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RenewAccessTokenRequest.decode(value),
    responseSerialize: (value: RenewAccessTokenResponse) =>
      Buffer.from(RenewAccessTokenResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RenewAccessTokenResponse.decode(value),
  },
} as const;

export interface AccountServiceServer extends UntypedServiceImplementation {
  getPublicKey: handleUnaryCall<Empty, GetPublicKeyResponse>;
  createUser: handleUnaryCall<CreateUserRequest, CreateUserResponse>;
  verifyEmail: handleUnaryCall<VerifyEmailRequest, VerifyEmailResponse>;
  login: handleUnaryCall<LoginRequest, LoginResponse>;
  renewAccessToken: handleUnaryCall<RenewAccessTokenRequest, RenewAccessTokenResponse>;
}

export interface AccountServiceClient extends Client {
  getPublicKey(
    request: Empty,
    callback: (error: ServiceError | null, response: GetPublicKeyResponse) => void,
  ): ClientUnaryCall;
  getPublicKey(
    request: Empty,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetPublicKeyResponse) => void,
  ): ClientUnaryCall;
  getPublicKey(
    request: Empty,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetPublicKeyResponse) => void,
  ): ClientUnaryCall;
  createUser(
    request: CreateUserRequest,
    callback: (error: ServiceError | null, response: CreateUserResponse) => void,
  ): ClientUnaryCall;
  createUser(
    request: CreateUserRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateUserResponse) => void,
  ): ClientUnaryCall;
  createUser(
    request: CreateUserRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateUserResponse) => void,
  ): ClientUnaryCall;
  verifyEmail(
    request: VerifyEmailRequest,
    callback: (error: ServiceError | null, response: VerifyEmailResponse) => void,
  ): ClientUnaryCall;
  verifyEmail(
    request: VerifyEmailRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: VerifyEmailResponse) => void,
  ): ClientUnaryCall;
  verifyEmail(
    request: VerifyEmailRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: VerifyEmailResponse) => void,
  ): ClientUnaryCall;
  login(
    request: LoginRequest,
    callback: (error: ServiceError | null, response: LoginResponse) => void,
  ): ClientUnaryCall;
  login(
    request: LoginRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LoginResponse) => void,
  ): ClientUnaryCall;
  login(
    request: LoginRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LoginResponse) => void,
  ): ClientUnaryCall;
  renewAccessToken(
    request: RenewAccessTokenRequest,
    callback: (error: ServiceError | null, response: RenewAccessTokenResponse) => void,
  ): ClientUnaryCall;
  renewAccessToken(
    request: RenewAccessTokenRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RenewAccessTokenResponse) => void,
  ): ClientUnaryCall;
  renewAccessToken(
    request: RenewAccessTokenRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RenewAccessTokenResponse) => void,
  ): ClientUnaryCall;
}

export const AccountServiceClient = makeGenericClientConstructor(
  AccountServiceService,
  "pb.AccountService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AccountServiceClient;
  service: typeof AccountServiceService;
  serviceName: string;
};