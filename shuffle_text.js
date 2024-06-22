const strings = ["[#@si{yg&", "7o04e0!&-", "ip]@3&s$o", "[fg7[82w}", "l)h67ypjk", "t%vem*j&1", "(1%#(2qdx"];
const rotatingSpan = document.querySelectorAll(".rotatingSpan");
let index = 0;
const velocity = 100; // Time in milliseconds

function rotateString() {
  rotatingSpan.forEach((text) => {
    text.textContent = strings[index];
  });
  index = (index + 1) % strings.length;
}

setInterval(rotateString, velocity);