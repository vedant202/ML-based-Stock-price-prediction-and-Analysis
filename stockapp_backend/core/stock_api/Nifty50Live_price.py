from pandas_datareader import data as web

import yfinance

def nifty50YahooFinanceData(start,end):
    yfinance.pdr_override()
    df = web.get_data_yahoo("^NSEI",start = "2023-01-01",end = "2023-02-11")
    return df