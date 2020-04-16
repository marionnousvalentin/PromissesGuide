const { timeoutPromise } = require("./promess");

async function main() {
  const promise1 = () => timeoutPromise("1", 100, false);
  const promise2 = () => timeoutPromise("2", 200, false);
  const promise3 = () => timeoutPromise("3", 300, false);
  const array = [promise1, promise2, promise3];
  await Promise.all(array);
  console.log("end");
}
main();
