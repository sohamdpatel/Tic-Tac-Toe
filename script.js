console.log("Welcome to Tic Tac Toe");
let click = new Audio("click.wav");
let gameOver = new Audio("gameOver.mp3");
let turn = "X";
document.body.style.backgroundColor = "blue";
let isGameover = false;
const line = document.querySelector('.line');
const boxes = document.getElementsByClassName("box");

// Function to change to turn

const changeTurn = () => {

  if (turn === "X") {
    document.body.style.backgroundColor = "red";
    turn = "O";
  } else {
    document.body.style.backgroundColor = "blue";
    turn = "X";
  }
}

// Function to check for a win

const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');

  let wins = [
    [0, 1, 2, 6.8 , 10.5 , 0 ],
    [3, 4, 5, 6.8 , 32.65, 0 ],
    [6, 7, 8, 6.8 , 54.8, 0 ],
    [0, 3, 6, 11, 6.5, 90],
    [1, 4, 7, 33, 6.5, 90],
    [2, 5, 8, 55.3, 6.5, 90],
    [0, 4, 8, 13.5 ,13.5, 45],
    [2, 4, 6, 51.6 ,14,135]
  ]
  wins.forEach( e => {
    if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText !== "") && (boxtexts[e[1]].innerText === 'X' || boxtexts[e[1]].innerText === 'O')) {
        document.querySelector('.info').innerText =boxtexts[e[0]].innerText + " WON";
        console.log("checkwin call");
        isGameover = true;
        gameOver.play();
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.height = "200px";
        line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        line.style.transition = 'width 2s ease-in-out';
        line.style.width = '52.8vw';
        
        Array.from(boxes).forEach(element => {
            let boxtext =  element.querySelector('.boxtext');
                if (boxtext.innerText === '') {
                    boxtext.innerText = '-';
                    
                }
        })
    }
  })
}
const checkWin1 = () => {
  let boxtexts = document.getElementsByClassName('boxtext');

let wins = [
  [0, 1, 2, 3 , 4.75 , 0 ],
  [3, 4, 5, 3 , 14.65, 0 ],
  [6, 7, 8, 3 , 24.9, 0 ],
  [0, 3, 6, 5, 3, 90],
  [1, 4, 7, 15 , 3, 90],
  [2, 5, 8, 25, 3, 90],
  [0, 4, 8, 6.5 ,6.5, 45],
  [2, 4, 6, 23.3 ,6.5,135]
]
wins.forEach( e => {
  if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText !== "") && (boxtexts[e[1]].innerText === 'X' || boxtexts[e[1]].innerText === 'O')) {
      document.querySelector('.info').innerText =boxtexts[e[0]].innerText + " WON";
      isGameover = true;
      console.log("checkwin1 call");

      gameOver.play();
      document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
      document.querySelector('.imgBox').getElementsByTagName('img')[0].style.height = "200px";
      line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      line.style.transition = 'width 2s ease-in-out';
      line.style.width = '24vw';
      
      Array.from(boxes).forEach(element => {
          let boxtext =  element.querySelector('.boxtext');
              if (boxtext.innerText === '') {
                  boxtext.innerText = '-';
                  
              }
      })
  }
})
}
const mql = window.matchMedia("(max-width: 800px)");
const mediacheckWin = () => {

  
  // ["click" ,"change"].forEach((event) => {
  //   mql.addEventListener(event, () => {
      if (mql.matches) {
      // width is under 800px
      checkWin();
      } else {
      // width is above 800px
      checkWin1();
      }
    // })
  
  // })
}



// Game logic
Array.from(boxes).forEach(element => {
    let boxtext =  element.querySelector('.boxtext');
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            changeTurn();
            click.play();
            mediacheckWin();
            if (!isGameover) {
                
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })

    mql.addEventListener("change", () => {
      mediacheckWin();
    })
})

//Add onClick listener to reset button

document.getElementById("reset").addEventListener("click", () => {
    isGameover = false;
    turn = "X";
    document.body.style.backgroundColor = "blue";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.getElementsByClassName("boxtext")[0].innerText = "";
    document.getElementsByClassName("boxtext")[1].innerText = "";
    document.getElementsByClassName("boxtext")[2].innerText = "";
    document.getElementsByClassName("boxtext")[3].innerText = "";
    document.getElementsByClassName("boxtext")[4].innerText = "";
    document.getElementsByClassName("boxtext")[5].innerText = "";
    document.getElementsByClassName("boxtext")[6].innerText = "";
    document.getElementsByClassName("boxtext")[7].innerText = "";
    document.getElementsByClassName("boxtext")[8].innerText = "";
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0";
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.height = "0";
    document.querySelector('.line').style.width = '0';
    document.querySelector('.line').style.transition = 'none';
})