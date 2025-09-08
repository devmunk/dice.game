var totalMatch = 0;
var You =0;
var player2Score =0;
var draw =0;


$(".btn").click(function(){
        result();
    
})

function result(){
    totalMatch++;
    $("h3").text("Total matches: "+totalMatch);

    if(totalMatch%5===0){
        $(".popper").text("🎉Hurray! You completed "+totalMatch+" matches");
        $(".popper").show();
    }else{

        $(".popper").hide();
    }
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var randomDice1 = "./images/dice"+randomNumber1+".png";
    var randomDice2 = "./images/dice"+randomNumber2+".png";

    var img1= document.querySelectorAll("img")[0];
    var img2= document.querySelectorAll("img")[1];
    img1.setAttribute("src",randomDice1);
    img2.setAttribute("src",randomDice2);

    
    if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Computer Win🚩";
        player2Score++;
        $("#player2 .score").text(player2Score+" wins");
    }else if (randomNumber1 === randomNumber2){
        document.querySelector("h1").innerHTML = "Draw";
        draw++;
        $("#draw .score").text(draw);
    }else{
        document.querySelector("h1").innerHTML = "🚩You Win";
        You++;
        $("#player1 .score").text(You+" wins");    // selects the element 0 wins in player1 span element 
    }
}