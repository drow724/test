const first = () => {
  console.log("무조건 먼저 시작");
};

const last = () => {
  console.log("나는 무조건 나중에 나와야 해요");
};

// const isNotNull = (str) => {
//   first();
//   const bool = str !== null;
//   last();
//   return bool;
// };
// const isNotEmpty = (str) => {
//   first();
//   const bool = str !== "";
//   last();
//   return bool;
// };
// const trim = (str) => {
//   first();
//   const bool = str.trim();
//   last();
//   return bool;
// };

// const strs = ["", null, " 사과", "배 "];

// const filter = strs.filter(isNotNull).filter(isNotEmpty).map(trim);

// console.log(filter);

const isNotNull = (str) => str !== null;

const isNotEmpty = (str) => str !== "";

const trim = (str) => str.trim();

const decorator = (fn) => {
  return (...args) => {
    first();
    const result = fn(...args);
    last();

    return result;
  };
};
const strs = ["", null, " 사과", "배 "];

const filter = strs
  .filter(decorator(isNotNull))
  .filter(decorator(isNotEmpty))
  .map(decorator(trim));

console.log(filter);
