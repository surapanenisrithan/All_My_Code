function Convert()
{
    var Input = document.getElementById("Input").value;
    var Inp = Input.toLowerCase().split("");
    var PigLatin= document.getElementById("PigLatin");
    var FirstLetter = Inp[0].toLowerCase();
    
    Inp[0] = Inp[0].toLowerCase();
    
    var Output;
    var Goutput;
    
    if(FirstLetter != "a" && FirstLetter != "e" && FirstLetter != "i" && FirstLetter != "o" && FirstLetter != "u")
    {
        Inp.splice(0, 1);
        Inp.push(FirstLetter);
        Output = Inp.join("") + "ay";
        Goutput = Output.toLowerCase();
        PigLatin.innerHTML = Goutput;
        
    }
    
    else
    {
        Output = Inp.join("") + "way"
        Goutput = Output.toLowerCase();
        PigLatin.innerHTML = Output;
    }
}