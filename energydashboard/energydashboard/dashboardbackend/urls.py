# This is all the urls for the backend which is separated from front end and they should have different urls path
# to make this work
# from rest_framework import routers

# from .api import 


# PublishPostAPI, GetPostAP

from django.urls import path, include
from django.conf.urls import url

from .api import grate, getElecAllConsumption, getElecConsumptionOneYear, getElecConsumptionOneMonth

urlpatterns = [ 

    path('grate/', grate, name='grate'),
    path('elecall/', getElecAllConsumption, name='elecall'),
    path('eleconeyear/<int:hours>', getElecConsumptionOneYear, name='elecOneYear'),
    path('eleconemonth/<int:days>', getElecConsumptionOneMonth, name='elecOneMonth'),

    # path('autoRegister/', auto_registration_view, name='autoRegister'),

    # path('api/posts/', GetPostAPI.as_view()),


    # url(r'api/get_attractions/$', GetAttractionsAPI.as_view()),



]

