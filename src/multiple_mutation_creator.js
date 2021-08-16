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

class MultipleGqlOperationBuilder {
  constructor(gqlOperationInfos, operationType) {
    this.gqlOperationInfos = gqlOperationInfos;
    this.operationType = operationType;
    this.validationStr = '';
  }

  putOperation(inputs) {
    inputs.forEach((key) => {
      this.validationStr += _createValidate(keyName, type, isNonNull) + ' ';
    });
  }

  build() {
    return;
  }

  _createValidate(keyName, type, isNonNull) {
    const sign = isNonNull ? '!' : '';
    return indent + '$' + `${keyName}: ${type}${sign} `;
  }
}

const indent = '';
let operationStrs = '';

export function createValidate(keyName, type, isNonNull) {
  const sign = isNonNull ? '!' : '';
  return indent + '$' + `${keyName}: ${type}${sign} `;
}
`mutation MultipleMutation (
  $input: PutHogeParameterInput!
) {

}
}`;

const operationStr = `hogeParameter(input: $input){
hogeId
hogeFrequency
}
`;

export const hoge = /* GraphQL */ `
  mutation CreateHoge($input: CreateHogeInput!, $input2: CreateHogeInput!) {
    hoge1: hoge(input: $input) {
      id
      name
      createdAt
      updatedAt
    }
    hoge2: hoge(input: $input2) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
