const orderString =
  "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

const OPERATIONS = {
  INCREASE: "#",
  DECREASE: "@",
  MULTIPLY: "*",
  PRINT: "&",
};

// "#" Incrementa el valor numérico en 1.
// "@" Decrementa el valor numérico en 1.
// "*" Multiplica el valor numérico por sí mismo.
// "&" Imprime el valor numérico actual.

function myCompiler(o) {
  let start = 0;
  let imprint = [];
  o.split("").forEach((order) => {
    if (order === OPERATIONS.INCREASE) return start++;
    if (order === OPERATIONS.DECREASE) return start--;
    if (order === OPERATIONS.MULTIPLY) return (start = start * start);
    if (order === OPERATIONS.PRINT) return imprint.push(start);
  });

  return imprint.join("");
}

console.log(myCompiler(orderString));
