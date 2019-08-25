let result = document.querySelector(".result");
let btn = document.querySelectorAll(".calc-btn");
let fct = document.querySelectorAll(".fct");
let nbr = document.querySelectorAll(".nbr");
let res = result.value;
let val1 = 0;
let val2 = 0;
let opp = "";

const add = (a, b) => {
  return a + b;
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
  res = 0;
  result.value = res;
  return val1, val2, res;
};

for (let i of fct) {
  i.addEventListener("click", function() {
    if (i.innerHTML !== "=") {
      opp = i.innerHTML;
      result.value="0"
    } else {
      switch (opp) {
        case "+":
          res = add(val1, 5);
          result.value = res;
          val1=res;
          break;

        case "&#8722;":
          res = minus(val1, 5);
          break;

        case "/":
          res = devide(val1, 2);
          break;
        case "*":
          res = multiply(val1, 2);
          break;
        default:
          res;
          break;
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
      default:
        if (val1 === 0) {
          val1 = Number(i.innerHTML);
          result.value = val1;
        } else {
          val1 = Number(val1 + i.innerHTML);
          result.value = val1;
        }
    }
  });
}
