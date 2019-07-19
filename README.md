Twitterish GraphQL example
===

[![License: MIT][license]](https://opensource.org/licenses/MIT)
[![build status][circleci-image]][circleci-url]
![typescript-image](https://img.shields.io/badge/TypeScript-294E80.svg?style=for-the-badge&logo=typescript)
![supports Node.js][node-version]
![react-image](https://img.shields.io/badge/-React-555.svg?logo=react&style=for-the-badge)
[![code style: prettier][prettier-image]][prettier-url]


 The purpose of this project is to learn the followings.

- How to use GraphQL API on the Web front-end
  - How to use GraphQL client
  - How to develop GraphQL client with TypeScript
  - To investigate the effective GraphQL client development workflow
- How to integrate React and GraphQL


## Prerequisites

```bash
$ node -v
v10.16.x

$ npm -v
6.9.x
```

## Development

- Install dependencies

```bash
$ npm i
```

- Start mock GraphQL server
  - You can use GraphiQL on `http://localhost:3033/graphql`.

```bash
$ npm start
```

- Watch to build front-end code

```bash
$ npm run watch:build
```

- Format code

```bash
$ npm run prettier
```

- Run unit testing

```bash
$ npm test
```

### GraphQL client workflow

- How to create a GraphQL client for a new query/mutation.
  - (Optional) Write source fragments which you use in your GraphQL operations like `src/infra/twitter/graphql/src/fragment/Tweet.graphql`.
    - You can re-use these source fragments in another operations if you want to.
  - Write a source GraphQL document like `src/infra/twitter/graphql/src/GetTweets.graphql`.
    - If you have already defined fragments which your operations need in `src/infra/twitter/graphql/src/fragment` directory, you don't have write fragment definitions on your operations because `graphql-concat` will concatnate those fragments and source GraphQL documents.
  - Create the valid GraphQL documents from your source GraphQL documents with `npm run gql:cat`.
    - You will get the valid GraphQL documents as TypeScript variables in `src/infra/twitter/graphql/dist`.
  - Generate TypeSript type definition file for GraphQL operations with `npm run gql:gen`.
    - You will get a definition file in `src/infra/twitter/DefinitionTypes.ts`.
  - Write a GraphQL client module like `src/infra/twitter/getTweets.ts`.
  - Write unit test cases for the GraphQL client module like `src/infra/twitter/getTweets.spec.ts`.

## References

- [GraphQL spec](https://graphql.github.io/graphql-spec/)
- [Facebook GraphQL Relay Cursor Connections Specification](https://facebook.github.io/relay/graphql/connections.htm)
- [GraphQL Clients docs](https://graphql.org/graphql-js/graphql-clients/)
- [Apollo Client docs](https://www.apollographql.com/docs/react/api/apollo-client/)
- [GraphQL code generator](https://graphql-code-generator.com/)


[license]: https://img.shields.io/badge/licence-MIT-blue.svg?style=for-the-badge
[node-version]: https://img.shields.io/badge/Node.js%20support-v10,v12-brightgreen.svg?icon=node-dot-js&style=for-the-badge
[circleci-image]: https://img.shields.io/badge/build-circleci-brightgreen.svg?icon=circleci&style=for-the-badge
[circleci-url]: https://circleci.com/gh/rkaneko/twitterish-graphql-example
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge
[prettier-url]: https://github.com/prettier/prettier
