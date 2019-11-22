const { timeoutPromise } = require("./promess");
async function main2() {
  const promise1 = () => timeoutPromise("!", 500, false);
  const promise2 = () => timeoutPromise("APPETIT", 400, "!");
  const promise3 = () => timeoutPromise("BON", 200, false);
  const array = [promise1, promise2, promise3];

  try {
    await Promise.all(
      array.map(async promise => {
        return await promise();
      })
    );
  } catch (error) {
    console.log(error);
  }
  process.exit();
}
main();
