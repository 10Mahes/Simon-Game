let gameSeq = [];
let userSeq = [];

let color = ["red", "green", "yellow", "purple"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

//start
document.addEventListener("keypress", () => {
  if (start === false) {
    console.log("game started");
    start = true;

    levelUp();
  }
});

//flash color
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}

//main function
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  let randomIdx = Math.floor(Math.random() * 3);
  let randomColor = color[randomIdx];
  let randomBtn = document.querySelector(`.${randomColor}`);
  //   console.log(randomIdx);
  //   console.log(randomColor);
  //   console.log(randomBtn);
  gameSeq.push(randomColor);
  console.log(gameSeq);
  gameFlash(randomBtn);
}

//user clicked button
let button = document.querySelectorAll(".btn");
for (btn of button) {
  btn.addEventListener("click", btnPress);
}

//button press function
function btnPress() {
  let btn = this;
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  gameFlash(btn);
  check(userSeq.length - 1);
}

//validation
function check(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(() => {
        levelUp();
      }, 500);
    }
  } else {
    h2.innerText = "Game Over Press any key to start";
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "black";
    }, 1000);

    reset();
  }
}

//game reset
function reset() {
  start = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
