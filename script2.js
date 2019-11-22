const { timeoutPromise } = require("./promess");

async function main2() {
  const promise1 = () => timeoutPromise("promesse 1", 500, false);
  const promise2 = () => timeoutPromise("promesse 2", 100, false);
  const promise3 = () => timeoutPromise("promesse 3", 400, false);

  await promise1()
    .then(() => {
      return [(promise2(), promise3())];
    })
    .then(() => console.log("Finished"));
}
// main();

main2();
