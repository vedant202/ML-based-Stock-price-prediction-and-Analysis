# import Nifty50Live_price as nf
from pandas_datareader import data as web
import yfinance
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

# nf = Nifty50()
# print(nf.getHistoricSensex_data(1,2))

