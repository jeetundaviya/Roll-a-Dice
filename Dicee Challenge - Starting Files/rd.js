
function rd()
{
    return Math.floor(Math.random()*6)+1;
}

var d1 = rd();
var d2 = rd();

document.getElementsByTagName("img")[0].setAttribute("src","images/dice"+d1+".png");
document.getElementsByTagName("img")[1].setAttribute("src","images/dice"+d2+".png");

if (d1 > d2)
{
    console.log("d1 wins :p");
    document.getElementsByTagName("h1")[0].innerText = "🚩 Player 1 Wins!";
    
}
else if(d1 === d2)
{
    console.log("Its a tie !!");
    document.getElementsByTagName("h1")[0].innerText = "Draw!";
}
else
{
    console.log("d2 wins :p");
    document.getElementsByTagName("h1")[0].innerText = "Player 2 Wins! 🚩";
}