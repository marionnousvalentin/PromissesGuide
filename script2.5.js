const { timeoutPromise } = require("./promess");

async function main() {
  const promise0 = timeoutPromise("0", 500, false);
  const promise1 = () => timeoutPromise("1", 500, false);

  await promise1();
  await promise0;
  console.log("end");
}

main();

// exemple dans les tests unitaires :
// const moockFunction = jest.fn(() => Promise.resolve('truc));
// const moockFunction = jest.fn().mockImplementation(() => new Promise((resolve) => {resolve('truc')}));
