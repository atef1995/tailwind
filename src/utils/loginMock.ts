const loginMock = async (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === " " || password === " ") {
        reject("Email and Password is required");
      } else {
        resolve("Login success");
      }
    }, 2000);
  });
};

export default loginMock;
