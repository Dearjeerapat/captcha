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

function Operator(operator){
  this.to_string = function(){
    let op = ['+','-','*','/'];

    return op[operator - 1];
  }
}

function left_operand(pattern,leftOperand){
  this.to_string = function(){
    let lo1 = ['0','1','2','3','4','5','6','7','8','9'];
    let lo2 = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];

    return pattern === 1? lo1[leftOperand - 1] : lo2[leftOperand - 1];
  }
}
