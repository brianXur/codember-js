const orderString: string =
  "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

enum OPERATIONS {
  INCREASE = "#",
  DECREASE = "@",
  MULTIPLY = "*",
  PRINT = "&",
}

// "#" Incrementa el valor numérico en 1.
// "@" Decrementa el valor numérico en 1.
// "*" Multiplica el valor numérico por sí mismo.
// "&" Imprime el valor numérico actual.

function myCompiler(o: string) {
  let start = 0;
  let imprint = "";
  o.split("").forEach((order) => {
    if (order === OPERATIONS.INCREASE) return start++;
    if (order === OPERATIONS.DECREASE) return start--;
    if (order === OPERATIONS.MULTIPLY) return (start *= start);
    if (order === OPERATIONS.PRINT) return (imprint += start);
  });

  return imprint;
}

console.log(myCompiler(orderString));
