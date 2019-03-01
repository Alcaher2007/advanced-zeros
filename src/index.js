module.exports = function getZerosCount(number, base) {
 let k = 0;
let exp = 1;
let noob=1;
let arr = [];
let i = 2;
let arr2 = [];
let st=1;
let zerosCount=0;
let okr=0;
let exps=[];
let Zero=[];
let c=0;
while (i <= base) {
    while (base % i == 0) {
        arr.push(i);
        base = base / i;
    }
    i = i + 1;
}

for(let n = 0 ; n < arr.length ; n++){
			if(n == arr.length - 1){
				exps[k] = exp;
				arr2[k] = arr[n];
			}
			if(arr[n] == arr[n+1]){
				exp++;
			}
			else{
				exps[k] = exp;
				arr2[k] = arr[n];
				k++;
				exp = 1;
			}
	}
	
for (i=0;i<arr2.length;i++)
{
	st=1;
	zerosCount=0;
while(Math.pow(arr2[i], st)<=number)
{
	zerosCount+=number/Math.pow(arr2[i],st);
	c=Math.floor(zerosCount);
	zerosCount=c;
	st++;

}
Zero[i]=c;
}

for(i=0;i<Zero.length;i++)
{
	Zero[i]/=exps[i];
}

let min=Zero[0];
for(i=1;i<Zero.length;i++)
{
	if(min>Zero[i])
	{
		min=Zero[i];
		continue;
	}
	
}
zerosCount=min;
return Math.floor(zerosCount);
}