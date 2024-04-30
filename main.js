let result = 0;

const resultEl = document.querySelector(".result");

resultEl.innerHTML = result;

// 13글자가 넘어가지면 입력이 안되게

function onClickNumber(number) {
  if (resultEl.innerHTML.length >= 13) return;

  if (resultEl.innerHTML === "0") {
    resultEl.innerHTML = number;
  } else {
    resultEl.innerHTML += number;
  }
}
