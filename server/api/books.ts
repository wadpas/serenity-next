import data from './books.json'

export default defineEventHandler(async () => {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
})
