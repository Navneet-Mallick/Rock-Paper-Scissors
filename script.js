let score=JSON.parse(localStorage.getItem('score')) ||{
    wins:0,
       losses:0,
       ties:0
    }
       
       /*if(!score){
          score={
             wins:0,
             losses:0,
             ties:0
          };
       }*/
    
       updateScore();
        let isAutoPlaying=false;
        let intervalID;
       function autoplay(){
       if(!isAutoPlaying) 
       {
         intervalID=setInterval(function(){
            const playerMove=pickComputerMove();
         playGame(playerMove);
         
        },1000);
        isAutoPlaying=true;
       
       }  
       else{
             clearInterval(intervalID);
             isAutoPlaying=false;
       }
    }
    document.querySelector('.btn-rock').addEventListener('click',()=>{
      playGame('rock');
    })
     document.querySelector('.btn-paper').addEventListener('click',()=>{
      playGame('paper');
     })
     document.querySelector('.btn-scissors').addEventListener('click',()=>{
      playGame('scissors');
     })

     document.body.addEventListener('keydown',(event)=>{
      if(event.key==='r'){
         playGame('rock');
      }
      else if(event.key==='p'){
         playGame('paper');
      }
      else if(event.key=== 's'){
         playGame('scissors');
      }
     })
       function playGame(playerMove){
          const compMove=pickComputerMove();
    
       let res='';
    
    
       if(playerMove==='scissors'){ 
       if(compMove==='rock'){
          res='You lose';
       }
       else if(compMove==='paper'){
          res='You win'
       }
       else if(compMove==='scissors'){
          res='Tie';
       }
    }
    else if(playerMove==='paper'){
       if(compMove==='rock'){
       res='You win';
    }
    else if(compMove==='paper'){
       res='Tie'
    }
    else if(compMove==='scissors'){
       res='You lose';
    }
    }
    else if(playerMove==='rock'){
       if(compMove==='rock'){
            res='Tie';
        }
        else if(compMove==='paper'){
            res='You lose'
        }
        else if(compMove==='scissors'){
            res='You win';
        }
    }
    
       if(res==='You win'){
          score.wins=score.wins+1;
    
       }
    
       else if(res==='You lose'){
          score.losses=score.losses+1;
       }
    
       else if(res==='Tie'){
          score.ties=score.ties+1;
       }
       localStorage.setItem('score',JSON.stringify(score));
    
       updateScore();
       document.querySelector('.result').innerHTML=res;
       document.querySelector('.moves').innerHTML=
       ` You<img src="images/${playerMove}-emoji.png" class="move-icon">
       <img src="images/${compMove}-emoji.png" class="move-icon">
       Computer  `;
       }
      
    
       function updateScore(){
          document.querySelector('.js-score').
       innerHTML=`Wins: ${score.wins} . Losses ${score.losses}. Ties ${score.ties}. `;
    
       }
       function pickComputerMove(){
        
       const randomNum=Math.random();
       let compMove ='';
    
       if(randomNum>=0 && randomNum<1/3){
          compMove='rock';
       }
       else if(randomNum>=1/3 && randomNum<2/3){
          compMove='paper';
       }
    
       else{
          compMove='scissors';
    }
    return compMove;
       }
    
    