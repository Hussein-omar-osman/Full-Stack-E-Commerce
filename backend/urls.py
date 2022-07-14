from django.urls import path
from backend.views import *

urlpatterns = [
    path('user/<pk>/', get_single_user),
    path('user/become-vendor/', become_vendor),
    path('profile/<pk>/', ProfileView.as_view()),
]
