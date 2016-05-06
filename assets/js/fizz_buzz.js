function Fizz_buzz() {};

Fizz_buzz.prototype.fizz_buzz = function(number) {
  if(number%3 == 0){
    return 'fizz';
  }
  else if(number%5 == 0){
    return 'buzz';
  }
  else{
    return number.toString();
  }
}
