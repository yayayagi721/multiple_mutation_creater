export class GqlOperationInfo {
  constructor(argsInfo, operationStr) {
    this._argsInfo = argsInfo;
    this._operationStr = operationStr;
  }

  get argsInfo() {
    return this.argsInfo;
  }

  get operationStr() {
    return this.operationStr;
  }
}
