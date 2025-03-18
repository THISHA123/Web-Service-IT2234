//arr = [1,2,3,4,5,6]
//target = 7
//write a code find the all pairs that sum up to the target


console.log("---------")
let arr4 = [1,2,3,4,5,6]
let target = 7
arr4.forEach((n) =>{
	arr4.forEach((i) =>
	{
		if( n !=i)
		{
			if(target == n + i)
			{
				console.log(n + " + " + i+ " = " + target)
			}
		}
	})
})
