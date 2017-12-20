function array1()
{

var array = ["9", " 8", " 4", " 12", " 11", " 3", " 5", " 7", " 21", " 100"];

document.getElementById('original_array').innerHTML = array;

}

function isOdd()
			{
			var numbers=[9, 8, 4, 12, 11, 3, 5, 17, 21, 100];
			var OddNumbers=[];
			j=0;
			for (i=0; i<numbers.length; i++) {
				if (numbers[i]%2!=0) {
						OddNumbers[j] = numbers[i];
						console.log(j);
						console.log(OddNumbers[j]);
						j++;
					}
				}
				document.getElementById('only_odd_array').innerHTML = OddNumbers;
			}