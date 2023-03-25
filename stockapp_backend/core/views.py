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

# Create your views here.


def getStock(request):
    response = {"data":"failure"}
    if request.method == "POST":
        d = request.body
        print(json.loads(d))
        response = {"data":"success"}
    return JsonResponse(response)

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
    res = {"response":"failure","data":""}
    if request.method == "POST":
        print(request.body)
        res = {"response":"success","data":"You are logged in"};
    return JsonResponse(res);

def handleRegister(request):
    res = {"response":"failure","data":""}
    if request.method == "POST":
        print(request.body)
        u_data = json.loads(request.body)
        print(u_data.keys())

# {f_name:"",l_name:"",U_name:"",age:"",sex:"",country:"",mb_no:"",email:"",birth_date:"",pass:"",c_pass:""}
        # user = User.objects.create_user(first_name=u_data['f_name'],last_name=u_data['l_name'],username=u_data['U_name'],password=u_data['pass']);
        
# datetime.strptime(u_data["birth_date"],"%Y-%m-%d").date()
        # profile = Profile(user=user,age=u_data['age'],sex=u_data['sex'],country=u_data['country'],phone=u_data['mb_no'],birth_date=u_data["birth_date"])
        # profile.save()
        # user.save()

        user = User.objects.create_user(first_name=u_data['f_name'],last_name=u_data['l_name'],username=u_data['U_name'],password=u_data['pass'],age=u_data['age'],sex=u_data['sex'],country=u_data['country'],phone=u_data['mb_no'],birth_date=u_data["birth_date"])
        user.save()
        

        res = {"response":"success","data":f"{u_data['f_name']} {u_data['l_name']} Successfully Registered in"};
    return JsonResponse(res);

def csrf(request):
    print("CSRF is requested")
    return JsonResponse({'csrfToken':get_token(request)})

  