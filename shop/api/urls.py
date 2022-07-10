from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_links),
    path('categories/', views.get_categories),
    path('category/<pk>/', views.single_category),
    path('products/', views.get_products),
    path('product/<pk>/', views.single_product),
    path('user/<pk>/', views.get_single_user),
    path('post/product/', views.post_product),
    path('user/products/<pk>/', views.get_user_products),
    path('certain_category/<pk>/', views.certain_category),
    path('similar_items/<pk>/', views.similar_items),
]
