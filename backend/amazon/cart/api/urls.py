from django.urls import path
from . import views

urlpatterns = [

    path('', views.get_links),
    path('carts/', views.get_carts),
    path('cartitems/', views.get_cartitems),
    path('cart/<pk>', views.single_cart),
    path('cartitem/<pk>', views.single_cartitem),
]