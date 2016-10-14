function createApp(pattern,operator,leftOperand,rightOperand) {
  return new Captcha(pattern,operator,leftOperand,rightOperand);
}

function Captcha(pattern,operator,leftOperand,rightOperand) {
  this.generate = function(){
    let op = new Operator(operator);
    let lo = new left_operand(pattern,leftOperand);
    let ro = new right_operand(pattern,rightOperand);

    return lo+' '+op+' '+ro;
  }
}
