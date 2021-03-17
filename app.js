// 只要要知道每個字的大小
const text = document.querySelectorAll(".thePaths");
for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i + 1} length is ${text[i].getTotalLength()}`);
}

// 片頭動畫透明化
const lastWord = document.querySelector("#eighteen");
const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend", () => {
  animation.style = "transition: all 1s ease; opacity: 0; pointer-events: none;";
});
