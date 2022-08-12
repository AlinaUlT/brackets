module.exports = function check(str, bracketsConfig) {
  // your solution
	let counter = 0; 
	let brackets = [];

	for (let i = 0; i < str.length; i++) {
		for (let [start, end] of bracketsConfig) {
			if (str[i] === end) {
				if (brackets[counter - 1] === start) {
					counter--;
					brackets.pop();
				}
			 else {
				counter++;
				brackets.push(str[i]);
			}
		} 
		else {
			if (str[i] === start) {
				counter++;
				brackets.push(str[i]); 
				}
			}

		}
	}

	return brackets.length === 0;

	
}

//  (((())))()(       , "({[." ,  ")"
