function arrayfun()
{

var fruit1 = "Avacado";
var fruit2 = " Papaya";
var fruit3 = " Bannana!";

var king_bobs_speech = [fruit1, fruit2, fruit3];

document.getElementById('arraytext1').innerHTML = king_bobs_speech;

var library = ["Harry Potter", " Percy Jackson", " Hunger Games"];

document.getElementById('arraytext2').innerHTML = library;

}

function makeanarray()
{
	var input1 = document.getElementById("Input1").value;
	var input2 = document.getElementById("Input2").value;
	var input3 = document.getElementById("Input3").value;

	var users_array = [input1, input2, input3];

	document.getElementById('arraytext3').innerHTML = users_array
}