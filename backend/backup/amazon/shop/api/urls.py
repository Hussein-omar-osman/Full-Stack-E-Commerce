from django.urls import path
from . import views

urlpatterns = [

    path('shop/', views.get_links),
    path('categories/', views.get_categories),
    path('category/<pk>/', views.single_category),
    path('products/', views.get_products),
    path('product/<pk>/', views.single_product),
    path('certain_category/<name>/', views.certain_category),
    path('similar_items/<name>/', views.similar_items),

]