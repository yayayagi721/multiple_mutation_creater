let id = '';
let dist = '';
let atDate = '';
const hogeMutaNonNull = { id: true, dist: false, atDate: false };

const hogeMuta = `    hoge(id: $id, dist: $dist, atDate: $atDate) {
    id
    name
    description
  }`;

let mutationStrs = hogeMuta;

let hogeValidate = '';

const combinedMutation = `mutation combinedMutation(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
${mutationStrs}
}`;

export function hoge() {
  console.log(combinedMutation);
}
