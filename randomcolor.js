
let lis=document.querySelectorAll("p");  //we need to select all the lis otherwise only the first one 
                                        // will  be selected 

lis.forEach((li)=>li.addEventListener("click",()=>{(li.parentElement).style.color=randomColor();}))


/**
 * this function generates a random color based on the fact that a color has this format: 
 * #<6 hexadecimal digits> 
 * the digits being in  [0123456789ABCDEF]
 * @returns randomColor 
 */
function randomColor()
{
    let letters="0123456789ABCDEF" ;//all hexa digits possible; 
    let colorCode="#"; 
    for(let i=0;i<6;i++)
    {
        colorCode+=letters[Math.ceil(Math.random()*15)]; //returns a random index betweel 0 and 15
    } 

    return colorCode;
}