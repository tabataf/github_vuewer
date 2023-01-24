function later(result) {
  return new Promise(function(resolve) {
      setTimeout(() => {
          resolve(result)
      }, 1000);
  });
}


export const api = {
  async search_users(searchstring){
      const result = {
          items: [
              {login: 'batata'},
              {login: 'marcele'},
          ]
      }
      return later(result)
  },
  async lista_repos(username){
      const result = [
          {name: 'Django', owner: {login: 'batata'}},
          {name: 'Vue.js', owner: {login: 'marcele'}},
      ]
      return later(result)
  }
}