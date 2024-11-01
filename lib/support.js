const calculate = async (faceamount) => {
  console.log("계산 시작");
  await sleep(Math.random() * 3000);
  console.log("계산 끝");
  return +faceamount + 10;
};

const errorValid = async (faceamount) => {
  console.log("합계 체크 시작");
  await sleep(Math.random() * 3000);
  console.log("합계 체크 끝");

  const $result = $(`[name="result"]`);

  const sum = [...$result].reduce((acc, cur) => {
    const val = $(cur).val();
    return +val + acc;
  }, 0);

  if (sum > 350) {
    $result.css("background-color", "red");
    return;
  }

  $result.css("background-color", "");
};

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
