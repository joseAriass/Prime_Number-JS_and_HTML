function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

let input = prompt("Ingrese un número para verificar si es primo:");
let number = parseInt(input);

if (isPrimeNumber(number)) {
  alert(number + " es un número primo.");
} else {
  alert(number + " no es un número primo.");
}
