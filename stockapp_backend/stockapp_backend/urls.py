"""stockapp_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from core.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('getStock/',getStock,name="getStock"),
    path('contactForm/',contactForm,name="contactForm"),
    path('handleLogin/',handleLogin,name="handleLogin"),
    path('handlelogout/',handlelogout,name="handlelogout"),
    path('handleRegister/',handleRegister,name="handleRegister"),
    path('getNews/',getNews,name="getNews"),
    path('getNiftyData/',getNiftyData,name="getNiftyData"),
    path('companiesByMarketValuation/',companiesByMarketValuation,name="companiesByMarketValuation"),
    path('getSensexData/',getSensexData,name="getSensexData"),
    path('getNifty50Stocks/',getNifty50Stocks,name="getNifty50Stocks"),
    # getNifty50Stocks
    # getSensexData
    # companiesByMarketValuation
    # getNiftyData
    path('csrf/',csrf),
]
