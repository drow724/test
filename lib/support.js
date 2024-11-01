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
};

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

const domInfo = [
  {
    type: "A1",
    grpNo: "0101",
    id: null,
    linked: null,
    content: "운전을 하십니까?",
    defaultValue: null,
    questionNo: 1,
  },
  {
    type: "B1",
    grpNo: "0101",
    id: "010101",
    linked: null,
    content: "자가용",
    defaultValue: null,
    questionNo: 1,
  },
  {
    type: "B1",
    grpNo: "0101",
    id: "010102",
    linked: null,
    content: "트럭",
    defaultValue: null,
    questionNo: 1,
  },
  {
    type: "B1",
    grpNo: "0101",
    id: "010103",
    linked: null,
    content: "킥보드",
    defaultValue: null,
    questionNo: 1,
  },
  {
    type: "B1",
    grpNo: "0101",
    id: "010104",
    linked: null,
    content: "자전거",
    defaultValue: null,
    questionNo: 1,
  },
  {
    type: "B1",
    grpNo: "0101",
    id: "010105",
    linked: "010106",
    content: "기타",
    defaultValue: null,
    questionNo: 1,
  },
  {
    type: "B4",
    grpNo: "0101",
    id: "010106",
    linked: null,
    content: null,
    defaultValue: null,
    questionNo: 1,
  },
  {
    type: "A1",
    grpNo: "0102",
    id: null,
    linked: null,
    content: "신체 정보를 입력해 주세요",
    defaultValue: null,
    questionNo: 2,
  },
  {
    type: "B3",
    grpNo: "0102",
    id: "010201",
    linked: null,
    content: "키",
    defaultValue: null,
    questionNo: 2,
  },
  {
    type: "B3",
    grpNo: "0102",
    id: "010202",
    linked: null,
    content: "몸무게",
    defaultValue: null,
    questionNo: 2,
  },
  {
    type: "A1",
    grpNo: "0103",
    id: null,
    linked: null,
    content: "근무처 정보를 알려주세요.",
    defaultValue: null,
    questionNo: 3,
  },
  {
    type: "B1",
    grpNo: "0103",
    id: "010301",
    linked: null,
    content: "근무처",
    defaultValue: "인포메이션 카페",
    questionNo: 3,
  },
  {
    type: "B3",
    grpNo: "0103",
    id: "010302",
    linked: null,
    content: "근무 지역",
    defaultValue: null,
    questionNo: 3,
  },
];
