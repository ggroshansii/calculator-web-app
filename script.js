let a;
let b;
let operator;

function add(a, b) {
  if (a.includes(".") || b.includes(".")){
    return (parseFloat(a) + parseFloat(b)).toFixed(2);
  } else {
    return parseFloat(a) + parseFloat(b);
  }
}

function subtract(a, b) {
  if (a.includes(".") || b.includes(".")){
    return (parseFloat(a) - parseFloat(b)).toFixed(2);
  } else {
    return parseFloat(a) - parseFloat(b);
  }
}

function multiply(a, b) {
  console.log(a);
  console.log(b);
  if (a.includes(".") || b.includes(".")){
    return (parseFloat(a) * parseFloat(b)).toFixed(2);
  } else {
    return parseFloat(a) * parseFloat(b);
  }
}

function divide(a, b) {
  if (b == 0){
    return "DON'T DIVIDE BY ZERO";
  } else if (a.includes(".") || b.includes(".")){
    return (parseFloat(a) / parseFloat(b)).toFixed(2);
  } else {
    return parseFloat(a) / parseFloat(b);
  }
}


function percent(a) {
  return parseFloat(a) / 100;
}

function operate(operator, a, b) {
  if (operator == "+") {
    return add(a, b);
  } else if (operator == "-") {
    return subtract(a, b);
  } else if (operator == "*") {
    return multiply(a, b);
  } else if (operator == "/") {
    return divide(a, b);
  }
}

const numbers = Array.from(document.querySelectorAll(".number"));
const display = document.querySelector("#displayDiv");
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    if (typeof a == "undefined" && typeof operator == "undefined") {
      display.textContent = numbers[i].textContent;
      a = numbers[i].textContent;
    } else if (typeof a == "string" && typeof operator == "undefined") {
      display.textContent = a + numbers[i].textContent;
      a = a + numbers[i].textContent;
    } else if (typeof b == "undefined" && typeof operator == "string") {
      display.textContent = numbers[i].textContent;
      b = numbers[i].textContent;
    } else {
      display.textContent = b + numbers[i].textContent;
      b = b + numbers[i].textContent;
    }
    console.log(a)
  });

  //styling when hovered
  numbers[i].addEventListener("mouseover", function () {
    numbers[i].style.backgroundColor = "white";
    numbers[i].style.color = "black";
  });
  //styling when no longer hovered
  numbers[i].addEventListener("mouseout", function () {
    numbers[i].style.backgroundColor = "";
    numbers[i].style.color = "";
  });
}
const operators = Array.from(document.querySelectorAll(".operator"));
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    if (typeof operator == "undefined") {
      display.textContent = "";
      display.textContent = operators[i].textContent;
      operator = operators[i].textContent;
    } else {
      display.textContent = operate(operator, a, b);
      a = operate(operator, a, b);
      b = "";
      operator = operators[i].textContent;
      console.log(operators[i]);
    }
  });
  //styling when hovered
  operators[i].addEventListener("mouseover", function () {
    operators[i].style.backgroundColor = "white";
    operators[i].style.color = "black";
  });
  //styling when no longer hovered
  operators[i].addEventListener("mouseout", function () {
    operators[i].style.backgroundColor = "";
    operators[i].style.color = "";
  });
}

const equals = document.querySelector("#equals");
equals.addEventListener("click", function () {
  display.textContent = operate(operator, a, b);
});

//styling when hovered
equals.addEventListener("mouseover", function () {
  equals.style.backgroundColor = "white";
  equals.style.color = "black";
});
//styling when no longer hovered
equals.addEventListener("mouseout", function () {
  equals.style.backgroundColor = "";
  equals.style.color = "";
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", function () {
  display.textContent = "";
  operator = undefined;
  a = undefined;
  b = undefined;
});

//styling when hovered
clear.addEventListener("mouseover", function () {
  clear.style.backgroundColor = "white";
  clear.style.color = "black";
});
//styling when no longer hovered
clear.addEventListener("mouseout", function () {
  clear.style.backgroundColor = "";
  clear.style.color = "";
});

const decimal = document.querySelector("#decimal");
decimal.addEventListener("click", function () {
  if (typeof a == "undefined" && typeof operator == "undefined" && a.includes(".") == false) {
    display.textContent = ".";
    a = ".";
  } else if (typeof a == "string" && typeof operator == "undefined" && a.includes(".") == false) {
    display.textContent = a + ".";
    a = a + ".";
  } else if (typeof b == "undefined" && typeof operator == "string" && b.includes(".") == false) {
    display.textContent = ".";
    b = ".";
  } else if (b.includes(".") == false) {
    display.textContent = b + ".";
    b = b + ".";
  }
});

//styling when hovered
decimal.addEventListener("mouseover", function () {
  decimal.style.backgroundColor = "white";
  decimal.style.color = "black";
});
//styling when no longer hovered
decimal.addEventListener("mouseout", function () {
  decimal.style.backgroundColor = "";
  decimal.style.color = "";
});

const posNeg = document.querySelector("#posNeg");
posNeg.addEventListener("click", function () {
  if (typeof a == "undefined" && typeof operator == "undefined") {
    display.textContent = "-";
    a = "-";
  } else if (typeof a == "string" && typeof operator == "undefined") {
    display.textContent = "-" + a;
    a = "-" + a;
  } else if (typeof b == "undefined" && typeof operator == "string") {
    display.textContent = "-";
    b = "-";
  } else {
    display.textContent = "-" + b;
    b = "-" + b;
  }
});

//styling when hovered
posNeg.addEventListener("mouseover", function () {
  posNeg.style.backgroundColor = "white";
  posNeg.style.color = "black";
});
//styling when no longer hovered
posNeg.addEventListener("mouseout", function () {
  posNeg.style.backgroundColor = "";
  posNeg.style.color = "";
});

const percentage = document.querySelector("#percentage");
percentage.addEventListener("click", function () {
  if (typeof a == "undefined" && typeof operator == "undefined") {
    display.textContent = percent(a);
    a = percent(a);
  } else if (typeof a == "string" && typeof operator == "undefined") {
    display.textContent = percent(a);
    a = percent(a);
  } else if (typeof b == "undefined" && typeof operator == "string") {
    display.textContent = percent(b);
    a = percent(b);
  } else {
    display.textContent = percent(b);
    a = percent(b);
  }
  console.log(a)
});

//styling when hovered
percentage.addEventListener("mouseover", function () {
  percentage.style.backgroundColor = "white";
  percentage.style.color = "black";
});
//styling when no longer hovered
percentage.addEventListener("mouseout", function () {
  percentage.style.backgroundColor = "";
  percentage.style.color = "";
});