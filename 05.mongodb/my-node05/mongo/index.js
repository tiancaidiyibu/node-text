const express = require("express")
const app = express()
const path = require ('path')
const mongo = require("./models/db")


app.get('/',(req,res)=>{
    res.sendFile(path.resolve('./index.html'))
})
app.get("/api/category", async (req, res) => {
    const col = mongo.col("fruits")
    const data = await col.distinct('category')
    res.json({ ok: 1, data })
})

app.get('/api/list',async(req,res)=>{
    const { page }  = req.query
    try {
        const col = mongo.col('fruits')
        const total = await col.find().count()
        // console.log(total)
        const fruits = await col
            .find()
            .skip((page-1)*5)
            .limit(5)
            .toArray()
        res.json({ ok: 1, data: { fruits, pagination: { total, page } } })
    } catch (error) {
        console.log(error)
    }
})

app.listen(3000)