# Typeorm Composite Primary Key Test

A sample project to demonstrate the issue with latest [typeorm](https://github.com/typeorm/typeorm) version (`0.2.43`) where `entityManager.getId` returns `undefined` for custom join tables with lazy relations.

## Instructions

1. Clone the project and run `yarn`
1. Run `npx ts-node src/index.ts`

As can be seen in console output, `postCategoryId` is undefined
