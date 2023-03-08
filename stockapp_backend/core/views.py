from django.shortcuts import render

import stock_api.main

n = stock_api.main.Nifty50()
start = "2023-01-01"
end = "2023-02-11"
print(n.getHistoricNifty_YF_Data(start=start,end=end))

# def get_nifty_stock_price(req,res):

# Create your views here.
