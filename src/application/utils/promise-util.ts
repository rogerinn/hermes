export const promy = (client: any) => {
    for (let method in client) {
        client[`${method}Async`] = (parameters: any) => {
          return new Promise((resolve, reject) => {
            client[method](parameters, (err: any, response: any) => {
              if (err) reject(err)
              resolve(response)
            })
          })
        }
      }
  }