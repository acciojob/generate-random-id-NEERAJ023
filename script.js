function makeid(l) {
  // write your code here
	
	let b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	
	
	let result="";
	for(let i=0; i<l;i++){
		let e=Math.floor(Math.random()*b.length);
		result+=b.charAt(e);
	}
	return result;
}



// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
