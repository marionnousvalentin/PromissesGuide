const { timeoutPromise } = require("./promess");

async function main() {
  const promise1 = () => timeoutPromise("1", 500, false);
  const promise2 = () => timeoutPromise("2", 100, false);

  await promise1()
    .then(() => {
      promise2();
    })
    .then(() => console.log("end"));
}

main();
