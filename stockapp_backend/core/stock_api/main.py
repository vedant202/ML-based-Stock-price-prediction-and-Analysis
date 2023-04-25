# import Nifty50Live_price as nf
from pandas_datareader import data as web
import yfinance
import pandas as pd
from datetime import datetime
from bs4 import BeautifulSoup
import requests as rs
import json
import os
import numpy as np
import pandas as pd
import talib as tb
from sklearn.preprocessing import MinMaxScaler
# from tensorflow.keras.models import Sequential
# from tensorflow.keras.layers import Dense,Dropout,LSTM
import matplotlib.pyplot as plt

from joblib import Parallel, delayed
import joblib
# from skl


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
    df = pd.DataFrame()
    def get_data(self,stock_name):
        start = str(datetime.now().year -1) +"-"+ str(datetime.now().month)+"-"+ str(datetime.now().day)
        end = str(datetime.now().year) +"-"+ str(datetime.now().month)+"-"+ str(datetime.now().day)
        self.df = web.get_data_yahoo(stock_name,start = start,end = end)
        
        # finance
        
        return self.df
    
    def get_finance_data_yahoo(self,stock_name):
        finance__dict = {}

        try:
            finance = web.get_quote_yahoo(stock_name)
            finance__dict = finance.to_dict()
        except Exception as e:
            print("Error in finance data yahoo ",e )
        return finance__dict
    
    def technical_analysis(self,stock_name):
        # self.df = self.get_data(stock_name=stock_name);
        self.df.reset_index(inplace=True)
        self.df['Date'] = self.df['Date'].dt.strftime('%Y-%m-%d')
        data = self.df.copy()
        data['SMA_100'] = tb.SMA(data['Close'],100)
        data['SMA_50'] = tb.SMA(data['Close'],50)
        data['RSI'] = tb.RSI(data['Close'])

        print(data)
        return data

    tickers = ['RELIANCE.NS','TCS.NS','HDFCBANK.NS','INFY.NS','HINDUNILVR.NS','ICICIBANK.NS']
    open_price = {}
    close_price = {}
    
    def getOpenCloseStockPrice(self):
        try:
            for ticker in self.tickers:
                start = str(datetime.now().year) +"-"+ str(datetime.now().month-1)+"-"+ str(datetime.now().day)
                end = str(datetime.now().year) +"-"+ str(datetime.now().month)+"-"+ str(datetime.now().day)
                df = web.get_data_yahoo(ticker,start = start,end = end)
                # print(ticker,df.tail(1)['Close'][0])
                self.open_price[ticker] = df.tail(1)['Open'][0]
                self.close_price[ticker] = df.tail(1)['Close'][0]
            
        except Exception as e:
            print("Error in getOpenCloseStockPrice ",e)
        return self.open_price,self.close_price

    def getNiftyStockListData(self):
        tickers = ['ADANIENT.NS','BAJFINANCE.NS','TATAMOTORS.NS','TCS.NS','HDFCBANK.NS','INFY.NS','HINDUNILVR.NS','ICICIBANK.NS','SUNPHARMA.NS','EICHERMOT.NS']
        test_start = str(datetime.now().year) +"-"+ str(datetime.now().month)+"-"+ str(datetime.now().day-1)
        test_end = str(datetime.now().year) +"-"+ str(datetime.now().month)+"-"+ str(datetime.now().day)
        test_df = web.get_data_yahoo(tickers,start=test_start,end=test_end)
        stock_dict = {}
        for column in test_df['Open'].columns:
            stock_dict[column]= [test_df['Open'][column].values[0],test_df['Close'][column].values[0]]
        return stock_dict

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

