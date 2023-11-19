
const file = require('./company_tickers.json')



const test = JSON.stringify(file)


class Sector
{
    constructor(sector)
    {
        this.sector = sector
    }
}
class Stock
{

    constructor(ticker, cik_str, title)
    {
        this.ticker = ticker
        this.cik_str = cik_str
        this.title = title
        
    }

   SetRevenue(revenues, quarter, year)
   {
      

        if(quarter == 1)
        this['r' + year + 'q1'] = revenues
        if(quarter == 2)
            this['r' + year + 'q2'] = revenues
        if(quarter == 3)
            this['r' + year + 'q3'] = revenues
        if(quarter == 4)
           this['r' + year + 'q4'] = revenues
   }
   SetGrossProfit(grossprofit, quarter, year)
   {
        if(quarter == 1)
        this['gp' + year + 'q1'] = grossprofit
        if(quarter == 2)
            this['gp' + year + 'q2'] = grossprofit
        if(quarter == 3)
            this['gp' + year + 'q3'] = grossprofit
        if(quarter == 4)
           this['gp' + year + 'q4'] = grossprofit
   }
   getCik()
   {
     return this.cik_str
   }
}

const length = Object.keys(file).length

const sectors = []


for(let i = 0; i < length; i++)
{
    sectors.push(new Stock(file[i].ticker, file[i].cik_str, file[i].title))
}

//search for 


async function setTicks()
{
    let grossprofit = []
    let response2023q2 = (await fetch('https://data.sec.gov/api/xbrl/frames/us-gaap/Revenues/USD/CY2023Q2.json')).text()
    let response2023q1 = (await fetch('https://data.sec.gov/api/xbrl/frames/us-gaap/Revenues/USD/CY2023Q1.json')).text()
    let response2022q4 = (await fetch('https://data.sec.gov/api/xbrl/frames/us-gaap/Revenues/USD/CY2022Q4.json')).text()
    let response2022q3 = (await fetch('https://data.sec.gov/api/xbrl/frames/us-gaap/Revenues/USD/CY2022Q3.json')).text()
    let response2 = (await fetch('https://data.sec.gov/api/xbrl/frames/us-gaap/GrossProfit/USD/CY2019Q1.json')).text()

    
  
    let r2023q2 = JSON.parse((await response2023q2))
    let r2023q1 = JSON.parse((await response2023q1))
    let r2023q3 = JSON.parse((await response2022q3))
    let r2022q4  = JSON.parse((await response2022q4))
    

    let p2 = JSON.parse((await response2))
    


    for(let i = 0; i < sectors.length; i++)
    {
        
        let cik = sectors[i].getCik()
       
        let foundrq22023 = r2023q2.data.find((item) => item.cik == cik)
        let foundrq12023 = r2023q1.data.find((item) => item.cik == cik)
        let foundrq32023 = r2023q3.data.find((item) => item.cik == cik)
        let foundrq42022 = r2022q4.data.find((item) => item.cik == cik)
        
        let foundgp = p2.data.find((item) => item.cik == cik)

        
        if(foundrq12023)
            sectors[i].SetRevenue(foundrq12023.val, 1, 2023)
        if(foundrq22023)
            sectors[i].SetRevenue(foundrq22023.val, 2, 2023)
        if(foundrq32023)
            sectors[i].SetRevenue(foundrq32023.val, 3, 2023)
        if(foundrq42022)
            sectors[i].SetRevenue(foundrq42022.val, 4, 2022)

        if(foundgp != null)
        {
            sectors[i].SetGrossProfit(foundgp.val, 1, 2019)
        }
        
    }
    
    console.log(sectors[5])
    console.log(sectors[6])
    console.log(sectors[10])
    
}



setTicks()

