let n = 10;
let sum = 0;

	for(let i = 1; i <= n; i++){
		if(i % 2 == 1){
			continue;
		}
		sum += i;

		document.write(i + "ㅡㅡㅡㅡㅡㅡㅡㅡ" + sum + "<br>");
	}
	