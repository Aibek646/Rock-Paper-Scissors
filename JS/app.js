// let rockPaperScissors = [
     
//     {  name: 'Alex',
//        tools : ['paper', 'scissors', 'rock']
  
//     },
//     {
//         name: 'John',
//         tools: ['rock', 'scissors', 'paper']

//     },
//     {
//         name: 'Gendalf',
//         tools: ['scissors', 'paper', 'rock']

//     },
//     {
//         name: 'Sergey',
//         tools: ['paper', 'rock', 'scissors']

//     },
// ];


// const game = {

//     RPS : rockPaperScissors,
     
//     playingPeople : [],

//     WinningPeople : [],
    
//     toolX : [],
//     toolY: [],


//     pickPlayers() {
//         for(i = 0; i < 2; i++){
//         let random = Math.floor(Math.random() * this.RPS.length);
//         this.playingPeople.push(this.RPS[random]);
//         this.RPS.splice(random, 1);
//     }
//    },

//     pickTool1() {
//           let tool = this.playingPeople[0].tools;
//           let rt = Math.floor(Math.random() * tool.length);
//           tool[rt];
//           this.toolX.push(tool[rt]);

          
          
//       },

//     pickTool2() {
//         let tool = this.playingPeople[1].tools;
//         let rt = Math.floor(Math.random() * tool.length);
//         tool[rt];
//         this.toolY.push(tool[rt]);

//     },

//     comparetools(choice1, choice2) {
//        if(choice1 === 'rock' && choice2 === 'paper'){
//          console.log(`
//          Players : ${this.playingPeople[0].name} and ${this.playingPeople[1].name}
//           Tools : ${choice1} and ${choice2}
//          ${this.playingPeople[1].name} has a 'paper' He Won the game`);
//       } else if (choice1 === 'paper' && choice2 === 'scissors'){
//            console.log(`Players : ${this.playingPeople[0].name} and ${this.playingPeople[1].name}
//           Tools:  ${choice1} and ${choice2}
//         ${this.playingPeople[1].name} has 'scissors' He Won the game`);
//     }
//        else if(choice1 === 'rock' && choice2 === 'scissors'){
//            console.log(`Players : ${this.playingPeople[0].name} and ${this.playingPeople[1].name}
//           Tools: ${choice1} and ${choice2}
//            ${this.playingPeople[0].name} has a 'rock' He Won the game`);
//        }
//      else if (choice1 === choice2) {
//            console.log(`Players : ${this.playingPeople[0].name} and ${this.playingPeople[1].name}
//           Tools:  ${choice1} and ${choice2}
//            Both ${this.playingPeople[0].name} and ${this.playingPeople[1].name} has the same tools, then game is a tie`);
//      }
//      else if(choice1 === 'scissors' && choice2 === 'rock'){
//            console.log(`Players : ${this.playingPeople[0].name} and ${this.playingPeople[1].name}
//            Tools :${choice1} and ${choice2}
//            ${this.playingPeople[1].name} has a 'rock' he won the game `);
//      }
//      else if(choice1 === 'scissors' && choice2 === 'paper'){
//            console.log(`Players : ${this.playingPeople[0].name} and ${this.playingPeople[1].name}
//            Tools: ${choice1} and ${choice2}
//            ${this.playingPeople[0].name} has 'scissors' he won the game`);
//      }
//      else if(choice1 === 'paper' && choice2 === 'rock'){
//            console.log(`Players : ${this.playingPeople[0].name} and ${this.playingPeople[1].name}
//           Tools:  ${choice1} and ${choice2}
//            ${this.playingPeople[1].name} has a paper he won the game`);
//      }

    
//     }
// }






// game.pickPlayers();
// game.pickPlayers();

// game.pickTool1();
// game.pickTool2();
// game.comparetools(game.toolX[0], game.toolY[0]);





// // console.log(game.playingPeople);
// // console.log(game.RPS);

// // game.randomTool();

///////////////////////////////////////////////////////////////////////////////////////
// let listPeople = ['Alex', 'John', 'Gendalf', 'Sergey'];

// let listTools = ['rock', 'paper', 'scissors'];


// const game = {
//     people : listPeople,
    
//     tools : listTools,

//     playingPeople : [],

//     instruments : [],

//     instruments222 : [],

//     lastPlayers : [],




//     pickPeople(arg) {
//       let random  = Math.floor(Math.random() * this.people.length);
//       this.playingPeople.push(this.people[random]);
//       this.people.splice(random, 1);
//   },

