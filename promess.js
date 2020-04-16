function timeoutPromise(message, timeout, error) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) return reject(error);
      console.log(message);
      return resolve(message);
    }, timeout);
  });
}

module.exports = {
  timeoutPromise
};
