function calc(operator,a,b) {
  const operations = {
    add: a + b,
    multi: a * b,
    subtract: a - b,
  }; 
  if (operator==="multi" || operator==="add" || operator==="subtract"){
    if (typeof(a)!=="number" || typeof(b)!=="number") {
      return 'Введите число';
   } switch (operator) {
    case 'add':
      return operations[operator];
    case 'subtract':
      return operations[operator];
    case 'multi':
      return operations[operator];
  }
  }
  else{
   return 'Введите правильную операцию';
  }
}
console.log('Результат: '+calc('multi',12,3));
console.log('Результат: '+calc('add',2,3));
console.log('Результат: '+calc('subtract',2,3));
