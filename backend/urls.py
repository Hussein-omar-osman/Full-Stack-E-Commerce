from django.urls import path
from backend.views import *

urlpatterns = [
    path('user/<pk>/', get_single_user),
]
