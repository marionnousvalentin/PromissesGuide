async function timeoutPromise(message, timeout, error) {
  return await setTimeout(() => {
    console.log(message);
    if (error) throw new Error("error");
    return message;
  }, timeout);
}

async function main() {
  const promise1 = () => timeoutPromise("promesse 1", 100, false);
  const promise2 = () => timeoutPromise("promesse 2", 500, false);
  await promise2();
  await promise1();
}

main();