//     pickTool (arg) {
//         let random = Math.floor(Math.random() * this.tools.length);
//         arg.push(this.tools[random]);
        
//     },

//     compareTools(thing1, thing2, arg,) {
//         if (thing1 === 'rock' && thing2 === 'paper') {
//             console.log('Paper Won');
//             this.lastPlayers.push(this.arg[1]);
//         } else if (thing1 === 'scissors' && thing2 === 'rock') {
//             console.log('Rock won');
//             this.lastPlayers.push(this.arg[1]);

//         }
//         else if (thing1 === 'paper' && thing2 === 'scissors') {
//             console.log('scissors won');
//             this.lastPlayers.push(this.arg[1]);
//         }
//         else if (thing1 === 'paper' && thing2 === 'rock') {
//             console.log('Paper Won');
//             this.lastPlayers.push(this.arg[0]);
//         }
//         else if (thing1 === 'rock' && thing2 === 'scissors') {
//             console.log('Rock won');
//             this.lastPlayers.push(this.arg[0]);
//         }
//         else if (thing1 === 'scissors' && thing2 === 'paper') {
//             console.log('Scissors win');
//             this.lastPlayers.push(this.arg[0]);
//         }
//         else if (thing1 === thing2) {
//             console.log(`Both player has the same tools ${thing1} and ${thing2}`);
//         }
//     },




// };


// game.pickPeople();
// game.pickPeople();

// game.pickTool(game.instruments);

// game.pickTool(game.instruments222);


// console.log(game.playingPeople);
// game.compareTools(game.instruments[0], game.instruments[1]);

// console.log(game.lastPlayers);
// console.log(game.people);
// console.log(game.instruments222);


// 1. Game loads with four people on the screen
// 2. User will click a person to make a random choice of R, P, or S
//      - who was clicked
//      - pick a random item for them
//      - compare their item with partner
//      - find which one wins
//      - repeat for other players
// 3. When we pick a winner, move them to next round
// 4. Repeat step 2 for final round, and declare a tournament winner.


// let listPeople = ['Legolas', 'Gendalf', 'Sergey', 'Oleg'];

// let listTools = ['rock', 'paper', 'scissors'];


// const game = {
   
//     people : listPeople,

//     tools: listTools,

//     playingPeople: [
//         [ 'Legolas', 'Gendalf', ],
//         [ 'Sergey', 'Oleg' ]
//     ],

//     lastPlayers: [],

//     pickPlayers(arr){
//         let random = Math.floor(Math.random() * this.people.length);
//         arr.push(this.people[random]);
//         game.people.splice(random, 1);
//     },
  
//     pickTools(arr){
//         let random = Math.floor(Math.random() * this.Tools.length);
//         arr.push(this.Tools[random]);
        
//     },


//     compareTools(thing1, thing2, arg){
//         if (thing1 === 'rock' && thing2 === 'paper') {
//             console.log('Paper Won');
//             this.lastPlayers.push(arg[1]);
//         } else if (thing1 === 'scissors' && thing2 === 'rock') {
//             console.log('Rock won');
//             this.lastPlayers.push(arg[1]);

//         }
//         else if (thing1 === 'paper' && thing2 === 'scissors') {
//             console.log('scissors won');
//             this.lastPlayers.push(arg[1]);
//         }
//         else if (thing1 === 'paper' && thing2 === 'rock') {
//             console.log('Paper Won');
//             this.lastPlayers.push(arg[0]);
//         }
//         else if (thing1 === 'rock' && thing2 === 'scissors') {
//             console.log('Rock

//             this.lastPlayers.push(arg[0]);
//         }
//         else if (thing1 === 'scissors' && thing2 === 'paper') {
//             console.log('Scissors win');
//             this.lastPlayers.push(arg[0]);
//         }
//         else if (thing1 === thing2) {
//             console.log(`Both player has the same tools ${thing1} and ${thing2}`);
//             this.lastPlayers.push(arg[1]);
//         }
//     },
    

// };




// game.pickPlayers(game.playingPeople);
// game.pickPlayers(game.playingPeople);

// game.compareTools(game.instruments[0], game.instruments[1], game.playingPeople);


// console.log(game.instruments  + ' first players');
// console.log(game.playingPeople);
// console.log(game.lastPlayers);


// let button = document.createElement('button');

// button.innerText = 'Start';

// document.querySelector('body').append(button);




// let listPeople = ['Frodo', 'Aragorn',];

// let listTools = ['rock', 'paper', 'scissors'];

 
// const game = () => {
 
//    let  p = ['Frodo', 'Aragorn'];

