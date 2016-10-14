function createApp(pattern,operator,leftOperand,rightOperand) {
  return new Captcha(pattern,operator,leftOperand,rightOperand);
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

    return pattern === 1? lo1[leftOperand] : lo2[leftOperand];
  }
}

function right_operand(pattern,rightOperand){
  this.to_string = function(){
    let ro1 = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
    let ro2 = ['0','1','2','3','4','5','6','7','8','9'];

    return pattern === 1? ro1[rightOperand] : ro2[rightOperand];
  }
}

function Captcha(pattern,operator,leftOperand,rightOperand) {
  this.generate = function(){
    let op = new Operator(operator);
    let lo = new left_operand(pattern,leftOperand);
    let ro = new right_operand(pattern,rightOperand);

    return lo.to_string()+' '+op.to_string()+' '+ro.to_string();
  }
}


describe('Captcah App',() =>{
	describe('Pattern is 1', ()=> {
	   let pattern = 1;
		it('should return "0 + ONE" when input is 1,1,0,1',()=>{
      let App = new createApp(pattern,1,0,1);
			expect(App.generate()).toEqual('0 + ONE');
		})
    it('should return "1 + TWO" when input is 1,1,1,2',()=>{
      let App = new createApp(pattern,1,1,2);
			expect(App.generate()).toEqual('1 + TWO');
		})
    it('should return "2 - THREE" when input is 1,2,2,3',()=>{
      let App = new createApp(pattern,2,2,3);
			expect(App.generate()).toEqual('2 - THREE');
		})
    it('should return "3 * FOUR" when input is 1,3,3,4',()=>{
      let App = new createApp(pattern,3,3,4);
			expect(App.generate()).toEqual('3 * FOUR');
		})
    it('should return "4 / FIVE" when input is 1,4,4,5',()=>{
      let App = new createApp(pattern,4,4,5);
			expect(App.generate()).toEqual('4 / FIVE');
		})
    it('should return "5 + SIX" when input is 1,1,5,6',()=>{
      let App = new createApp(pattern,1,5,6);
			expect(App.generate()).toEqual('5 + SIX');
		})
    it('should return "6 - SEVEN" when input is 1,2,6,7',()=>{
      let App = new createApp(pattern,2,6,7);
			expect(App.generate()).toEqual('6 - SEVEN');
		})
	})

})
