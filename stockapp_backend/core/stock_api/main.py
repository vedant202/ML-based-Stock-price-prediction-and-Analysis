# import Nifty50Live_price as nf
from pandas_datareader import data as web
import yfinance
import pandas as pd
from datetime import datetime
from bs4 import BeautifulSoup
import requests as rs
import json
import os


yfinance.pdr_override()
class Nifty50:
    def __init__(self):
        pass
    def getHistoricNifty_YF_Data(self):

        start = str(datetime.now().year -1) +"-"+ str(datetime.now().month)+"-"+ str(datetime.now().day)
        end = str(datetime.now().year) +"-"+ str(datetime.now().month)+"-"+ str(datetime.now().day)
        df = web.get_data_yahoo("^NSEI",start = start ,end = end)
        return df
    
    def getHistoricSensex_data(self):
        start = str(datetime.now().year -1) +"-"+ str(datetime.now().month)+"-"+ str(datetime.now().day)
        end = str(datetime.now().year) +"-"+ str(datetime.now().month)+"-"+ str(datetime.now().day)
        df = web.get_data_yahoo("^BSESN",start = start,end = end)
        return df
    
class StockData:

    def get_data(self,stock_name):
        start = str(datetime.now().year -1) +"-"+ str(datetime.now().month)+"-"+ str(datetime.now().day)
        end = str(datetime.now().year) +"-"+ str(datetime.now().month)+"-"+ str(datetime.now().day)
        df = web.get_data_yahoo(stock_name,start = start,end = end)
        
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
    
class News:
    def get_news(self):


        html = rs.get('https://www.businesstoday.in/latest/economy')
        bs = BeautifulSoup(html.content,"html.parser")
        data = [] 
        m = 1
        print("Get News");
        try:
            print("Inside try");
            for link in bs.find_all('a'): #finds all a anchor tag containing links

                if(str(type(link.string))== "<class 'bs4.element.NavigableString'>" and len(link.string.strip())>35):
                    title = link.string # Extracting title from link
                    date = link.parent.next_sibling.next_sibling.string # Extracting date from link
                    p = date.next_element.next_element.string # Extracting sub para from link
                    
                    # print(str(m)+" Title" + ". " + link.string)
                    # print("Date "+date)
                    # print("P :-"+p)
                    # print()
                    # print(link['href'])
                    
                    html2 = rs.get(link['href']) # Extracting whole news paragraph with request using the url inside of link
                    bs1 = BeautifulSoup(html2.content,"html.parser")
                    div = bs1.find_all("div", {"class": "story-with-main-sec"})
                    div_children = div[0]  #Extracting first element inside div object 
                    div_children_p = div_children.find_all('p')
                    # print(div_children_p)
                    para = ""
                    for p in div_children_p:
                        para += str(p.string) + " \n"
                    # print(para)
                    
                    d = {"title":str(title),
                        "date":str(date),
                        "sub_para":str(p),
                        "link":str(link['href']),
                        "para":para
                        }
                    # print(d)
                    data.append(d)
                    m += 1
           
        except Exception as e:
            print("File not found error in main api"+str(e))
            
                
        return data


# nf = Nifty50()
# print(nf.getHistoricSensex_data())


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

