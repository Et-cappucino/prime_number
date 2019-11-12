module.exports = {
	isPrime: function(n) {
		if(n <=1) {
			return false;
		}
		let div = 2;
          while(div <= Math.sqrt(n)) {
			if(n % div === 0) {
				return false;
			}
           div++;
		}
      return true;
	},
	intoRangeOfPrimes: function(int1,int2){
		let rangeOfInputs = [];
		let rangeOfPrimes = [];
		let max;
		let min;
		if(int1>int2){
			max = int1;
			min = int2;
		}
		else{
			max = int2;
			min = int1;
		}
		while(max>=min){
			rangeOfInputs.push(min);
			min++;
		}
	
		for(let i=0; i<rangeOfInputs.length; i++){
			if(this.isPrime(rangeOfInputs[i])){
			   rangeOfPrimes.push(rangeOfInputs[i]);
			}
		}
	  console.log(rangeOfPrimes);
	}
}
