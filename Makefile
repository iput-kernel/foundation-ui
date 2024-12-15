protoc \
  --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=./src/generated \
  --ts_proto_opt=esModuleInterop=true,env=node,outputServices=grpc-js \
  -I ./proto \
  ./proto/*.proto