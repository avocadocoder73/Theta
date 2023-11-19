const express = require('express')
const axios = require('axios')
const app = express()
const port = 4000;

app.get('/rss', async (req,res) => {
    try{

        const headers = {'User-Agent': "younoob.ca@gmail.com"}

        const response =  axios.get("https://data.sec.gov/api/xbrl/frames/us-gaap/GrossProfit/USD/CY2019Q1.json", {headers:headers}).then((res) => console.log(res.data)).catch((err) => console.log(err))

       
        res.send(response.data)
    } catch(err)
    {
        console.log(err)
        res.status(404)
    }
})

app.listen(port, () => {
    console.log('Server is running')
})

//https://www.sec.gov/rss/rules/proposed.xml