//    let  lastPlayers = [];

   



//     const pickTool = () => {
//         let random = Math.floor(Math.random() * listTools.length);
//         return listTools[random];
//     };


//     const compareTools = (t0, t1, arg) => {
//         if (t0 === 'rock' && t1 === 'paper') {
//             console.log(`${p[0]} has ${t0} and ${p[1]} has ${t1} then ${p[1]} Won`);
//             lastPlayers.push(arg[1]);
//         } else if (t0 === 'scissors' && t1 === 'rock') {
//             console.log(`${p[0]} has ${t0} and ${p[1]} has ${t1} then ${p[1]} Won`);;
//             lastPlayers.push(arg[1]);

//         }
//         else if (t0 === 'paper' && t1 === 'scissors') {
//             console.log(`${p[0]} has ${t0} and ${p[1]} has ${t1} then ${p[1]} Won`);
//             lastPlayers.push(arg[1]);
//         }
//         else if (t0 === 'paper' && t1 === 'rock') {
//             console.log(`${p[0]} has ${t0} and ${p[1]} has ${t1} then ${p[0]} Won`);
//             lastPlayers.push(arg[0]);
//         }
//         else if (t0 === 'rock' && t1 === 'scissors') {
//             console.log(`${p[0]} has ${t0} and ${p[1]} has ${t1} then ${p[0]} Won`);
//             lastPlayers.push(arg[0]);
//         }
//         else if (t0 === 'scissors' && t1 === 'paper') {
//             console.log(`${p[0]} has ${t0} and ${p[1]} has ${t1} then ${p[0]} Won`);
//             lastPlayers.push(arg[0]);
//         }
//         else if (t0 === t1) {
//             console.log(`Both player has the same tools ${t0} and ${t1}`);
            
//         }
//     };

// //////////////



//     compareTools(pickTool(), pickTool(), p);
    
//     console.log(p);


//     console.log(lastPlayers);

//     let frodoTool = '';
//     let aragornTool = '';

//     const pickFrodoTool = () => {
//         frodoTool = pickTool();
//         console.log('Frodos tool' +frodoTool);
//         let frodoToolPic = document.querySelector('.frodo-tool');
//         if(frodoTool === 'scissors'){
//             console.log('scissors was picked');
//             frodoToolPic.src = "Img/scissors.png";
//         } 
//         else if(frodoTool === 'paper'){
//             frodoToolPic.src = "Img/paper.png";
//         }
//         else if(frodoTool === 'rock'){
//             frodoToolPic.src = "Img/rock.png"
//         }
    
//     }

//     let frodoPic = document.querySelector('.frodo');

//     frodoPic.addEventListener('click', pickFrodoTool);

    
//     const pickAragornTool = () => {
//         aragornTool = pickTool();
//         let aragornToolPic = document.querySelector('.aragorn-tool');
//         if(aragornTool === 'scissors'){
//             console.log('scissors was picked');
//             aragornToolPic.src = "Img/scissors.png";
//         }
//         else if (aragornTool === 'paper') {
//             aragornToolPic.src  = "Img/paper.png";
//         }
//         else if (aragornTool === 'rock') {
//             aragornToolPic.src = "Img/rock.png"
//         }

//     }


   

//     let AragornPic = document.querySelector('.aragorn');

//     AragornPic.addEventListener('click', pickAragornTool)

//     if (frodoTool != '' && aragornTool != '') {
//         compareTools(frodoTool, aragornTool, )

//        frodoTool = '';
//        aragornTool = '';
        
//     }

//     };

//     game();

    ///DOM

