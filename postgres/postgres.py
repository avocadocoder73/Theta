import asyncpg
import asyncio
import os
import json
import requests
import yfinance as yf

async def run():
    conn = await asyncpg.connect(user='postgres', password=os.environ.get('DBPASS'), database='postgres', host='localhost')
    values = await conn.fetch('''
        CREATE TABLE Stock(
            id serial PRIMARY KEY,
            ticker text,
            cik int,
            q1rev int
        )
    ''')
    await conn.close()


async def insert():
    conn = await asyncpg.connect(user='postgres', password=os.environ.get('DBPASS'), database='postgres', host='localhost')
    headers = {'user-agent': 'joe@gmail.com'}
    res = requests.get('https://data.sec.gov/api/xbrl/frames/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax/USD/CY2023Q1.json', headers=headers)
    
  
  
    for i in range(len(res.json()['data'])):
        cik = res.json()['data'][i]['cik']
            value = res.json()['data'][i]['val']

    
   
    query = await conn.execute('''INSERT INTO revenues(cik) SELECT cik FROM stock''')   

    test = await conn.fetch('SELECT column_name FROM information_schema.columns WHERE table_name = $1', "stock")

   

    await conn.close()


asyncio.run(insert())
