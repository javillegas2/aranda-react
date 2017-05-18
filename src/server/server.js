import express from 'express'

const app = express()

app.use(express.static('public'))

app.listen(9090, () => {
    console.log("listen on http://localhost:9090")
})


