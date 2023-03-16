from django.shortcuts import render
from django.http import JsonResponse
import json
from django.middleware.csrf import get_token


from .stock_api import main 



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
        print(request.body)
        data = json.loads(request.body)
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
        res = {"response":"success","data":"You Successfully Registered in"};
    return JsonResponse(res);

def csrf(request):
    print("CSRF is requested")
    return JsonResponse({'csrfToken':get_token(request)})

