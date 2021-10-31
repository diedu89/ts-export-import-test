# Steps to test

- go to ts-exports-test 
- run `npm i` 
- run `npm run prepublish` 
- run `npm link` 

- go to ts-import-test 
- run `npm i` 
- run `npm link ts-exports-test` 
- run `npx ts-node index.ts` 
