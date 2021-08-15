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

const indent = '';

export function hoge() {
  console.log(sampleObj);
}

export function createValidate(keyName, type, isNonNull) {
  const sign = isNonNull ? '!' : '';
  return indent + '$' + `${keyName}: ${type}${sign}`;
}
