function timeoutPromise(message, timeout, error) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      if (error) reject(error);
      resolve("success");
    }, timeout);
  });
}

module.exports = {
  timeoutPromise
};
