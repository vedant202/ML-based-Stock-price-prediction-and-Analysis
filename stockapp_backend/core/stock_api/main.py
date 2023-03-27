# import Nifty50Live_price as nf
from pandas_datareader import data as web
import yfinance
import pandas as pd

yfinance.pdr_override()
class Nifty50:
    def __init__(self):
        pass
    def getHistoricNifty_YF_Data(self,start,end):

        
        df = web.get_data_yahoo("^NSEI",start = "2023-01-01",end = "2023-02-11")
        return df
    def getHistoricSensex_data(self,start,end):

        df = web.get_data_yahoo("^BSESN",start = "2023-01-01",end = "2023-02-11")
        return df
    
class StockData:

    def get_data(self,stock_name):
        df = web.get_data_yahoo(stock_name,start = "2023-01-01",end = "2023-02-11")
        
        # finance
        
        return df
    
    def get_finance_data_yahoo(self,stock_name):
        finance__dict = {}

        try:
            finance = web.get_quote_yahoo(stock_name)
            finance__dict = finance.to_dict()
        except Exception as e:
            print("Error in finance data yahoo ",e )
        

        return finance__dict
    

# RELIANCE.NS

# Index(['language', 'region', 'quoteType', 'typeDisp', 'quoteSourceName',
#        'triggerable', 'customPriceAlertConfidence', 'currency', 'exchange',
#        'shortName', 'longName', 'messageBoardId', 'exchangeTimezoneName',
#        'exchangeTimezoneShortName', 'gmtOffSetMilliseconds', 'market',
#        'esgPopulated', 'marketState', 'regularMarketChangePercent',
#        'regularMarketPrice', 'earningsTimestamp', 'earningsTimestampStart',
#        'earningsTimestampEnd', 'trailingAnnualDividendRate', 'trailingPE',
#        'trailingAnnualDividendYield', 'epsTrailingTwelveMonths', 'epsForward',
#        'sharesOutstanding', 'bookValue', 'fiftyDayAverage',
#        'fiftyDayAverageChange', 'fiftyDayAverageChangePercent',
#        'twoHundredDayAverage', 'twoHundredDayAverageChange',
#        'twoHundredDayAverageChangePercent', 'marketCap', 'forwardPE',
#        'priceToBook', 'sourceInterval', 'exchangeDataDelayedBy',
#        'firstTradeDateMilliseconds', 'priceHint', 'regularMarketChange',
#        'regularMarketTime', 'regularMarketDayHigh', 'regularMarketDayRange',
#        'regularMarketDayLow', 'regularMarketVolume',
#        'regularMarketPreviousClose', 'bid', 'ask', 'bidSize', 'askSize',
#        'averageDailyVolume3Month', 'averageDailyVolume10Day',
#        'fiftyTwoWeekLowChange', 'fiftyTwoWeekLowChangePercent',
#        'fiftyTwoWeekRange', 'fiftyTwoWeekHighChange',
#        'fiftyTwoWeekHighChangePercent', 'fiftyTwoWeekLow', 'fiftyTwoWeekHigh',
#        'averageAnalystRating', 'tradeable', 'cryptoTradeable', 'price'],
#       dtype='object')

# sd = StockData()
# df_json = sd.get_data('RELIANCE.NS').to_json()
# print(df_json)

# # print(nf.getHistoricSensex_data(1,2))
# print("TCS.NS")
