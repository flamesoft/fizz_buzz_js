function Fizz_buzz() {};

Fizz_buzz.prototype.fizz_buzz = function(number) {
  if(this.has_zero_divider(number, 15) == 0){
    return 'fizz buzz';
  }
  else if(this.has_zero_divider(number, 3) == 0){
    return 'fizz';
  }
  else if(this.has_zero_divider(number, 5) == 0){
    return 'buzz';
  }
  else{
    return number.toString();
  }
}

Fizz_buzz.prototype.has_zero_divider = function (number, divider) {
  var result = number % divider;
  return result
}