const game = {

   listPeople :['frodo', 'aragorn'],

   listTools : ['rock', 'paper', 'scissors'],

   frodoTool:  '',

   aragornTool : '',

   score : 0,

   score2: 0,

   pickTool() {
      let random = Math.floor(Math.random() * this.listTools.length);
      return this.listTools[random]; 
   },


      setPic(tool) {
        let pic = document.querySelector('.frodo-tool');
        if(tool === 'paper'){
            pic.src = "/Img/paper.png";
        }
        else if(tool === 'scissors'){
            pic.src = "/Img/scissors.png";
        }
        else if(tool === 'rock'){
            pic.src = "/Img/rock.png";
        }
      },


    setPic2(tool) {
        let pic = document.querySelector('.aragorn-tool');
        if (tool === 'paper') {
            pic.src = "/Img/paper.png";
        }
        else if (tool === 'scissors') {
            pic.src = "/Img/scissors.png";
        }
        else if (tool === 'rock') {
            pic.src = "/Img/rock.png";
        }
    },

    setWord(words) {
        let word = document.querySelector('#text-2');
        word.innerHTML = 'Winner is : ' + words;  
    },
    
    putScore2() {
        let score = document.querySelector('#score-2');
        score.innerHTML = 'Score: ' + this.score2;
    },

    putScore1() {
         let score1 = document.querySelector('#score-1');
         score1.innerHTML = 'Score: ' + this.score; 
    },



   compareTool(thing1, thing2) {
       


      if(thing1 === 'rock' && thing2 === 'paper'){
         this.setPic('rock');
         this.setPic2('paper');
         console.log(`Aragorn Picked paper he won the game`);
         this.setWord('Aragorn');
         this.updateScore2();
         this.putScore2();
        
      }
      else if(thing1 === 'rock' && thing2 === 'scissors') {
          this.setPic('rock');
          this.setPic2('scissors');
          console.log(`Frodo Picked rock he won the game`);
          this.setWord('Frodo');
          this.updateScore();
          this.putScore1();
          
      } 
      else if(thing1 === 'paper' && thing2 === 'rock') {
          this.setPic('paper');
          this.setPic2('rock');
          console.log(`Frodo Picked paper he won the game`); 
          this.setWord('Frodo');
          this.updateScore();
          this.putScore1();
      }
      else if(thing1 === 'paper' && thing2 === 'scissors') {
          this.setPic('paper');
          this.setPic2('scissors');
          console.log(`Aragorn Picked scissors he won the game`); 
          this.setWord('Aragorn');
          this.updateScore2();
          this.putScore2();
          
      }
      else if(thing1 === 'scissors' && thing2 === 'paper') {
          this.setPic('scissors');
          this.setPic2('paper');
          console.log(`Frodo Picked scissors he won the game`);
          this.setWord('Frodo');
          this.updateScore();
          this.putScore1();
      }
      else if(thing1 === 'scissors' && thing2 === 'rock') {
          this.setPic('scissors');
          this.setPic2('rock');
          console.log(`Aragorn Picked rock he won the game`);
          this.setWord('Aragorn');
          this.updateScore2();
          this.putScore2();
      }
      else if (thing1 === 'paper' && thing2 === 'paper' || thing1 === 'rock' && thing2 === 'rock' || thing1 === 'scissors' && thing2 === 'scissors') {
          let equal = document.querySelector('.frodo-tool');
          let equal2 = document.querySelector('.aragorn-tool');
          console.log('it is a tie');
          this.setWord('nobody');
          if(thing1 === 'paper' && thing2 === 'paper'){
            equal.src = "/Img/paper.png";
            equal2.src = "/Img/paper.png";
          }
            else if(thing1 === 'scissors' && thing2 === 'scissors'){
              equal.src = "/Img/scissors.png";
              equal2.src = "/Img/scissors.png";
          }
            else if(thing1 === 'rock' && thing2 === 'rock'){
              equal.src = "/Img/rock.png";
              equal2.src = "/Img/rock.png";
        
            }

      }

       this.aragornTool = thing2; 
       this.frodoTool = thing1;
    
       
       
       
   },

   updateScore2() {
      this.score2 = this.score2 + 1;
   },

   updateScore() {
       this.score = this.score + 1;
       
   },


//    pickToolPict(person) {
//       instrument = this.pickTool();
//       if(person === 'aragorn'){
//           let aragornToolPic = document.querySelector('.aragorn-tool');
//               if(instrument === 'paper'){
//               aragornToolPic.src = "Img/paper.png";
//           }
//               else if (instrument === 'rock') {
//               aragornToolPic.src = "Img/rock.png";
//           }
//               else if (instrument === 'scissors') {
//               aragornToolPic.src = "Img/scissors.png";
//           }
//       }
//       else if(person === 'frodo'){
//           let frodoToolPic = document.querySelector('.frodo-tool');
//                 if(instrument === 'paper'){
//                     frodoToolPic.src = "Img/paper.png"
//                 }
                
//                 else if (instrument === 'rock') {
//                     frodoToolPic.src = "Img/rock.png"
//                 }

//                 else if (instrument === 'scissors') {
//                     frodoToolPic.src = "Img/scissors.png"
//                 }

//       }
//    },


};



console.log(game.aragornTool);
console.log(game.frodoTool);



let button = document.querySelector('.btn');
button.addEventListener('click' , () => {
    game.compareTool(game.pickTool(), game.pickTool());
});

console.log(game.score);



