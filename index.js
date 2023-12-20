 const handoptions={
    "rock":"Group 2 (2).png",
    "scissor":"Group 2 (1).png",
    "paper":"Group 2.png"
   
 }
 let YOURSCORE=0;
 let COMPUTERSCORE=0;


const pickuserHand=(hand)=>{
    console.log(hand);
    let hands = document.querySelector(".hands");
    hands.style.display="none";

    let rules=document.querySelector(".rules");
    rules.style.display="none"

    let x=document.querySelector(".x");
    x.style.display="none"

    let context=document.querySelector(".context");
    context.style.display="flex"

    document.getElementById("userpicker").src=handoptions[hand]
   let cphand=computerpickerimage();
   referee(hand,cphand); 
}

const computerpickerimage=()=>{
    let hands=["rock","scissor","paper"];
    let cphand=hands[Math.floor(Math.random()*3)]
    document.getElementById("computerpicker").src=handoptions[cphand]
    return cphand;
}

const referee = (userHand, cphand) => {
    if (userHand == "paper" && cphand == "scissors") {
      setDecision("YOU LOSE!");
      let next = document.querySelector(".next");
       next.style.display="none";
      setScore1(COMPUTERSCORE+1);
    }
    if (userHand == "paper" && cphand == "rock") {
     
      let next = document.querySelector(".next");
       next.style.display="flex";
       setDecision("YOU WIN");
      setScore(YOURSCORE+ 1);
      
    }
    if (userHand == "paper" && cphand == "paper") {
      setDecision("It's a tie!");
      let next = document.querySelector(".next");
       next.style.display="none";
    }
    if (userHand == "rock" && cphand == "scissors") {
      setDecision("YOU WIN");
      let next = document.querySelector(".next");
       next.style.display="flex";
      setScore(YOURSCORE + 1);
      
    }
    if (userHand == "rock" && cphand == "paper") {
      setDecision("YOU LOSE!");
      let next = document.querySelector(".next");
       next.style.display="none";
      setScore1(COMPUTERSCORE+1);
    }
    if (userHand == "rock" && cphand == "rock") {
      setDecision("It's a tie!");
      let next = document.querySelector(".next");
       next.style.display="none";
    }
    if (userHand == "scissors" && cphand == "scissors") {
      setDecision("It's a tie!");
      let next = document.querySelector(".next");
       next.style.display="none";
    }
    if (userHand == "scissors" && cphand == "rock") {
      setDecision("YOU LOSE!");
      let next = document.querySelector(".next");
       next.style.display="none";
      setScore1(COMPUTERSCORE+1);
    }
    if (userHand == "scissors" && cphand == "paper") {
      setDecision("YOU WIN");
      let next = document.querySelector(".next");
       next.style.display="flex";
      setScore(YOURSCORE + 1);
      
    }
  }
  const setDecision=(Decision)=>{
    document.querySelector(".Decision").innerText = Decision;
  }
  const setScore=(yourscore)=>{
    YOURSCORE=yourscore;
    document.querySelector(".YOURSCORE h1").innerText = yourscore;
  
    
  }
  const setScore1=(computerscore)=>{
    COMPUTERSCORE=computerscore;
    document.querySelector(".COMPUTERSCORE h1").innerText = computerscore;
    
  }
  const restartgame=()=>{
    let hands = document.querySelector(".hands");
    hands.style.display="flex";
    let context=document.querySelector(".context");
    context.style.display="none"

  }
    const playagain=()=>{
    let hands = document.querySelector(".hands");
    hands.style.display="flex";
    let scoreboard = document.querySelector(".scoreboard");
    scoreboard.style.display="flex";
    let last = document.querySelector(".last");
    last.style.display="none";
  }
  
  const hurray=(next)=>{
    console.log(next);
    let context=document.querySelector(".context");
    context.style.display="none";
    let scoreboard=document.querySelector(".scoreboard");
    scoreboard.style.display="none";
    let last=document.querySelector(".last");
    last.style.display="flex"

  }
  const displayrules=(none)=>{
    console.log(none);
    let rules=document.querySelector(".rules");
    rules.style.display="flex"
    let x=document.querySelector(".x");
    x.style.display="flex"
  }

const hiderules=(rule)=>{
    console.log(rule);
    let rules=document.querySelector(".rules");
    rules.style.display="none"

    let x=document.querySelector(".x");
    x.style.display="none"
}
