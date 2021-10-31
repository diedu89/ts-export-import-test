import foo, { sayHello } from 'ts-exports-test';
import bar, { sayGoodBye } from 'ts-exports-test/module2';
console.log(foo, sayHello());
console.log(bar, sayGoodBye());