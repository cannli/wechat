const db = require('../db')
const theatersCrawler = require('./crawler/theatersCrawler')
const saveTheaters = require('./save/saveTheaters')
const Theaters = require('../model/Theaters');
// (async () => {
//     await db
//     await theatersCrawler()
//     await saveTheaters()
// })

// (async () => {
//     await db
//     const data = await theatersCrawler()
//     await saveTheaters(data)
// })()
asyncFn()

async function asyncFn() {
     await db
    // const data = await theatersCrawler()
    // await saveTheaters(data)
    // const data = await Theaters.find({}, {title: 1, summary: 1, posterKey: 1, doubanId: 1, _id: 0})
    // console.log(data, 'data')
}