class TrainStockModel:
    tickers = ['RELIANCE.NS','TCS.NS','HDFCBANK.NS','INFY.NS','HINDUNILVR.NS','ICICIBANK.NS']
    # def trainStock(self,ticker):
    #     # company = "RELIANCE.NS"
    #     company = ticker
    #     start = "2013-1-1"
    #     end = str(datetime.now().year) +"-"+ str(datetime.now().month)+"-"+ str(datetime.now().day)
    #     df = web.get_data_yahoo(company,start=start,end=end) 
    #     scaler = MinMaxScaler(feature_range=(0,1))
    #     reshape_close = df['Close'].values.reshape(-1,1)
    #     scaled_data = scaler.fit_transform(reshape_close)
    #     prediction_days = 60
    #     x_train = []
    #     y_train = []
    #     for x in range(prediction_days,len(scaled_data)):
    #         x_train.append(scaled_data[x-prediction_days:x,0])
    #         y_train.append(scaled_data[x,0])
    #     x_train,y_train = np.array(x_train),np.array(y_train)
    #     x_train = np.reshape(x_train,(x_train.shape[0],x_train.shape[1],1))
    #     model = Sequential()
    #     model.add(LSTM(units=50,return_sequences=True,input_shape=(x_train.shape[1],1)))
    #     model.add(Dropout(0.2))
    #     model.add(LSTM(units=50,return_sequences=True))
    #     model.add(Dropout(0.2))
    #     model.add(LSTM(units=50))
    #     model.add(Dropout(0.2))
    #     model.add(Dense(units=1))

    #     model.compile(optimizer="adam",loss="mean_squared_error")
    #     model.fit(x_train,y_train,epochs=40,batch_size=32)
                
    #     test_start = "2022-2-1"
    #     test_end = "2023-1-1"
    #     test_df = web.get_data_yahoo(company,start=test_start,end=test_end)
    #     actual_prices = test_df['Close'].values
    #     total_dataset = pd.concat((df['Close'],test_df['Close']),axis=0)

    #     model_inputs = total_dataset[len(total_dataset) - len(test_df) - prediction_days:].values
    #     model_inputs = model_inputs.reshape(-1,1)
    #     model_inputs = scaler.transform(model_inputs)
    #     x_test = []
    #     for i in range(prediction_days,len(model_inputs)):
    #         x_test.append(model_inputs[i-prediction_days:i,0])
    #     x_test = np.array(x_test)
    #     x_test = np.reshape(x_test,(x_test.shape[0],x_test.shape[1],1))
    #     predictd_prices = model.predict(x_test)
    #     predictd_prices = scaler.inverse_transform(predictd_prices)

    #     joblib.dump(model,f"../models_prediction/{company[:len(company)-3]}.pkl")
        # plt.plot(actual_prices,color='black',label = f"Actual Prices of {company}")
        # plt.plot(predictd_prices,color='green',label = f"Predicted Prices of {company}")
        # plt.title(f"{company} share price")
        # plt.xlabel("time")
        # plt.ylabel(f"{company} share price")
        # plt.legend()
        # plt.show()
    def m(self,company):
        print("In m")
        # company = 'HDFCBANK.NS'
        test_start = str(datetime.now().year-1) +"-"+ str(datetime.now().month-2)+"-"+ str(datetime.now().day)
        test_end = str(datetime.now().year) +"-"+ str(datetime.now().month)+"-"+ str(datetime.now().day)
        test_df = web.get_data_yahoo(company,start=test_start,end=test_end)
        test_df = test_df.reset_index()
        actual_prices = test_df['Close'].values
        reshape_close = test_df['Close'].values.reshape(-1,1)
        scaler = MinMaxScaler(feature_range=(0,1))
        scaled_data = scaler.fit_transform(reshape_close)
        prediction_days = 60
        x_test = []
        # y_train = []
        for x in range(prediction_days,len(scaled_data)):
            x_test.append(scaled_data[x-prediction_days:x,0])
                    # y_train.append(scaled_data[x,0])
        x_test = np.array(x_test)
        x_test = np.reshape(x_test,(x_test.shape[0],x_test.shape[1],1))
        print(x_test.shape)
        model = joblib.load("D:\Stock_PricePredictionAnd Analysis\project Code\stockapp_backend\core\models_prediction\HDFCBANK.pkl")
        predictd_prices = model.predict(x_test)
        predictd_prices = scaler.inverse_transform(predictd_prices)
        print(predictd_prices[-10:],actual_prices[-10:])
        print(predictd_prices.shape,actual_prices.shape)

        return predictd_prices
    # plt.plot(test_df['Date'][60:],actual_prices[60:],color='black',label = f"Actual Prices of {company}")
    # plt.plot(test_df['Date'][60:],predictd_prices,color='green',label = f"Predicted Prices of {company}")
    # plt.title(f"{company} share price")
    # plt.xlabel("time")
    # plt.ylabel(f"{company} share price")
    # plt.legend()
    # plt.show()



# tsm = TrainStockModel()
# prediction = tsm.m("INFY.NS")
# print(prediction)
# for ticker in tsm.tickers:
#     tsm.trainStock(ticker)


# sd = StockData()
# sd.get_data('HDFCBANK.NS')
# sd.technical_analysis('HDFCBANK.NS')
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

