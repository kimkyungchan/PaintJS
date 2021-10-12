const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "black";
ctx.lineWidth = "2.5";

let painting = false;

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath(); //선의 시작점을 알림
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y); //선의 시작path, 마지막path 연결
    ctx.stroke(); // strokeStyle로 path를 표시
  }
}

function onMouseDown(event) {
  painting = true;
}

function onMouseLeave(event) {
  painting = false;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
