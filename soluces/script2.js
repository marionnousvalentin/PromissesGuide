const { timeoutPromise } = require("../promess");
async function main2() {
  const promise1 = () => timeoutPromise("promesse 1", 500, false);
  const promise2 = () => timeoutPromise("promesse 2", 100, false);

  await promise1()
    .then(() => {
      return promise2();
    })
    .then(() => console.log("finished"));
}

main2();
