# GraphQl Sever and clients

## Server

A GraphQl server with dummy data using [apollo-server](https://github.com/apollographql/apollo-server).

**Run**

Install the dependencies and start the node server from the backend folder

```
yarn && yarn start
```

## Apollo client

A ReactJs application using the [apollo client](https://github.com/apollographql/apollo-client).

**Run**

Install the dependencies and start the node server from the gql-apollo-client folder

```
yarn && yarn start
```

## Relay client

A ReactJs application using [relay](https://github.com/facebook/relay).

**Run**

Install the dependencies and start the node server from the gql-relay folder

```
yarn && yarn start
```

## Considerations

Apollo client is a way easier to implement in this very simple application and it's technology agnostic, has hooks support which help to create a query or mutation in an ewasy way. It has also a lot of not explored features in this PoC that can be implemented gradually.

In the other hand, Relay is a bit more complex to implement, you need to match the file name with the queries/mutation body contend to be able to generate the fragments (through the CLI). But it works very well, seems to be powerfull and maybe fits better in large applications.
