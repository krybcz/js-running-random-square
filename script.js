const boxGreen = document.querySelector(".box");
let scaleW = 100;
let scaleOK = true;

// random box position on click  in browser window area //

const clickGenaratePos = document.addEventListener("click", function() {
  let [randomPosY, randomPosX] = [
    Math.random() * window.innerHeight,
    Math.random() * window.innerWidth
  ];
  // let randomPosY = Math.random() * 400;
  // let randomPosX = Math.random() * 400;
  boxGreen.style.top = randomPosY + "px";
  boxGreen.style.left = randomPosX + "px";

  console.log("position next!");
});

// animate box as mouse over screen

// document.addEventListener("mousemove", function() {
//   if (scaleOK == true) {
//     scaleW += 2;
//     boxGreen.style.width = scaleW + "px";
//     boxGreen.style.height = scaleW + "px";
//   } else {
//     scaleW -= 2;
//     boxGreen.style.width = scaleW + "px";
//     boxGreen.style.height = scaleW + "px";
//   }

//   if (scaleW >= 150) {
//     scaleOK = false;
//   } else if (scaleW <= 0) {
//     scaleOK = true;
//   }

//   document.addEventListener("click", function() {
//     //change border
//     if (boxGreen.style.border === "3px solid black") {
//       boxGreen.style.border = "0px solid black";
//     } else {
//       boxGreen.style.border = "3px solid black";
//     }

//     // change for blue
//     if (boxGreen.style.backgroundColor === "blue") {
//       boxGreen.style.backgroundColor = "green";
//     } else {
//       boxGreen.style.backgroundColor = "blue";
//     }
//   });

//   document.addEventListener("keydown", function() {
//     boxGreen.style.borderRadius = "50%";
//   });

//   console.log(scaleW);
// });
