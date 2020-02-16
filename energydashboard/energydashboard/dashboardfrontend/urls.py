from django.urls import path

from . import views

urlpatterns = [
    path('envimpact/', views.index),
    path('ecohouse/', views.index),
    path('energyconsumption/', views.index),
    path('feedback/', views.index),
    path('solar/', views.index),
    path('water/', views.index),
    path('lighting/', views.index),
    path('geothermal/', views.index),
    path('ratingsystem/', views.index),
    path('naturalresource/', views.index),
    path('sustainabledesign/', views.index),
    path('sunny/', views.index),
    path('cloudy/', views.index),
    path('geo/', views.index),
    path('sankey/', views.index),
    path('cslesc/', views.index),
    path('', views.index),

]