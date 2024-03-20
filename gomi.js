'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// h2:現在時刻と経過時間
function nowTimeDisplay() {             // 現在時刻表示
  let nowTime = new Date();
  let nowHour = set2fig(nowTime.getHours());
  let nowMin = set2fig(nowTime.getMinutes());
  let nowSec = set2fig(nowTime.getSeconds());
  const currentTime = document.getElementById("time");
  currentTime.innerText = `現在時刻${nowHour}:${nowMin}:${nowSec}`;
}
function culcPassTimeDisplay() {        // 経過時間表示
  let diff = (Date.now() - startTime) / 1000;
  let sec = set2fig(Math.floor(diff % 60));
  let min = set2fig(Math.floor(diff % 3600 / 60));
  let hour = set2fig(Math.floor(diff % 86400 / 3600));
  const pass = document.getElementById("pass-time");
  if (timerActive) {
    pass.innerText = `${hour}:${min}:${sec}`;
    lastTime = pass.innerText;
  } else {
    pass.innerText = lastTime;
  }
}
const start = document.getElementById("start");
start.addEventListener("click", timerManager);  // startボタンクリック
let startTime;
let lastTime = "--:--:--";
let timerActive = false;
function timerManager() {
  if (start.innerText === "プレゼン開始") {
    startTime = new Date();
    timerActive = true;
    start.innerText = "プレゼン停止";
  } else if (start.innerText === "プレゼン停止") {
    timerActive = false;
    start.innerText = "プレゼン開始";
  }
}
function set2fig(num) {                 // 1桁=>2桁
  let result = num;
  if (num < 10) {
    result = "0" + num;
  }
  return result;
}
setInterval(nowTimeDisplay,1000);       // 1000ms毎にnowTimeDisplay実行
setInterval(culcPassTimeDisplay,1000);

// Area:tab-wrap
const div = document.getElementsByTagName("div");
const p = document.getElementsByTagName("p");
// Area:tab-wrap/TAB-01
const img1 = document.createElement("img");
const a = document.createElement("a");
const button = document.getElementById("button-1");
button.addEventListener("click", challengeMakeApp);
function challengeMakeApp() {
  p[1].style.fontSize = "20px";
  p[1].innerText = "「🍆家庭菜園」App作成してみました！\n\n";
  img1.src = "gardening.jpg";
  img1.style.width = "40%";
  img1.className = "keyframe animation";    // アニメーション
  p[1].appendChild(img1);
  a.innerText = "\n< 昨年栽培の🍆ナス >";
  a.style.fontSize = "15px";
  p[1].appendChild(a);
}

// Area:tab-wrap/TAB-02
let pArray = [];                // makeVegetable()で生成したタグに後からアクセスできるよう設定
let vegeArray = [];
let aArray = [];

const vegetable = document.getElementById("vegetable");     // 野菜名input
const makeButton = document.getElementById("make-button");  // 生成button
makeButton.addEventListener("click", makeVegetable);        // 生成button clickイベント発生

function increaseCount (e) {
  const indexNo = parseInt(e.currentTarget.dataset['index']); // index No.取得=>number型
  const cnt = parseInt(aArray[indexNo].innerText) + 1;        // +1
  aArray[indexNo].innerText = String(cnt);                    // =>string型 & 表示へ反映
}

function decreaseCount (e) {
  const indexNo = parseInt(e.currentTarget.dataset['index']); // index No.取得=>number型
  let cnt = parseInt(aArray[indexNo].innerText) - 1;          // -1
  if (cnt < 0) {
    cnt = 0;
  }
  aArray[indexNo].innerText = String(cnt);                    // =>string型 & 表示へ反映
}

function removeElement (e) {
  const indexNo = parseInt(e.currentTarget.dataset['index']); // index No.取得=>number型
  pArray[indexNo].remove();                                   // 表示を消す
}
  
function makeVegetable() {
  if (vegetable.value) {                                  // 入力あり=>実行
    const p = document.createElement("p");                // 追加Area設定
    const vegeName = document.createElement("ul");        // 野菜名Area
    const plusButton = document.createElement("button");  // ＋ボタンArea
    const minusButton = document.createElement("button"); // ーボタンArea
    const counter = document.createElement("a");          // カウンターArea
    const garbageCan = document.createElement("button");  // ゴミ箱Area
    
    pArray.push(p);                                       // 追加したAreaを変数に格納
    vegeArray.push(vegeName);
    aArray.push(counter);
    
    p.className = "counter-area";                         // css class名設定
    vegeName.className = "vege-name";
    plusButton.className = "counter-button";
    minusButton.className = "counter-button";
    counter.className = "counter";
    garbageCan.className = "garbageCan-button";
      
    plusButton.dataset.index = String(pArray.length - 1);   // 追加したボタンにindex付与
    minusButton.dataset.index = String(pArray.length - 1);
    garbageCan.dataset.index = String(pArray.length - 1);

    vegeName.innerText = vegetable.value;                 // Areaのtext設定
    plusButton.innerText = "＋";
    minusButton.innerText = "ー";
    counter.innerText = "0";                              // カウンター初期値は"0"とする
    garbageCan.innerText = "🗑️";
    vegetable.value = "";                                 // inputエリアの表示をクリア
      
    div[2].appendChild(p);                                // 出現させる
    p.appendChild(vegeName);
    p.appendChild(plusButton);
    p.appendChild(minusButton);
    p.appendChild(counter);
    p.appendChild(garbageCan);

    plusButton.addEventListener("click", increaseCount);  // 追加ボタンのclickイベント設定
    minusButton.addEventListener("click", decreaseCount);
    garbageCan.addEventListener("click", removeElement);
  }
}

// Area:tab-wrap/TAB-03
const day1_5 = document.getElementById("day1-5");
day1_5.addEventListener("click", addText1_5);
function addText1_5() {
  day1_5.innerText = "(1)day1 - 5:　　😄スマイル! (function, ペアプロ, if)";
}
const day6_10 = document.getElementById("day6-10");
day6_10.addEventListener("click", addText6_10);
function addText6_10() {
  day6_10.innerText = "(2)day6 -10:　　🤨むむむ...! (object, for loop, pass by..)";
}
const day11_15 = document.getElementById("day11-15");
day11_15.addEventListener("click", addText11_15);
function addText11_15() {
  day11_15.innerText = "(3)day11-15:　　🤯混乱？？？ (closures, method, DOM)";
}
const day16_20 = document.getElementById("day16-20");
day16_20.addEventListener("click", addText16_20);
function addText16_20() {
  day16_20.innerText = "(4)day16-20:　　🤩覚醒した!!　";
  day16_20.style.backgroundColor = "aqua";
  for (let i = 0; i < 7; i++) {
  const a = document.createElement("a");
  a.innerText = "🐊"
  a.style.fontSize = "30px";
  a.style.marginLeft = "10px";
  a.className = "keyframe2 animation";    // アニメーション
  const p = document.getElementById("day16-20");
  p.appendChild(a);
  }
}
const thanks = document.getElementById("thank-you");
thanks.addEventListener("click", addTextLastly);
function addTextLastly() {
  thanks.innerText = "🎉 Mission completed. 🎉\n\n";
  thanks.innerText += "とても価値ある楽しい体験ができました！\n";
  thanks.innerText += "ありがとうございました See you.😊\n";
}

