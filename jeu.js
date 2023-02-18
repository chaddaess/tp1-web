let number=(Math.ceil(Math.random()*10)); 
let nb_tries=0;
test=false;


alert("guess the number between 0 and 10 , you got 5 tries");


while( test!=true && nb_tries<6)
{

    

    if(nb_tries>3)
    {
        alert("level is now set to :hard");
    } 

    else 
    {
        alert("level:easy");
    }

    let inp=prompt("guess the number");

    if(number==inp)
    {
        alert("bingo!"); 
        test=true;
    }
    else
    {
        nb_tries++;
        alert("oops try again");
        
    } 
} 

if(nb_tries>=6)
{
    alert("GAME OVER 3:)");
}

