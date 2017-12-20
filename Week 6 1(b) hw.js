function array1()
{

var array = ["5"," 8"," 3"," 4"," 8"," 19"," 22"," 6"," 9"," 12"];

document.getElementById('original_array').innerHTML = array;

}

function isEven()
			{
			var numbers=[5, 8, 3, 4, 8, 19, 22, 6, 9, 12];
			var EvenNumbers=[];
			j=0;
			for (i=0; i<numbers.length; i++) {
				if (numbers[i]%2==0) {
						EvenNumbers[j] = numbers[i];
						console.log(j);
						console.log(EvenNumbers[j]);
						j++;
					}
				}
				document.getElementById('only_even_array').innerHTML = EvenNumbers;
			}