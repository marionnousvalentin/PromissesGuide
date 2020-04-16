const { timeoutPromise } = require("../promess");

async function callPromise() {
  return timeoutPromise("1", 100, false);
}

async function main() {
  await callPromise();
  process.exit();
}

main();
