
      
      var firstPerson=window.prompt("Player One, Please enter yout name");
      var secondPerson=window.prompt("Player Two, Please enter yout name");

      document.querySelector(".dice #player1").innerHTML=firstPerson;
      document.querySelector(".dice #player2").innerHTML=secondPerson;

      var a="./images/dice1.png";
      var b="./images/dice2.png";
      var c="./images/dice3.png";
      var d="./images/dice4.png";
      var e="./images/dice5.png";
      var f="./images/dice6.png";
      
      var p1="./images/dice1.png";
      var p2="./images/dice2.png";
      var p3="./images/dice3.png";
      var p4="./images/dice4.png";
      var p5="./images/dice5.png";
      var p6="./images/dice6.png";
      

      //making an array that stores image file paths
      var arr1=[a,b,c,d,e,f];
      var arr2=[p1,p2,p3,p4,p5,p6];

      //generating random number between 0 to 5
      var random1=Math.floor(Math.random()*arr1.length);
      var random2=Math.floor(Math.random()*arr2.length);
      
      // picking a random array variable
     var diceRoll1=arr1[random1];
     var diceRoll2=arr2[random2];
     
      // using setattribut property to change src of image
      document.getElementById("img1").setAttribute("src",diceRoll1);
      document.getElementById("img2").setAttribute("src",diceRoll2);

      //Anothe method of solving :D
    //  document.getElementById("img1").src=diceRoll1;
    //  document.getElementById("img2").src=diceRoll2;

    if(random1>random2){
  winner.innerHTML="🚩PLAYER 1 WINS ;)";
}
else if(random1<random2){
  winner.innerHTML="PLAYER 2 WINS :D🚩";
}
else{
  winner.innerHTML="DRAW :("
}
     