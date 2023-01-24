function later(result) {
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve(result);
      }, 1000);
    });
  }
  
  export const api = {
    async getUsers(searchString) {
      const result = { items: [{ login: "batata" }, { login: "marcele" }] };
      return later(result);
    },
  
    async getRepos(username) {
      const result = [{ name: "hello" }, { name: "ola" }];
      return later(result);
    },
  };