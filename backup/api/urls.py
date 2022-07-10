from rest_framework.response import Response
from rest_framework.decorators import api_view
from . import views
from django.urls import path

urlpatterns = [
    path('', views.getRoutes),
]
