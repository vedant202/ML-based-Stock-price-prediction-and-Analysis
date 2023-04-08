from django.shortcuts import render
from django.http import JsonResponse
import json
from django.middleware.csrf import get_token
from core.models import Contact_db
# from userprofile.models import Profile
from .stock_api import main 
# from django.contrib.auth.models import User
from datetime import datetime
from .models import User
from django.contrib.auth import authenticate,login
from django.contrib.auth import logout
import jwt
import time
import pandas as pd

from joblib import Parallel, delayed
import joblib
# from sklearn.preprocessing import MinMaxScaler

# from pandas_datareader import data as web
# import yfinance
# yfinance.pdr_override()

# Create your views here.

# obj = main.TrainStockModel()
# obj.m()

def getStock(request):
    response = {"data":"failure", "res":False}
    stock_data = main.StockData()
    
    
    # print(df)
    if request.method == "POST":
        d = request.body
        print(d)
        stock_ticker_name = json.loads(d)[1:-1]
        print("Stock Ticker name " +stock_ticker_name)
        dataframe = pd.DataFrame()
        try:
            stock_data.get_data(stock_ticker_name)
            df = stock_data.technical_analysis(stock_ticker_name)
            # df.reset_index(inplace=True)
            # df['Date'] = df['Date'].dt.strftime('%Y-%m-%d')
            dataframe = df
            
        except Exception as e:
           print(e)
           
        #    df = web.get_data_yahoo(stock_ticker_name,start = "2023-01-01",end = "2023-02-11")
        
        # print(df.)

        # print(df.to_json())
        finance_data = stock_data.get_finance_data_yahoo(stock_ticker_name)
        
        response = {"data":{"DataFrame":dataframe.to_json(),"finance_data":finance_data}, "res":True}
    return JsonResponse(response)
def getPredictedValues(request):
    # trainedModel = main.TrainStockModel()
    # predicted_data = trainedModel.m(stock_ticker_name)
    pass
# "predicted_data":json.dumps(predicted_data.to_list())
def getNews(request):
    res = {"response":"failure","data":""}
    news = main.News()
    nifty = main.Nifty50()

    if request.method == "GET":
        d = request.body;
        news_data = news.get_news()
        # print(news_data)
        nifty_data = nifty.getHistoricNifty_YF_Data()
        nifty_data.reset_index(inplace=True)
        nifty_data['Date'] = nifty_data['Date'].dt.strftime('%Y-%m-%d')
        res = {"response":"success","data":news_data,"nifty_data":nifty_data.to_json()}
    return JsonResponse(res);

def getNiftyData(request):
    res = {"response":"failure","nifty_data":""}
    nifty = main.Nifty50()
    if request.method =='GET':
        nifty_data = nifty.getHistoricNifty_YF_Data()
        nifty_data.reset_index(inplace=True)
        nifty_data['Date'] = nifty_data['Date'].dt.strftime('%Y-%m-%d')
        res = {"response":"success","nifty_data":nifty_data.to_json()}
    return JsonResponse(res);

def getSensexData(request):
    res = {"response":"failure","sensex_data":""}
    sensex = main.Nifty50()
    if request.method =="GET":
        sensex_data = sensex.getHistoricSensex_data();
        sensex_data.reset_index(inplace=True)
        sensex_data['Date'] = sensex_data['Date'].dt.strftime('%Y-%m-%d')
        res = {"response":"success","sensex_data":sensex_data.to_json()}
    return JsonResponse(res);

def companiesByMarketValuation(request):
    res = {"response":"failure","data":""}
    stock_data = main.StockData()

    if(request.method == 'GET'):
        open_price,close_price = stock_data.getOpenCloseStockPrice();
        print(open_price,close_price)
        res = {"response":"success","data":{"open_price":open_price,"close_price":close_price}}
    
    return JsonResponse(res);

def getNifty50Stocks(request):
    stock_data = main.StockData() 
    stock_dict = stock_data.getNiftyStockListData()
    return JsonResponse(stock_dict)
    # pass

def contactForm(request):
    res = {"response":"failure","data":""}
    if request.method == "POST":
        data = json.loads(request.body)
        print(data['f_name'])
        con = Contact_db(first_name=data['f_name'],last_name=data['l_name'],email=data['email'],phone=data['m_no'],country=data['country'],sex=data['sex'],desc=data['desc'])
        con.save()


        res = {"response":"success","data":data}
    return JsonResponse(res)

def handleLogin(request):
    key = "MySecretKey@1234"
    authToken = ""

    res = {"response":"failure","authToken":authToken,"data":""}
    if request.method == "POST":
        print(request.body)
        data = json.loads(request.body)
        # {u_name:"",pass:""}
        username = data['u_name']
        password = data['pass']


        try:
            user = authenticate(request,username=username, password=password)
            print(user)
            if user is not None:
                login(request,user);
                authToken = jwt.encode({"username":username},key,algorithm="HS256")

            res = {"response":"success","authToken":authToken,"data":"You are logged in"};
    
        except Exception as e:
            res = {"response":"failure","authToken":authToken,"data":"You are not logged in and there is a error "+str(e)}
        

        
    return JsonResponse(res);

def handlelogout(request):
    logout(request)
    res = {"response":"success","data":"You are logged out"};

    return JsonResponse(res);



def handleRegister(request):
    key = "MySecretKey@1234"
    authToken = ""
    res = {"response":"failure","authToken":"","data":""}
    if request.method == "POST":
        print(request.body)
        u_data = json.loads(request.body)
        username = u_data['U_name']
        # print(u_data.keys())

# {f_name:"",l_name:"",U_name:"",age:"",sex:"",country:"",mb_no:"",email:"",birth_date:"",pass:"",c_pass:""}
        # user = User.objects.create_user(first_name=u_data['f_name'],last_name=u_data['l_name'],username=u_data['U_name'],password=u_data['pass']);
        
# datetime.strptime(u_data["birth_date"],"%Y-%m-%d").date()
        # profile = Profile(user=user,age=u_data['age'],sex=u_data['sex'],country=u_data['country'],phone=u_data['mb_no'],birth_date=u_data["birth_date"])
        # profile.save()
        # user.save()

        try:
            authToken = jwt.encode({"username":username},key,algorithm="HS256")
            user = User.objects.create_user(first_name=u_data['f_name'],last_name=u_data['l_name'],username=u_data['U_name'],email=u_data['email'],password=u_data['pass'],age=u_data['age'],sex=u_data['sex'],country=u_data['country'],phone=u_data['mb_no'],birth_date=u_data["birth_date"])
            user.save()
            

            res = {"response":"success","authToken":authToken,"data":f"{u_data['f_name']} {u_data['l_name']} Successfully Registered in"};
        except Exception as e:
            res = {"response":"failure","authToken":"","data":f"Error while registering user {e}"};

    return JsonResponse(res);

def csrf(request):
    print("CSRF is requested")
    return JsonResponse({'csrfToken':get_token(request)})

  