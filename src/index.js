import { createValidate } from './multiple_mutation_creator.js';
import { hoge } from './mutation.js';
('use strict');
// console.log(hogeMuta);
const hogeMutaNonNull = { id: true, dist: false, atDate: false };
const hogeMutaType = { id: 'ID', dist: 'Float', atDate: 'AWSDate' };
const sampleObj = {
  hoge: {
    mutationName: 'huga',
    input: {
      id: 'hogehoge',
      dist: 60,
      atDate: '2021-08-14',
    },
  },
};
let validateStr = '';
Object.keys(sampleObj.hoge.input).forEach((key) => {
  validateStr += createValidate(key, hogeMutaType[key], hogeMutaNonNull[key]);
  validateStr += '';
});

console.log(validateStr);
