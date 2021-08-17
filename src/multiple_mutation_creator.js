import { MUTATION_NAME, QUERY_NAME, INDENT } from "./str-const";

// const afterSampleObj = {
//   operationName: "createHoge",
//   value: {
//     id: "hogehoge",
//     dist: 60,
//     atDate: "2021-08-14",
//   },
//   identification: {
//     operationKey: "huga1",
//     inputKey: "input1",
//   },
// };

export class MultipleGqlOperationBuilder {
  constructor(gqlOperationInfos, rootType) {
    this.gqlOperationInfos = {};
    gqlOperationInfos.forEach((info) => {
      this.gqlOperationInfos[info.operationName] = info;
    });
    this.rootType = rootType;
    this.inputs = [];
  }

  pushOperation(input) {
    this.inputs.push(input);
  }

  createMultipleOperations() {
    let validationStr = "";
    let operationStr = "";

    let processedInputs = this.inputs.map((input, i) => {
      const operationKey = `operation${i}`;
      const inputKey = `input${i}`;

      const identification = { operationKey: operationKey, inputKey: inputKey };

      return { ...input, identification };
    });

    console.log({ processedInputs });

    processedInputs.forEach((input, i) => {
      this.validationStr +=
        i > 0
          ? ", "
          : "" +
            this.#createValidate(
              input.identification.operationKey,
              this.gqlOperationInfos[input.operationName].argsInfo.inputType,
              this.gqlOperationInfos[input.operationName].argsInfo.isNonNull
            );

      this.operationStr += this.#createOperation(
        input.identification.inputKey,
        this.gqlOperationInfos[input.operationName].operationStr
      );
    });

    let rootName;
    if (this.rootType == "Mutation") {
      rootName = MUTATION_NAME;
    } else if (this.rootType == "Query") {
      rootName = QUERY_NAME;
    }

    return `${this.rootType} ${rootName}(${validationStr}) {
    ${operationStr}
    }
    `;
  }

  #createValidate(keyName, type, isNonNull) {
    const sign = isNonNull ? "!" : "";
    return INDENT + "$" + `${keyName}: ${type}${sign} `;
  }

  // eslint-disable-next-line no-dupe-class-members
  #createOperation(inputKey, operationStr) {
    const pattern = /\$.+[,)]/;
    return operationStr.replace(pattern, "$" + inputKey);
  }
}
