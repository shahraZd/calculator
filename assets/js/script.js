let result = document.querySelector(".result");
let btn = document.querySelectorAll(".calc-btn");
let fct = document.querySelectorAll(".fct");
let nbr = document.querySelectorAll(".nbr");

let val1 = 0;
let val2 = 0;
let opp = "";

const add = (a, b) => {
  return( a + b);
};
const minus = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const devide = (a, b) => {
  if (b === 0) {
    return "error";
  } else {
    return a / b;
  }
};
const clear = () => {
  val1 = 0;
  val2 = 0;
  result.value = 0;
  return val1, val2, result;
};

for (let i of fct) {
  i.addEventListener("click", function() {
    if (i.innerHTML !== "=") {
      opp = i.innerHTML;
    } else {
      switch (opp) {
        case "+":
          result.value = add(val1, 8);

        case "-":
          result.value = minus(5, 8);

        case "/":
          result.value = devide(5, 0);
        case "*":
          result.value = multiply(5, 8);
        default:
          result.value;
      }
    }
  });
}

for (let i of btn) {
  i.addEventListener("click", function() {
    switch (i.innerHTML) {
      case "C":
        return clear();
      case "&#8592;":
        return (result.value = result.value.slice(0, -1));
      default:if (val1 === 0) {
        val1 = i.innerHTML;
        result.value = val1;
      } else {
        val1 = val1 + i.innerHTML;
        result.value = val1;
      }
    }
    // if (i.innerHTML === "C") {
    //   //   clear();
    // } else {
    //   if (val1 === 0) {
    //     val1 = i.innerHTML;
    //     result.value = val1;
    //   } else {
    //     val1 = val1 + i.innerHTML;
    //     result.value = val1;
    //   }
    // }
  });
}
