const { timeoutPromise } = require("./promess");
async function main2() {
  const promise1 = () => timeoutPromise("1", 500, false);
  const promise2 = () => timeoutPromise("2", 100, "error");
  const promise3 = () => timeoutPromise("3", 400, false);
  const array = [promise1, promise2, promise3];

  await Promise.all(array.map(promise => promise()));
  console.log("end");
}
// main();
main2();
