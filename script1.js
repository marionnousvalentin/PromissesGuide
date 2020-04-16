async function timeoutPromise(message, timeout, error) {
  return await setTimeout(() => {
    console.log(message);
    if (error) throw new Error("error");
    return message;
  }, timeout);
}

async function main() {
  await timeoutPromise("2", 500, false);
  await timeoutPromise("1", 100, false);
}

main();
