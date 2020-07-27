function isDivisible(n, x, y) {
  if(Number.isInteger(n/x) && Number.isInteger(n/y)) {
    return true;
  }
  else { // Не совсем правильно, но пока работает - не трогай :) (Russian)
    return false;
  }
}
