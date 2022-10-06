import { convert } from './converter';

// const tester = '⿱A⿰⿵CD⿴⿵CDE';
// const tester = '⿰⿱卯金刂';
const tester = '⿱A⿰B⿴⿵CD⿷EF';
// const tester = '⿱⿱ABC';
// const tester = '⿱⿱AB⿲DEF';
console.log(JSON.stringify(convert(tester), null, 2));
