'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function countGators() {
  let count;
  const number = document.getElementById("number");
  const out = document.getElementsByClassName("output-area");
  count = parseInt(number.value);   //文字列を数字に変換
  out[0].textContent = "";          //最初からある🍎を消す
  for (let i = 0; i < count; i++) {
    // out[0].textContent += "🐊\n"; // textContentでは改行は無効となる
    if ((i + 1) % 10 === 0) {
      out[0].innerText += "🐊\n";   // 10個目で改行
    } else {
      out[0].innerText += "🐊";
    }
  }
}

const button = document.getElementById("button");
button.addEventListener("click", countGators);
